import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github, Layers, Info, Image as ImageIcon } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const filters = [
    { label: 'Todos os Projetos', value: 'all' },
    { label: 'Web & Full Stack', value: 'web' },
    { label: 'Data Science & Python', value: 'data' },
    { label: 'IoT & Edge Computing', value: 'iot' },
  ];

  return (
    <section id="projetos" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
            Portfólio em Ação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Projetos práticos envolvendo soluções ponta a ponta, arquitetura distribuída, análise estatística e desenvolvimento full stack.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all ${
                activeFilter === f.value
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Notification tip for user about how to place photos */}
        <div className="mb-8 p-3 rounded-xl bg-cyan-950/30 border border-cyan-800/40 flex items-center justify-between text-xs text-slate-300 max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <Info size={16} className="text-cyan-400 shrink-0" />
            <span>
              <strong>Dica de Personalização:</strong> As imagens de cada projeto ficam na pasta <code className="text-cyan-300 font-mono bg-slate-900 px-1 py-0.5 rounded">public/projects/</code>. Você pode substituir pelos seus próprios prints a qualquer momento!
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 flex flex-col group"
            >
              {/* Project Image Preview Slot */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* Custom Photo Path Indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-950/90 text-slate-300 border border-slate-700">
                    <ImageIcon size={12} className="text-cyan-400" />
                    {project.image}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 space-y-1.5 border-t border-slate-800/80 pt-4">
                    {project.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} />
                    Ver no GitHub
                    <ExternalLink size={13} className="text-slate-500" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    Repositório
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
