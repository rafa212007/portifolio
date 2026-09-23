import React from 'react';
import { skillsData } from '../data/skillsData';
import { Layout, Server, BarChart3, Cpu } from 'lucide-react';
import { useSitePreferences } from '../contexts/SitePreferences';

const iconMap = {
  Layout: Layout,
  Server: Server,
  BarChart3: BarChart3,
  Cpu: Cpu,
};

export default function Skills() {
  const { translate } = useSitePreferences();
  const skills = translate('skills');
  return (
    <section id="habilidades" className="py-20 relative bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
            {skills.label}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
            {skills.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            {skills.description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Cpu;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-bold text-base text-white">{cat.category}</h3>
                  </div>

                  <div className="space-y-2.5">
                    {cat.skills.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/70 flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-slate-200">{s.name}</span>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                          {s.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
