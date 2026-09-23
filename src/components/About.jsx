import React from 'react';
import { GraduationCap, Code2, Database, Cpu, Globe, CheckCircle2, Download } from 'lucide-react';
import { useSitePreferences } from '../contexts/SitePreferences';

export default function About() {
  const { translate } = useSitePreferences();
  const about = translate('about');
  const resume = translate('resume');
  const pillars = [
    {
      icon: GraduationCap,
      title: 'Formação na FIAP',
      desc: 'Bacharelado em Engenharia de Software (2025 - Em andamento). Base sólida em estruturas de dados, POO, sistemas distribuídos e qualidade de software.',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Code2,
      title: 'Full Stack & Web Moderno',
      desc: 'Experiência prática construindo aplicações web com React, Vite, Tailwind CSS no front-end, e back-end em Python com Flask e ORMs.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Database,
      title: 'Ciência de Dados & Bancos',
      desc: 'Análise estatística descritiva e inferencial com Pandas, NumPy e SciPy. Modelagem de dados relacionais e queries em Oracle Database e SQL.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: Cpu,
      title: 'Edge Computing & IoT',
      desc: 'Integração de hardware inteligente com ESP32, protocolo MQTT, conteinerização com Docker na Azure e plataforma FIWARE.',
      color: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/20',
    },
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            {about.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
            {about.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            {about.description}
          </p>
        </div>

        <div className="mb-10 flex justify-center">
          <a
            href="/curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-slate-950 font-bold text-sm hover:bg-cyan-300 transition-colors print:hidden"
          >
            <Download size={18} />
            {resume.download}
          </a>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3.5 rounded-xl border ${pillar.bg} ${pillar.color} transition-transform group-hover:scale-110`}>
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {about.pillars[idx][0]}
                    </h3>
                    <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
                      {about.pillars[idx][1]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight strip */}
        <div className="about-highlight mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-emerald-400" size={20} />
            <span className="text-sm text-slate-300 font-medium">{about.highlights[0]}</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-cyan-400" size={20} />
            <span className="text-sm text-slate-300 font-medium">{about.highlights[1]}</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-teal-400" size={20} />
            <span className="text-sm text-slate-300 font-medium">{about.highlights[2]}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
