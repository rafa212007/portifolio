import React from 'react';
import { GraduationCap, Award, BookOpen, Languages } from 'lucide-react';
import { useSitePreferences } from '../contexts/SitePreferences';

export default function Education() {
  const { language, translate } = useSitePreferences();
  const education = translate('education');
  const timelineByLanguage = {
    pt: [
      ['2025 - Em andamento', 'Bacharelado em Engenharia de Software', 'Formação com foco em engenharia de sistemas modernos, algoritmos, arquitetura de software, programação orientada a objetos com Java, banco de dados relacionais, edge computing e inteligência artificial aplicada.'],
      ['Cursos Complementares', 'HTML, CSS & Ambientes de Desenvolvimento', 'Estruturação semântica de páginas web, estilização moderna com CSS, organização de arquivos e boas práticas para interfaces responsivas.'],
      ['Cursos Complementares', 'SQL & Modelagem de Bancos de Dados', 'Armazenamento e processamento de dados relacionais, criação de queries analíticas, junções (JOINs), filtros e procedimentos.'],
    ],
    en: [
      ['2025 - Ongoing', 'Bachelor\'s Degree in Software Engineering', 'Education focused on modern systems engineering, algorithms, software architecture, object-oriented programming with Java, relational databases, edge computing and applied artificial intelligence.'],
      ['Additional Courses', 'HTML, CSS & Development Environments', 'Semantic web page structure, modern CSS styling, file organization and best practices for responsive interfaces.'],
      ['Additional Courses', 'SQL & Database Modeling', 'Relational data storage and processing, analytical queries, joins, filters and procedures.'],
    ],
    es: [
      ['2025 - En curso', 'Grado en Ingenieria de Software', 'Formacion enfocada en ingenieria de sistemas modernos, algoritmos, arquitectura de software, programacion orientada a objetos con Java, bases de datos relacionales, edge computing e inteligencia artificial aplicada.'],
      ['Cursos Complementarios', 'HTML, CSS y Entornos de Desarrollo', 'Estructuracion semantica de paginas web, estilos modernos con CSS, organizacion de archivos y buenas practicas para interfaces adaptables.'],
      ['Cursos Complementarios', 'SQL y Modelado de Bases de Datos', 'Almacenamiento y procesamiento de datos relacionales, consultas analiticas, uniones, filtros y procedimientos.'],
    ],
  };
  const timeline = (timelineByLanguage[language] || timelineByLanguage.pt).map(([year, title, desc], index) => ({
    year,
    title,
    desc,
    institution: index === 0 ? 'FIAP' : 'Alura',
    badge: index === 0 ? education.degree : education.certificate,
    color: ['border-cyan-500/30 text-cyan-400', 'border-emerald-500/30 text-emerald-400', 'border-purple-500/30 text-purple-400'][index],
  }));
  return (
    <section id="formacao" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-teal-400 bg-teal-950/60 border border-teal-800/60 px-3 py-1 rounded-full">
            {education.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
            {education.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            {education.description}
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
                <h4 className="text-sm font-bold text-white">{education.languages}</h4>
                <p className="text-xs text-slate-400">{education.english}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-1 rounded bg-slate-900 border border-slate-700">
              {education.intermediate}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
