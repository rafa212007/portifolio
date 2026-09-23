import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, ExternalLink, Moon, Sun } from 'lucide-react';
import { useSitePreferences } from '../contexts/SitePreferences';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre');
  const { language, setLanguage, theme, setTheme, translate } = useSitePreferences();
  const nav = translate('nav');
  const controls = translate('controls');
  const navLinks = [
    { name: nav.about, href: '#sobre' },
    { name: nav.skills, href: '#habilidades' },
    { name: nav.projects, href: '#projetos' },
    { name: nav.education, href: '#formacao' },
    { name: nav.contact, href: '#contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((link) => document.querySelector(link.href));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
      }),
      { rootMargin: '-35% 0px -55% 0px' }
    );
    sections.filter(Boolean).forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [language]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo com Foto de Perfil em Bolinha */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-cyan-400 via-teal-400 to-emerald-400 transition-transform group-hover:scale-105 shadow-md shadow-cyan-500/25">
            <img
              src="/profile.jpg"
              alt="Rafael Carmona"
              decoding="async"
              className="w-full h-full object-cover object-[center_20%] rounded-full"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 shadow-sm" title="Disponível"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight text-base group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              Rafael Carmona
            </span>
            <span className="text-[11px] text-cyan-400/90 font-mono tracking-wider uppercase">Engenharia de Software</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-cyan-400 after:transition-all ${activeSection === link.href ? 'text-cyan-400 after:w-full' : 'text-slate-300 hover:text-cyan-400 hover:after:w-full after:w-0'}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="language-select">{controls.language}</label>
            <select
              id="language-select"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="bg-slate-900/80 border border-slate-700 text-slate-200 text-xs rounded-lg px-2 py-2 outline-none focus:border-cyan-400"
              aria-label={controls.language}
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
              title={theme === 'dark' ? controls.light : controls.dark}
              aria-label={theme === 'dark' ? controls.light : controls.dark}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
          <a
            href="https://github.com/rafa212007"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-augusto-carmona-287230361"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          
          <a
            href="#contato"
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 rounded-lg transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
          >
            {nav.talk}
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label={isOpen ? controls.closeMenu : controls.openMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between px-3">
            <div className="flex gap-4">
              <a href="https://github.com/rafa212007" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Github size={22} />
              </a>
              <a href="https://www.linkedin.com/in/rafael-augusto-carmona-287230361" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400">
                <Linkedin size={22} />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <label className="sr-only" htmlFor="mobile-language-select">{controls.language}</label>
              <select
                id="mobile-language-select"
                value={language}
                onChange={(event) => setLanguage(event.target.value)}
                className="bg-slate-900 border border-slate-700 text-slate-200 text-xs rounded-lg px-2 py-2"
                aria-label={controls.language}
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
              <button
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-slate-300 hover:text-cyan-400 rounded-lg"
                title={theme === 'dark' ? controls.light : controls.dark}
                aria-label={theme === 'dark' ? controls.light : controls.dark}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
            <a
              href="#contato"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 rounded-lg"
            >
              {nav.talk}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
