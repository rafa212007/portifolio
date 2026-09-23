import React, { useRef, useEffect, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { projectsData } from '../data/projectsData';
import ProjectModal from './ProjectModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSitePreferences } from '../contexts/SitePreferences';
import { getLocalizedProject } from '../data/projectTranslations';

gsap.registerPlugin(ScrollTrigger);

// ─── helpers ────────────────────────────────────────────────────────────────

function calcOpacity(index, n, rotation) {
  const itemAngle = (index * 360) / n;
  const rel = ((itemAngle + (rotation % 360)) + 360) % 360;
  const norm = Math.abs(rel > 180 ? 360 - rel : rel);
  return Math.max(0.3, 1 - norm / 180);
}

// ─── Card ────────────────────────────────────────────────────────────────────

function GalleryCard({ project, rotation, index, total, radius, onClick, simpleMode, cardRef }) {
  const { language } = useSitePreferences();
  const angle = (index * 360) / total;
  const opacity = calcOpacity(index, total, rotation);
  const academicLabel = language === 'pt' ? 'Projeto academico' : language === 'es' ? 'Proyecto academico' : 'Academic project';

  return (
    <div
      ref={cardRef}
      data-gallery-card
      onClick={() => onClick(project)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick(project);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={project.title}
      style={{
        ...(simpleMode
          ? {
              flex: '0 0 min(78vw, 300px)',
              width: 'min(78vw, 300px)',
              height: 'min(62dvh, 400px)',
              opacity: 1,
            }
          : {
              position: 'absolute',
              width: 'min(78vw, 300px)',
              height: 'min(62dvh, 400px)',
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
              opacity,
              transition: 'opacity 0.3s linear',
            }),
        cursor: 'pointer',
      }}
    >
      <div
        className="w-full h-full rounded-lg border border-slate-700/60 shadow-2xl overflow-hidden relative"
        style={{
          background: 'rgba(15,23,42,0.72)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Cover image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Bottom caption */}
        <div
          className="absolute bottom-0 left-0 right-0 p-5"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
          }}
        >
          <p className="project-card-title text-white text-xl font-bold leading-tight">{project.title}</p>
          <p className="project-card-title text-white/80 text-sm italic mt-1">
            {project.technologies.slice(0, 3).join(' · ')}
          </p>
          <p className="project-card-title text-white/70 text-xs mt-0.5">{academicLabel} · FIAP</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main gallery component ──────────────────────────────────────────────────

export default function CircularGallery3D({ scrollProgress, simpleMode = false }) {
  const { language, translate } = useSitePreferences();
  const projectLabels = translate('projects');
  const localizedProjects = useMemo(
    () => projectsData.map((project) => getLocalizedProject(project, language)),
    [language]
  );
  const [activeCategory, setActiveCategory] = useState('all');
  const galleryProjects = useMemo(
    () => activeCategory === 'all'
      ? localizedProjects
      : localizedProjects.filter((project) => project.category === activeCategory),
    [activeCategory, localizedProjects]
  );
  const [selectedProject, setSelectedProject] = useState(null);
  const rotationRef = useRef(0);
  const rafRef = useRef(null);
  const ringRef = useRef(null);
  const cardRefs = useRef([]);
  const introProgressRef = useRef(0);
  const outroProgressRef = useRef(0);
  const scrollPauseRef = useRef(false);
  const scrollTimerRef = useRef(null);

  // Derived radius
  const [radius, setRadius] = useState(520);

  useEffect(() => {
    const update = () => setRadius(window.innerWidth < 700 ? 330 : 520);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const n = galleryProjects.length;
  const dispersions = useMemo(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 700;
    return {
      intro: galleryProjects.map(() => ({
        x: (Math.random() * 2 - 1) * (isMobile ? 260 : 640),
        y: (Math.random() * 2 - 1) * (isMobile ? 420 : 520),
        rotation: (Math.random() * 2 - 1) * 100,
      })),
      outro: galleryProjects.map(() => ({
        x: (Math.random() * 2 - 1) * (isMobile ? 300 : 700),
        y: (Math.random() * 2 - 1) * (isMobile ? 460 : 560),
        rotation: (Math.random() * 2 - 1) * 220,
      })),
    };
  }, [galleryProjects]);

  const updateCardTransforms = useCallback((introProgress, outroProgress) => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const angle = (index * 360) / n;
      const intro = dispersions.intro[index];
      const outro = dispersions.outro[index];
      const isExiting = outroProgress > 0;
      const progress = isExiting ? outroProgress : introProgress;
      const x = isExiting ? outro.x * progress : intro.x * (1 - progress);
      const y = isExiting ? outro.y * progress : intro.y * (1 - progress);
      const cardRotation = isExiting ? outro.rotation * progress : intro.rotation * (1 - progress);

      card.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(${cardRotation}deg)${
        isExiting ? ` scale(${1 - 0.5 * progress})` : ''
      } rotateY(${angle}deg) translateZ(${radius}px)`;
      card.style.opacity = String(
        isExiting ? Math.max(0, 1 - progress) : Math.max(0, progress)
      );
    });
  }, [dispersions, n, radius]);

  useLayoutEffect(() => {
    if (simpleMode) return undefined;

    updateCardTransforms(0, 0);

    const gallery = document.querySelector('[data-gallery]');
    const panels = Array.from(document.querySelectorAll('[data-panel]'));
    const galleryIndex = panels.indexOf(gallery);
    const nextPanel = galleryIndex >= 0 ? panels[galleryIndex + 1] : null;
    if (!gallery || !nextPanel) return undefined;

    const context = gsap.context(() => {
      ScrollTrigger.create({
        trigger: gallery,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        onUpdate: (self) => {
          introProgressRef.current = self.progress;
          outroProgressRef.current = 0;
          updateCardTransforms(self.progress, 0);
        },
        onLeaveBack: () => {
          introProgressRef.current = 0;
          updateCardTransforms(0, 0);
        },
      });

      ScrollTrigger.create({
        trigger: nextPanel,
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        onUpdate: (self) => {
          outroProgressRef.current = self.progress;
          updateCardTransforms(introProgressRef.current, self.progress);
        },
        onLeaveBack: () => {
          outroProgressRef.current = 0;
          updateCardTransforms(introProgressRef.current, 0);
        },
      });
    }, gallery);

    return () => context.revert();
  }, [simpleMode, updateCardTransforms]);

  // Apply rotation to the DOM ring directly (no React state, no re-render)
  const applyRotation = useCallback((deg) => {
    rotationRef.current = deg;
    if (ringRef.current) {
      ringRef.current.style.transform = `rotateY(${deg}deg)`;
    }
    updateCardTransforms(introProgressRef.current, outroProgressRef.current);
  }, [updateCardTransforms]);

  // Auto-rotation via rAF
  useEffect(() => {
    let running = true;
    const tick = () => {
      if (!running) return;
      if (!scrollPauseRef.current) {
        applyRotation(rotationRef.current + 0.02);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [applyRotation]);

  // Scroll-driven rotation from parent (via scrollProgress prop 0→1)
  useEffect(() => {
    if (scrollProgress == null) return;
    applyRotation(scrollProgress * 360);
    scrollPauseRef.current = true;
    clearTimeout(scrollTimerRef.current);
    scrollTimerRef.current = setTimeout(() => {
      scrollPauseRef.current = false;
    }, 150);
  }, [scrollProgress, applyRotation]);

  return (
    <>
      {/* 3D scene */}
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ perspective: 2000 }}
      >
        <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2 px-4 pointer-events-auto">
          {[
            ['all', projectLabels.all],
            ['web', projectLabels.web],
            ['data', projectLabels.data],
            ['iot', projectLabels.iot],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => setActiveCategory(value)}
              aria-pressed={activeCategory === value}
              className={`px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold border transition-colors ${
                activeCategory === value
                  ? 'bg-cyan-400 text-slate-950 border-cyan-300'
                  : 'bg-slate-950/80 text-slate-300 border-slate-700 hover:border-cyan-400 hover:text-cyan-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        {simpleMode ? (
          <div className="w-full overflow-x-auto snap-x snap-mandatory px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex w-max gap-4">
              {galleryProjects.map((project, i) => (
                <div key={project.id} className="snap-center">
                  <GalleryCard
                    project={project}
                    rotation={0}
                    index={i}
                    total={n}
                    radius={0}
                    onClick={setSelectedProject}
                    simpleMode
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            ref={ringRef}
            style={{
              position: 'relative',
              width: 0,
              height: 0,
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotationRef.current}deg)`,
            }}
          >
            {galleryProjects.map((project, i) => (
              <GalleryCard
                key={project.id}
                project={project}
                rotation={rotationRef.current}
                index={i}
                total={n}
                radius={radius}
                onClick={setSelectedProject}
                cardRef={(element) => {
                  cardRefs.current[i] = element;
                }}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
