import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, MessageSquare, Sparkles, Terminal, Code2, Coffee } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { triggerNeonConfetti } from '../utils/confetti';
import { useSitePreferences } from '../contexts/SitePreferences';

export default function Hero() {
  const { language, translate } = useSitePreferences();
  const hero = translate('hero');
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // 1. Dynamic Greeting based on user's hour
  const [greeting, setGreeting] = useState('');
  useEffect(() => {
    const hour = new Date().getHours();
    const greetings = {
      pt: ['Bom dia', 'Boa tarde', 'Boa noite'],
      en: ['Good morning', 'Good afternoon', 'Good evening'],
      es: ['Buenos dias', 'Buenas tardes', 'Buenas noches'],
    };
    const labels = greetings[language] || greetings.pt;
    if (hour >= 5 && hour < 12) setGreeting(`${labels[0]} ☀️`);
    else if (hour >= 12 && hour < 18) setGreeting(`${labels[1]} 🌤️`);
    else setGreeting(`${labels[2]} 🌙`);
  }, [language]);

  // 2. Typewriter Effect Hook
  const phrases = hero.phrases;

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        if (currentText.length + 1 === fullPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        if (currentText.length - 1 === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  const handleConfettiClick = (e) => {
    triggerNeonConfetti(e.clientX, e.clientY);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Interactive Constellation Particles */}
      <ParticleCanvas />

      {/* Background glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Greeting Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-lg backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-cyan-400">{greeting}</span>
              <span className="text-slate-600">|</span>
              <span>{hero.available}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {hero.hello} <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Rafael Augusto Carmona
              </span>
            </h1>

            {/* Dynamic Typewriter Subtitle */}
            <div className="h-10 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 text-lg sm:text-xl font-mono text-cyan-300 font-semibold bg-slate-900/80 px-3.5 py-1.5 rounded-xl border border-cyan-500/30">
                <Code2 size={18} className="text-emerald-400 animate-pulse" />
                <span>{currentText}</span>
                <span className="w-2 h-5 bg-cyan-400 animate-pulse inline-block"></span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-1">
              {hero.description}
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {['FIAP', 'React + Vite', 'Tailwind CSS', 'Python', 'Node.js', 'Oracle DB', 'Edge Computing', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 rounded-md hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons with Confetti Click */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/25 hover:scale-[1.03] active:scale-95"
              >
                {hero.explore}
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5511976516471"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleConfettiClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:border-emerald-500/60 hover:bg-slate-800 transition-all hover:scale-[1.03] active:scale-95 group"
              >
                <MessageSquare size={18} className="text-emerald-400 group-hover:animate-bounce" />
                {hero.whatsapp}
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-5 justify-center lg:justify-start pt-2 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">{hero.connect}</span>
              <a
                href="https://www.linkedin.com/in/rafael-augusto-carmona-287230361"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/rafa212007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors hover:scale-110"
                title="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:rafael.au.carmona@gmail.com"
                className="hover:text-emerald-400 transition-colors hover:scale-110"
                title="E-mail"
              >
                <Mail size={22} />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture Card with Floating Animation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group animate-float">
              
              {/* Outer decorative gradient border with glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

              {/* Floating Gracinha Badge: Top Right */}
              <div className="absolute -top-4 -right-4 z-20 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-[11px] font-mono font-semibold text-cyan-300 shadow-xl flex items-center gap-1.5 backdrop-blur-md animate-bounce">
                <Sparkles size={13} className="text-yellow-400" />
                <span>{hero.openWork}</span>
              </div>

              {/* Card Container */}
              <div className="relative w-72 sm:w-80 md:w-96 rounded-3xl bg-slate-900/90 border border-slate-800 p-4 backdrop-blur-xl shadow-2xl">
                
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center">
                  
                  <img
                    src="/profile.jpg"
                    alt="Rafael Augusto Carmona"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Tech Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                      <span className="text-xs font-mono font-medium text-slate-200">FIAP • 2025</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold">Eng. de Software</span>
                  </div>

                </div>

                {/* Card Sub-info */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-400">
                  <span>{hero.location}</span>
                  <span className="font-mono text-cyan-400">rafael.au.carmona@gmail.com</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
