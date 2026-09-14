import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Sparkles, Layers, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl shadow-cyan-950/40 text-slate-100 z-10 scrollbar-thin">
        
        {/* Header Image Cover */}
        <div className="relative w-full h-56 sm:h-72 bg-slate-950 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700/60"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>

          {/* Badge */}
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
              {project.badge}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          {/* Descrição do Projeto */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <Layers size={16} />
              Descrição do Projeto
            </h3>
            <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line bg-slate-950/50 p-4 sm:p-5 rounded-2xl border border-slate-800/80">
              {project.fullDescription}
            </div>
          </div>

          {/* Principais Funcionalidades */}
          {project.features && project.features.length > 0 && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 size={16} />
                Principais Funcionalidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/70 flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tecnologias Utilizadas */}
          {project.technologies && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-3 flex items-center gap-2">
                <Sparkles size={16} />
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono font-medium rounded-lg bg-slate-950 border border-purple-500/30 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Aprendizados */}
          {project.learnings && (
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-3 flex items-center gap-2">
                <Award size={16} />
                Aprendizados e Competências
              </h3>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                {project.learnings.map((learning, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <span className="text-amber-400">✓</span>
                    <span>{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 transition-all shadow-md shadow-cyan-500/20"
            >
              <Github size={18} />
              Acessar Repositório no GitHub
              <ExternalLink size={14} />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              Fechar
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
