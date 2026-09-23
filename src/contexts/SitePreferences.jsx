import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const translations = {
  pt: {
    languageName: 'Portugues',
    nav: { about: 'Sobre', skills: 'Habilidades', projects: 'Projetos', education: 'Formacao', resume: 'Curriculo', contact: 'Contato', talk: 'Falar Comigo' },
    controls: { language: 'Idioma', theme: 'Tema', light: 'Modo claro', dark: 'Modo escuro', openMenu: 'Abrir menu', closeMenu: 'Fechar menu' },
    hero: {
      available: 'Disponivel para Estagio & Oportunidades',
      hello: 'Ola, sou o',
      description: 'Estudante de Engenharia de Software na FIAP. Crio sistemas modernos e eficientes unindo desenvolvimento web full stack, analise de dados rigorosa e IoT na borda.',
      explore: 'Explorar Projetos',
      whatsapp: 'Conversar no WhatsApp',
      connect: 'Conecte-se:',
      openWork: 'Disponivel para trabalhar',
      location: 'Sao Paulo, SP',
      phrases: ['Desenvolvedor Full Stack', 'Estudante de Eng. de Software @ FIAP', 'Python & Data Science', 'IoT & Edge Computing (ESP32/FIWARE)', 'Criador do Passa a Bola & ConectaPro'],
    },
    about: {
      label: 'Sobre Mim', title: 'Engenharia de Software com Rigor Tecnico e Inovacao', description: 'Sou estudante de Engenharia de Software focado em criar solucoes que unem a flexibilidade do desenvolvimento web moderno, a precisao analitica da ciencia de dados e a eficiencia da computacao na borda.',
      pillars: [
        ['Formacao na FIAP', 'Bacharelado em Engenharia de Software (2025 - Em andamento). Base solida em estruturas de dados, POO, sistemas distribuidos e qualidade de software.'],
        ['Full Stack & Web Moderno', 'Experiencia pratica construindo aplicacoes web com React, Vite, Tailwind CSS no front-end, e back-end em Python com Flask e ORMs.'],
        ['Ciencia de Dados & Bancos', 'Analise estatistica descritiva e inferencial com Pandas, NumPy e SciPy. Modelagem de dados relacionais e queries em Oracle Database e SQL.'],
        ['Edge Computing & IoT', 'Integracao de hardware inteligente com ESP32, protocolo MQTT, conteinerizacao com Docker na Azure e plataforma FIWARE.'],
      ],
      highlights: ['Controle de Versao com Git & GitHub', 'Testes Estatisticos de Hipotese (SciPy)', 'Ingles Intermediario para Documentacao'],
    },
    skills: { label: 'Stack & Habilidades', title: 'Tecnologias e Ferramentas que Domino', description: 'Conjunto de linguagens, bibliotecas e plataformas aplicadas em projetos academicos e praticos.' },
    projects: { label: 'Portfolio em Acao', title: 'Projetos em Destaque', description: 'Clique em qualquer projeto para ver a descricao detalhada, funcionalidades e tecnologias utilizadas.', all: 'Todos', web: 'Web & Full Stack', data: 'Data Science', iot: 'IoT & Edge', details: 'Ver Detalhes', repository: 'Repositorio', clickDetails: 'Clique para ver detalhes', scroll: 'Role para girar - clique para ver detalhes' },
    education: { label: 'Trajetoria', title: 'Formacao Academica & Certificacoes', description: 'Comprometimento continuo com excelencia teorica e pratica em engenharia de software', degree: 'Graduacao', certificate: 'Certificacao', languages: 'Idiomas', english: 'Ingles Intermediario (leitura e escrita tecnica)', intermediate: 'Intermediario' },
    contact: { label: 'Vamos Conversar', title: 'Entre em Contato Comigo', description: 'Estou em busca de oportunidades de estagio e projetos desafiadores. Fique a vontade para me enviar uma mensagem!', whatsapp: 'Clique para iniciar uma conversa direta no WhatsApp', linkedin: 'Conecte-se comigo e acompanhe minhas publicacoes', email: 'E-mail Profissional', emailDesc: 'Respondo prontamente para propostas e contato', copy: 'Copiar E-mail', copied: 'E-mail copiado com sucesso!', github: 'Acesse todos os meus repositorios e commits de projetos' },
    footer: { rights: 'Todos os direitos reservados.', created: 'Criado com React, Vite & Tailwind CSS', top: 'Voltar ao topo' },
    modal: { description: 'Descricao do Projeto', features: 'Principais Funcionalidades', technologies: 'Tecnologias Utilizadas', learnings: 'Aprendizados e Competencias', repository: 'Acessar Repositorio no GitHub', close: 'Fechar' },
    resume: { label: 'Curriculo', title: 'Rafael Augusto Carmona', role: 'Estudante de Engenharia de Software', print: 'Imprimir / Salvar PDF', download: 'Ver Curriculo', objective: 'Objetivo', objectiveText: 'Estudante de Engenharia de Software com foco em Python, desenvolvimento web e ciencia de dados. Experiencia pratica na criacao de interfaces responsivas, analise estatistica e projetos de Edge Computing.', education: 'Formacao', educationText: '2025 - Em andamento | FIAP | Bacharelado em Engenharia de Software', projects: 'Projetos Academicos e Pessoais', courses: 'Cursos Complementares', skills: 'Habilidades Tecnicas', languages: 'Idiomas', english: 'Ingles: Intermediario', contact: 'Contato', projectsList: ['Projeto Web - React, Vite, JavaScript, Tailwind CSS e Git/GitHub.', 'Calculo Computacional com Python - NumPy e Matplotlib.', 'Sistemas em Edge Computing - ESP32, MQTT, FIWARE, Docker, Azure e Dash/Plotly.', 'Data Science - Analise estatistica de missoes espaciais com Pandas, NumPy, Matplotlib, Seaborn e SciPy.', 'Controle Financeiro Pessoal - Flask, Oracle Database, SQLAlchemy, Flask-Login e Chart.js.', 'Database e Java - SQL, modelagem relacional, POO e estruturas de dados.'], coursesList: ['HTML e CSS - Alura', 'SQL - Alura'], skillsList: ['Python', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React + Vite', 'Java', 'Git', 'VSCode', 'Postman', 'Wokwi', 'Edge Computing', 'Data Science', 'Database'] },
  },
  en: {
    languageName: 'English',
    nav: { about: 'About', skills: 'Skills', projects: 'Projects', education: 'Education', resume: 'Resume', contact: 'Contact', talk: 'Contact Me' },
    controls: { language: 'Language', theme: 'Theme', light: 'Light mode', dark: 'Dark mode', openMenu: 'Open menu', closeMenu: 'Close menu' },
    hero: { available: 'Available for Internships & Opportunities', hello: "Hi, I'm", description: 'Software Engineering student at FIAP. I build modern and efficient systems combining full-stack web development, rigorous data analysis and edge IoT.', explore: 'Explore Projects', whatsapp: 'Chat on WhatsApp', connect: 'Connect:', openWork: 'Open for work', location: 'Sao Paulo, Brazil', phrases: ['Full Stack Developer', 'Software Engineering Student @ FIAP', 'Python & Data Science', 'IoT & Edge Computing (ESP32/FIWARE)', 'Creator of Passa a Bola & ConectaPro'] },
    about: { label: 'About Me', title: 'Software Engineering with Technical Rigor and Innovation', description: 'I am a Software Engineering student focused on solutions that combine the flexibility of modern web development, the analytical precision of data science and the efficiency of edge computing.', pillars: [['FIAP Education', 'Bachelor\'s degree in Software Engineering (2025 - Ongoing). Solid foundation in data structures, OOP, distributed systems and software quality.'], ['Full Stack & Modern Web', 'Hands-on experience building web applications with React, Vite and Tailwind CSS on the front end, and Python with Flask and ORMs on the back end.'], ['Data Science & Databases', 'Descriptive and inferential statistical analysis with Pandas, NumPy and SciPy. Relational data modeling and queries with Oracle Database and SQL.'], ['Edge Computing & IoT', 'Smart hardware integration with ESP32, MQTT protocol, Docker containerization on Azure and the FIWARE platform.']], highlights: ['Version Control with Git & GitHub', 'Statistical Hypothesis Testing (SciPy)', 'Intermediate English for Documentation'] },
    skills: { label: 'Stack & Skills', title: 'Technologies and Tools I Master', description: 'Languages, libraries and platforms applied in academic and practical projects.' },
    projects: { label: 'Portfolio in Action', title: 'Featured Projects', description: 'Click any project to see its detailed description, features and technologies.', all: 'All', web: 'Web & Full Stack', data: 'Data Science', iot: 'IoT & Edge', details: 'View Details', repository: 'Repository', clickDetails: 'Click to view details', scroll: 'Scroll to rotate - click to view details' },
    education: { label: 'Journey', title: 'Education & Certifications', description: 'Continuous commitment to theoretical and practical excellence in software engineering.', degree: 'Degree', certificate: 'Certificate', languages: 'Languages', english: 'Intermediate English (technical reading and writing)', intermediate: 'Intermediate' },
    contact: { label: "Let's Talk", title: 'Get in Touch', description: 'I am looking for internship opportunities and challenging projects. Feel free to send me a message!', whatsapp: 'Click to start a direct conversation on WhatsApp', linkedin: 'Connect with me and follow my posts', email: 'Professional E-mail', emailDesc: 'I respond promptly to proposals and inquiries', copy: 'Copy E-mail', copied: 'E-mail copied successfully!', github: 'Access all my repositories and project commits' },
    footer: { rights: 'All rights reserved.', created: 'Built with React, Vite & Tailwind CSS', top: 'Back to top' },
    modal: { description: 'Project Description', features: 'Key Features', technologies: 'Technologies Used', learnings: 'Learnings and Skills', repository: 'Open Repository on GitHub', close: 'Close' },
    resume: { label: 'Resume', title: 'Rafael Augusto Carmona', role: 'Software Engineering Student', print: 'Print / Save PDF', download: 'View Resume', objective: 'Objective', objectiveText: 'Software Engineering student focused on Python, web development and data science, with practical experience building responsive interfaces, statistical analysis and Edge Computing projects.', education: 'Education', educationText: '2025 - Ongoing | FIAP | Bachelor\'s Degree in Software Engineering', projects: 'Academic and Personal Projects', courses: 'Additional Courses', skills: 'Technical Skills', languages: 'Languages', english: 'English: Intermediate', contact: 'Contact', projectsList: ['Web Project - React, Vite, JavaScript, Tailwind CSS and Git/GitHub.', 'Computational Calculus with Python - NumPy and Matplotlib.', 'Edge Computing Systems - ESP32, MQTT, FIWARE, Docker, Azure and Dash/Plotly.', 'Data Science - Space mission statistical analysis with Pandas, NumPy, Matplotlib, Seaborn and SciPy.', 'Personal Finance Control - Flask, Oracle Database, SQLAlchemy, Flask-Login and Chart.js.', 'Database and Java - SQL, relational modeling, OOP and data structures.'], coursesList: ['HTML and CSS - Alura', 'SQL - Alura'], skillsList: ['Python', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React + Vite', 'Java', 'Git', 'VSCode', 'Postman', 'Wokwi', 'Edge Computing', 'Data Science', 'Database'] },
  },
  es: {
    languageName: 'Espanol',
    nav: { about: 'Sobre mi', skills: 'Habilidades', projects: 'Proyectos', education: 'Formacion', resume: 'Curriculo', contact: 'Contacto', talk: 'Habla Conmigo' },
    controls: { language: 'Idioma', theme: 'Tema', light: 'Modo claro', dark: 'Modo oscuro', openMenu: 'Abrir menu', closeMenu: 'Cerrar menu' },
    hero: { available: 'Disponible para Practicas y Oportunidades', hello: 'Hola, soy', description: 'Estudiante de Ingenieria de Software en FIAP. Creo sistemas modernos y eficientes uniendo desarrollo web full stack, analisis riguroso de datos e IoT en el borde.', explore: 'Explorar Proyectos', whatsapp: 'Hablar por WhatsApp', connect: 'Conectate:', openWork: 'Disponible para trabajar', location: 'Sao Paulo, Brasil', phrases: ['Desarrollador Full Stack', 'Estudiante de Ing. de Software @ FIAP', 'Python y Data Science', 'IoT y Edge Computing (ESP32/FIWARE)', 'Creador de Passa a Bola y ConectaPro'] },
    about: { label: 'Sobre Mi', title: 'Ingenieria de Software con Rigor Tecnico e Innovacion', description: 'Soy estudiante de Ingenieria de Software enfocado en crear soluciones que unen la flexibilidad del desarrollo web moderno, la precision analitica de la ciencia de datos y la eficiencia de la computacion en el borde.', pillars: [['Formacion en FIAP', 'Grado en Ingenieria de Software (2025 - En curso). Base solida en estructuras de datos, POO, sistemas distribuidos y calidad de software.'], ['Full Stack y Web Moderno', 'Experiencia practica creando aplicaciones web con React, Vite y Tailwind CSS en frontend, y Python con Flask y ORMs en backend.'], ['Ciencia de Datos y Bases', 'Analisis estadistico descriptivo e inferencial con Pandas, NumPy y SciPy. Modelado de datos relacionales y consultas en Oracle Database y SQL.'], ['Edge Computing e IoT', 'Integracion de hardware inteligente con ESP32, protocolo MQTT, contenedores Docker en Azure y plataforma FIWARE.']], highlights: ['Control de Versiones con Git y GitHub', 'Pruebas de Hipotesis Estadisticas (SciPy)', 'Ingles Intermedio para Documentacion'] },
    skills: { label: 'Stack y Habilidades', title: 'Tecnologias y Herramientas que Domino', description: 'Lenguajes, bibliotecas y plataformas aplicadas en proyectos academicos y practicos.' },
    projects: { label: 'Portafolio en Accion', title: 'Proyectos Destacados', description: 'Haz clic en cualquier proyecto para ver su descripcion detallada, funciones y tecnologias.', all: 'Todos', web: 'Web y Full Stack', data: 'Data Science', iot: 'IoT y Edge', details: 'Ver Detalles', repository: 'Repositorio', clickDetails: 'Haz clic para ver detalles', scroll: 'Desplazate para girar - haz clic para ver detalles' },
    education: { label: 'Trayectoria', title: 'Formacion Academica y Certificaciones', description: 'Compromiso continuo con la excelencia teorica y practica en ingenieria de software.', degree: 'Grado', certificate: 'Certificacion', languages: 'Idiomas', english: 'Ingles Intermedio (lectura y escritura tecnica)', intermediate: 'Intermedio' },
    contact: { label: 'Hablemos', title: 'Contactame', description: 'Busco oportunidades de practicas y proyectos desafiantes. Enviame un mensaje!', whatsapp: 'Haz clic para iniciar una conversacion directa por WhatsApp', linkedin: 'Conectate conmigo y sigue mis publicaciones', email: 'Correo Profesional', emailDesc: 'Respondo rapidamente a propuestas y consultas', copy: 'Copiar Correo', copied: 'Correo copiado correctamente!', github: 'Accede a todos mis repositorios y commits de proyectos' },
    footer: { rights: 'Todos los derechos reservados.', created: 'Creado con React, Vite y Tailwind CSS', top: 'Volver arriba' },
    modal: { description: 'Descripcion del Proyecto', features: 'Funciones Principales', technologies: 'Tecnologias Utilizadas', learnings: 'Aprendizajes y Competencias', repository: 'Abrir Repositorio en GitHub', close: 'Cerrar' },
    resume: { label: 'Curriculo', title: 'Rafael Augusto Carmona', role: 'Estudiante de Ingenieria de Software', print: 'Imprimir / Guardar PDF', download: 'Ver Curriculo', objective: 'Objetivo', objectiveText: 'Estudiante de Ingenieria de Software enfocado en Python, desarrollo web y ciencia de datos, con experiencia practica en interfaces adaptables, analisis estadistico y Edge Computing.', education: 'Formacion', educationText: '2025 - En curso | FIAP | Grado en Ingenieria de Software', projects: 'Proyectos Academicos y Personales', courses: 'Cursos Complementarios', skills: 'Habilidades Tecnicas', languages: 'Idiomas', english: 'Ingles: Intermedio', contact: 'Contacto', projectsList: ['Proyecto Web - React, Vite, JavaScript, Tailwind CSS y Git/GitHub.', 'Calculo Computacional con Python - NumPy y Matplotlib.', 'Sistemas Edge Computing - ESP32, MQTT, FIWARE, Docker, Azure y Dash/Plotly.', 'Data Science - Analisis estadistico de misiones espaciales con Pandas, NumPy, Matplotlib, Seaborn y SciPy.', 'Control Financiero Personal - Flask, Oracle Database, SQLAlchemy, Flask-Login y Chart.js.', 'Database y Java - SQL, modelado relacional, POO y estructuras de datos.'], coursesList: ['HTML y CSS - Alura', 'SQL - Alura'], skillsList: ['Python', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'React + Vite', 'Java', 'Git', 'VSCode', 'Postman', 'Wokwi', 'Edge Computing', 'Data Science', 'Database'] },
  },
};

const SitePreferencesContext = createContext(null);

function getStoredValue(key, fallback) {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

export function SitePreferencesProvider({ children }) {
  const [language, setLanguage] = useState(() => getStoredValue('portfolio-language', 'pt'));
  const [theme, setTheme] = useState(() => getStoredValue('portfolio-theme', 'dark'));

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.classList.toggle('light-theme', theme === 'light');
    document.body.classList.toggle('light-theme', theme === 'light');
    try {
      window.localStorage.setItem('portfolio-language', language);
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // Preferences remain available for the current session.
    }
  }, [language, theme]);

  const value = useMemo(() => ({
    language,
    setLanguage,
    theme,
    setTheme,
    t: (section, key) => translations[language]?.[section]?.[key] ?? translations.pt[section]?.[key] ?? key,
    translate: (section) => translations[language]?.[section] ?? translations.pt[section],
  }), [language, theme]);

  return <SitePreferencesContext.Provider value={value}>{children}</SitePreferencesContext.Provider>;
}

export function useSitePreferences() {
  const context = useContext(SitePreferencesContext);
  if (!context) throw new Error('useSitePreferences must be used inside SitePreferencesProvider');
  return context;
}
