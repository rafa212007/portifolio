import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeFilter);

  const filters = [
    { label: 'Todos', value: 'all', count: projectsData.length },
    { label: 'Web & Full Stack', value: 'web', count: projectsData.filter(p => p.category === 'web').length },
    { label: 'Data Science', value: 'data', count: projectsData.filter(p => p.category === 'data').length },
    { label: 'IoT & Edge', value: 'iot', count: projectsData.filter(p => p.category === 'iot').length },
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
            Clique em qualquer projeto para ver a <strong className="text-slate-200">descrição detalhada</strong>, funcionalidades e tecnologias utilizadas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all flex items-center gap-2 ${
                activeFilter === f.value
                  ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{f.label}</span>
              <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                activeFilter === f.value ? 'bg-slate-950/30 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {f.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="rounded-3xl bg-slate-900/80 border border-slate-800/90 overflow-hidden hover:border-cyan-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/20 flex flex-col group cursor-pointer"
            >
              {/* Image Banner */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-950/85 backdrop-blur-md text-cyan-300 border border-cyan-500/30 shadow-md">
                    {project.badge}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 text-cyan-300 text-xs font-medium border border-cyan-500/30 shadow-lg backdrop-blur-sm">
                    <Eye size={16} />
                    Clique para ver detalhes
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 text-sm mt-3 leading-relaxed line-clamp-3">
                    {project.shortDescription || project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-[11px] font-mono rounded-md bg-slate-800/60 text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Eye size={15} />
                    Ver Detalhes
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  >
                    <Github size={14} />
                    Repositório
                    <ExternalLink size={12} className="text-slate-400" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
