import React from 'react';
import { GraduationCap, Award, BookOpen, Languages } from 'lucide-react';

export default function Education() {
  const timeline = [
    {
      year: '2025 - Em andamento',
      institution: 'FIAP',
      title: 'Bacharelado em Engenharia de Software',
      desc: 'Formação com foco em engenharia de sistemas modernos, algoritmos, arquitetura de software, programação orientada a objetos com Java, banco de dados relacionais, edge computing e inteligência artificial aplicada.',
      badge: 'Graduação',
      color: 'border-cyan-500/30 text-cyan-400',
    },
    {
      year: 'Cursos Complementares',
      institution: 'Alura',
      title: 'HTML, CSS & Ambientes de Desenvolvimento',
      desc: 'Estruturação semântica de páginas web, estilização moderna com CSS, organização de arquivos e boas práticas para interfaces responsivas.',
      badge: 'Certificação',
      color: 'border-emerald-500/30 text-emerald-400',
    },
    {
      year: 'Cursos Complementares',
      institution: 'Alura',
      title: 'SQL & Modelagem de Bancos de Dados',
      desc: 'Armazenamento e processamento de dados relacionais, criação de queries analíticas, junções (JOINs), filtros e procedimentos.',
      badge: 'Certificação',
      color: 'border-purple-500/30 text-purple-400',
    },
  ];

  return (
    <section id="formacao" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800/60 px-3 py-1 rounded-full">
            Trajetória
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
            Formação Acadêmica & Certificações
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Comprometimento contínuo com excelência teórica e prática em engenharia de software.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-start justify-between gap-4"
            >
              <div className="space-y-1 sm:max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{item.institution}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs font-mono text-slate-400">{item.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white pt-1">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed pt-2">{item.desc}</p>
              </div>

              <div className="sm:self-start">
                <span className={`px-3 py-1 text-xs font-mono font-semibold rounded-full bg-slate-950 border ${item.color}`}>
                  {item.badge}
                </span>
              </div>
            </div>
          ))}

          {/* Languages card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Languages size={22} className="text-cyan-400" />
              <div>
                <h4 className="text-sm font-bold text-white">Idiomas</h4>
                <p className="text-xs text-slate-400">Inglês Intermediário (leitura e escrita técnica)</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-700">
              Intermediário
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
