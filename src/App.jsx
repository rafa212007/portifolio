import React, { useState, useRef, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CircularGallery3D from './components/CircularGallery3D';
import { SitePreferencesProvider, useSitePreferences } from './contexts/SitePreferences';
import { useCurtainScroll } from './hooks/useCurtainScroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ── Shared panel wrapper ──────────────────────────────────────────────────────
// Every section except Hero is wrapped in a "panel" for the curtain effect.
// data-inner is the element that recedes (scale + opacity) as the next panel rises.
function Panel({ id, children, extraAttrs = {}, innerClass = '' }) {
  return (
    <section
      data-panel
      id={id}
      className="relative min-h-[100dvh] bg-slate-950"
      style={{ willChange: 'transform' }}
      {...extraAttrs}
    >
      {/* rounded top corners + top shadow for panels after the first */}
      <div
        data-inner
        className={`relative w-full h-full min-h-[100dvh] bg-slate-950 ${innerClass}`}
      >
        {children}
      </div>
    </section>
  );
}

// ── Gallery panel ─────────────────────────────────────────────────────────────
// Holds the 3D ring and exposes a scroll-progress callback set by the hook.
function GalleryPanel({ scrollProgressRef }) {
  const [scrollProgress, setScrollProgress] = useState(null);
  const { translate } = useSitePreferences();
  const projects = translate('projects');

  // The hook writes into this ref so the ScrollTrigger onUpdate can update state
  scrollProgressRef.current = setScrollProgress;

  const simpleMode =
    typeof window !== 'undefined' &&
    (window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      (navigator.deviceMemory != null && navigator.deviceMemory <= 4));

  return (
    <>
      {/* The pinned gallery panel — must be exactly 100dvh */}
      <section
        data-panel
        data-gallery
        id="projetos"
        className="relative bg-slate-950"
        style={{ height: '100dvh', willChange: 'transform', overflow: 'hidden' }}
      >
        {/* Section header */}
        <div className="absolute top-0 left-0 right-0 z-10 pt-8 pb-4 text-center pointer-events-none">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            {projects.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 tracking-tight">
            {projects.title}
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto px-4">
            {projects.scroll}
          </p>
        </div>

        <div
          data-inner
          className="w-full h-full"
          style={{ willChange: 'transform, opacity' }}
        >
          <CircularGallery3D scrollProgress={scrollProgress} simpleMode={simpleMode} />
        </div>
      </section>

      {/* Runway — empty scroll space that drives gallery rotation */}
      {!simpleMode && (
        <div
          data-runway
          aria-hidden="true"
          className="h-[160dvh] min-[700px]:h-[220dvh]"
          style={{ background: 'transparent', pointerEvents: 'none' }}
        />
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
function AppContent() {
  const wrapperRef = useCurtainScroll();
  const galleryProgressRef = useRef(null);
  const { theme, language } = useSitePreferences();
  const [scrollPercent, setScrollPercent] = useState(0);

  useLayoutEffect(() => {
    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPercent(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  // Wire up the gallery ScrollTrigger's onUpdate to drive gallery rotation
  useLayoutEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      (navigator.deviceMemory != null && navigator.deviceMemory <= 4)
    ) return;

    const id = setTimeout(() => {
      const runway = document.querySelector('[data-runway]');
      const gallery = document.querySelector('[data-gallery]');
      if (!runway || !gallery) return;

      ScrollTrigger.create({
        trigger: gallery,
        start: () =>
          gallery.offsetHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
        end: () => '+=' + (window.innerHeight + runway.offsetHeight),
        onUpdate(self) {
          if (!galleryProgressRef.current) return;
          const p = Math.min(
            1,
            (self.progress * (runway.offsetHeight + window.innerHeight)) /
              runway.offsetHeight
          );
          galleryProgressRef.current(p);
        },
        invalidateOnRefresh: true,
      });

      ScrollTrigger.refresh();
    }, 200); // after useCurtainScroll has run

    return () => clearTimeout(id);
  }, []);

  return (
    <div
      ref={wrapperRef}
      data-language={language}
      className={`bg-slate-950 text-slate-100 font-sans language-transition ${theme === 'light' ? 'light-theme' : ''}`}
      style={{ overflowX: 'clip' }}
    >
      <div className="reading-progress" style={{ width: `${scrollPercent}%` }} aria-hidden="true" />
      <Navbar />

      <a className="skip-link" href="#main-content">Pular para o conteúdo</a>

      <main id="main-content">
        {/* Hero — not a curtain panel, sits at natural height */}
        <Hero />

        {/* ── Curtain panels ── */}

        <Panel id="sobre" innerClass="rounded-t-[2rem] border-t border-slate-800/60 shadow-[0_-8px_40px_rgba(0,0,0,0.6)]">
          <About />
        </Panel>

        <Panel id="habilidades" innerClass="rounded-t-[2rem] border-t border-slate-800/60 shadow-[0_-8px_40px_rgba(0,0,0,0.6)]">
          <Skills />
        </Panel>

        {/* Gallery panel + runway (managed together) */}
        <GalleryPanel scrollProgressRef={galleryProgressRef} />

        <Panel id="formacao" innerClass="rounded-t-[2rem] border-t border-slate-800/60 shadow-[0_-8px_40px_rgba(0,0,0,0.6)]">
          <Education />
        </Panel>

        <Panel id="contato" innerClass="rounded-t-[2rem] border-t border-slate-800/60 shadow-[0_-8px_40px_rgba(0,0,0,0.6)]">
          <Contact />
          <Footer />
        </Panel>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <SitePreferencesProvider>
      <AppContent />
    </SitePreferencesProvider>
  );
}
