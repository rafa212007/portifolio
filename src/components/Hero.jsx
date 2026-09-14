import React, { useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MessageSquare, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponível para Estágio & Novas Oportunidades</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Olá, sou o <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Rafael Augusto Carmona
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Estudante de <span className="text-white font-semibold">Engenharia de Software na FIAP</span>. Desenvolvo soluções eficientes unindo{' '}
              <span className="text-cyan-400 font-medium">Python & Data Science</span>,{' '}
              <span className="text-emerald-400 font-medium">Desenvolvimento Web Full Stack</span> e{' '}
              <span className="text-teal-400 font-medium">IoT & Edge Computing</span>.
            </p>

            {/* Quick Tech Badges */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start pt-1">
              {['FIAP', 'React + Vite', 'Tailwind CSS', 'Python', 'Flask', 'Oracle DB', 'Edge Computing', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-900/80 border border-slate-800 text-slate-300 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-lg shadow-cyan-500/25 hover:scale-[1.02]"
              >
                Explorar Projetos
                <ArrowRight size={18} />
              </a>
              <a
                href="https://wa.me/5511976516471"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all hover:scale-[1.02]"
              >
                <MessageSquare size={18} className="text-emerald-400" />
                Conversar no WhatsApp
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-5 justify-center lg:justify-start pt-2 text-slate-400">
              <span className="text-xs uppercase tracking-wider font-mono text-slate-500">Conecte-se:</span>
              <a
                href="https://www.linkedin.com/in/rafael-augusto-carmona-287230361"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://github.com/rafa212007"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <Github size={22} />
              </a>
              <a
                href="mailto:rafael.au.carmona@gmail.com"
                className="hover:text-emerald-400 transition-colors"
                title="E-mail"
              >
                <Mail size={22} />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Picture Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              
              {/* Outer decorative gradient border with glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-500 opacity-60 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

              {/* Card Container */}
              <div className="relative w-72 sm:w-80 md:w-96 rounded-3xl bg-slate-900/90 border border-slate-800 p-4 backdrop-blur-xl shadow-2xl">
                
                {/* Image Container with Fallback */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center">
                  
                  {/* Actual Photo Slot: loads /profile.jpg */}
                  {!imageError && (
                    <img
                      src="/profile.jpg"
                      alt="Rafael Augusto Carmona"
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        imageLoaded ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      onError={() => setImageError(true)}
                    />
                  )}

                  {/* Fallback Graphic (appears if profile.jpg hasn't been added yet) */}
                  {(imageError || !imageLoaded) && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-900 to-slate-950">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
                        <Terminal size={42} className="text-cyan-400" />
                      </div>
                      <span className="font-mono text-2xl font-bold text-white tracking-wider">&lt;RC/&gt;</span>
                      <span className="text-xs text-slate-400 mt-1">Rafael Augusto Carmona</span>
                      <div className="mt-4 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-[11px] font-mono text-cyan-300">
                        public/profile.jpg
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1">Cole sua foto aqui para substituir</span>
                    </div>
                  )}

                  {/* Tech Floating Badge */}
                  <div className="absolute bottom-3 left-3 right-3 py-2 px-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/50 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                      <span className="text-xs font-mono font-medium text-slate-200">FIAP • 2025</span>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-400">Eng. de Software</span>
                  </div>

                </div>

                {/* Card Sub-info */}
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-slate-400">
                  <span>São Paulo, SP</span>
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
