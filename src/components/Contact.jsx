import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Copy, Check, Send } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'rafael.au.carmona@gmail.com';
  const phone = '(11) 97651-6471';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-1 rounded-full">
            Vamos Conversar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 tracking-tight">
            Entre em Contato Comigo
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4">
            Estou em busca de oportunidades de estágio e projetos desafiadores. Fique à vontade para me enviar uma mensagem!
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: WhatsApp */}
          <a
            href="https://wa.me/5511976516471"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-950/20 group flex items-start gap-4"
          >
            <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <MessageSquare size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">WhatsApp</span>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {phone}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Clique para iniciar uma conversa direta no WhatsApp
              </p>
            </div>
          </a>

          {/* Card 2: LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rafael-augusto-carmona-287230361"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group flex items-start gap-4"
          >
            <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">LinkedIn</span>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                rafael-augusto-carmona
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Conecte-se comigo e acompanhe minhas publicações
              </p>
            </div>
          </a>

          {/* Card 3: Email with copy button */}
          <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">E-mail Profissional</span>
                <h3 className="text-base sm:text-lg font-bold text-white break-all">
                  {email}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Respondo prontamente para propostas e contato
                </p>
              </div>
            </div>

            <button
              onClick={copyEmail}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all shrink-0"
              title="Copiar E-mail"
            >
              {copied ? <Check size={18} className="text-emerald-400" /> : <Copy size={18} />}
            </button>
          </div>

          {/* Card 4: GitHub */}
          <a
            href="https://github.com/rafa212007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-300 group flex items-start gap-4"
          >
            <div className="p-3.5 rounded-xl bg-slate-800 text-white border border-slate-700 group-hover:scale-110 transition-transform">
              <Github size={24} />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">GitHub</span>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                github.com/rafa212007
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Acesse todos os meus repositórios e commits de projetos
              </p>
            </div>
          </a>

        </div>

        {/* Floating Toast Notification */}
        {copied && (
          <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm shadow-xl flex items-center gap-2 animate-bounce">
            <Check size={18} />
            E-mail copiado com sucesso!
          </div>
        )}

      </div>
    </section>
  );
}
