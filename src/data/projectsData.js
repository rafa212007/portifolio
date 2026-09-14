export const projectsData = [
  {
    id: 'passa-a-bola',
    title: 'Passa a Bola – Plataforma para Futebol Feminino',
    category: 'web',
    badge: 'Full Stack & Impacto Social',
    image: '/projects/passa-a-bola.jpg',
    github: 'https://github.com/rafa212007',
    shortDescription: 'Plataforma web para incentivar a participação feminina no futebol por meio da organização digital de atletas, equipes e campeonatos.',
    fullDescription: 'O Passa a Bola é uma plataforma web desenvolvida para incentivar a participação feminina no futebol por meio da organização digital de atletas, equipes e campeonatos. O sistema foi criado para facilitar o cadastro de jogadoras, o gerenciamento de competições e a formação equilibrada de times, promovendo uma experiência mais organizada para atletas e administradores.\n\nA aplicação possui diferentes níveis de acesso, permitindo que administradores gerenciem campeonatos e atletas, enquanto as jogadoras podem manter seus perfis atualizados com informações esportivas. O projeto também inclui funcionalidades de avaliação de perfil e distribuição balanceada de atletas entre equipes, considerando características e posições em campo.',
    features: [
      'Cadastro e gerenciamento de atletas.',
      'Controle de campeonatos e equipes.',
      'Sistema de perfis esportivos.',
      'Formação equilibrada de times.',
      'Controle de permissões para administradores e atletas.',
      'Interface responsiva para desktop e dispositivos móveis.'
    ],
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'Git e GitHub'
    ],
    learnings: [
      'Desenvolvimento Full Stack.',
      'Organização de componentes React.',
      'Consumo e integração de APIs.',
      'Estruturação de aplicações escaláveis.',
      'Trabalho colaborativo utilizando Git.'
    ]
  },
  {
    id: 'vinharia-edge',
    title: 'Vinheria Agnello – Monitoramento Inteligente com IoT e Edge Computing',
    category: 'iot',
    badge: 'IoT & Edge Computing',
    image: '/projects/vinharia-edge.svg',
    github: 'https://github.com/rafa212007/Projeto-fiware.git',
    shortDescription: 'Sistema de monitoramento ambiental em tempo real com ESP32, sensores ambientais, protocolo MQTT e plataforma FIWARE.',
    fullDescription: 'Projeto desenvolvido para monitoramento ambiental de uma vinheria utilizando conceitos de Internet das Coisas (IoT) e Edge Computing. O sistema coleta dados em tempo real por meio de sensores conectados a um ESP32, processa as informações e envia os dados para a plataforma FIWARE utilizando o protocolo MQTT.\n\nOs dados coletados são armazenados e posteriormente exibidos em um dashboard interativo, permitindo acompanhar indicadores ambientais críticos para a conservação adequada dos vinhos.',
    features: [
      'Coleta de temperatura, luminosidade e umidade.',
      'Comunicação MQTT entre dispositivos e plataforma.',
      'Integração com FIWARE Orion Context Broker.',
      'Armazenamento histórico utilizando STH-Comet.',
      'Dashboard interativo em Python.',
      'Alertas para condições ambientais inadequadas.'
    ],
    technologies: [
      'ESP32',
      'Wokwi',
      'MQTT',
      'FIWARE',
      'Orion Context Broker',
      'IoT Agent',
      'STH-Comet',
      'Docker',
      'Azure',
      'Python',
      'Dash',
      'Plotly'
    ],
    learnings: [
      'Arquiteturas Edge Computing.',
      'Comunicação entre dispositivos IoT.',
      'Containers Docker.',
      'Hospedagem em nuvem.',
      'Visualização de dados em tempo real.'
    ]
  },
  {
    id: 'space-missions',
    title: 'Space Missions Analytics – Análise Estatística de Missões Espaciais',
    category: 'data',
    badge: 'Ciência de Dados & Estatística',
    image: '/projects/space-missions.jpg',
    github: 'https://github.com/rafa212007',
    shortDescription: 'Investigação estatística em mais de 4.300 missões espaciais (1957–2020) com testes de hipóteses e visualizações em Python.',
    fullDescription: 'Projeto de Data Science desenvolvido para investigar tendências históricas da exploração espacial utilizando um conjunto de dados contendo mais de 4.300 lançamentos realizados entre 1957 e 2020.\n\nForam aplicadas técnicas de limpeza, tratamento e análise estatística para identificar padrões, correlações e diferenças significativas entre grupos de dados. O projeto teve como foco transformar grandes volumes de informação em insights relevantes através de métodos estatísticos e visualizações gráficas.',
    features: [
      'Limpeza e preparação de dados.',
      'Estatística descritiva.',
      'Identificação de outliers.',
      'Análise de correlação.',
      'Testes de hipótese.',
      'Intervalos de confiança.',
      'Visualizações gráficas.'
    ],
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'SciPy'
    ],
    learnings: [
      'Data Cleaning.',
      'Estatística aplicada.',
      'Análise exploratória de dados.',
      'Testes estatísticos.',
      'Comunicação de resultados através de gráficos.'
    ]
  },
  {
    id: 'finance-app',
    title: 'Sistema de Controle Financeiro Pessoal – Aplicação Web Full Stack',
    category: 'web',
    badge: 'Full Stack & Database',
    image: '/projects/finance-app.jpg',
    github: 'https://github.com/rafa212007',
    shortDescription: 'Aplicação web completa para gestão de finanças pessoais com autenticação segura, banco Oracle e gráficos comparativos.',
    fullDescription: 'Aplicação web completa desenvolvida para auxiliar usuários no gerenciamento de finanças pessoais. O sistema permite registrar receitas e despesas, acompanhar transações ao longo do tempo e visualizar indicadores financeiros por meio de gráficos e relatórios.\n\nO projeto foi construído utilizando arquitetura Full Stack, com autenticação segura de usuários, persistência de dados em banco Oracle e utilização de ORM para simplificar a comunicação entre a aplicação e o banco de dados.',
    features: [
      'Cadastro e autenticação de usuários.',
      'Controle de receitas e despesas.',
      'CRUD completo de transações.',
      'Filtros por período.',
      'Relatórios financeiros.',
      'Dashboard com gráficos comparativos.',
      'Isolamento seguro dos dados de cada usuário.'
    ],
    technologies: [
      'Python',
      'Flask',
      'Oracle Database',
      'SQLAlchemy',
      'Flask-Login',
      'Chart.js',
      'HTML',
      'CSS',
      'JavaScript'
    ],
    learnings: [
      'Desenvolvimento Full Stack.',
      'Modelagem de banco de dados.',
      'Segurança de aplicações web.',
      'ORM com SQLAlchemy.',
      'Integração backend e frontend.'
    ]
  },
  {
    id: 'conectapro',
    title: 'ConectaPro – Rede Profissional para Networking',
    category: 'web',
    badge: 'Full Stack & Networking',
    image: '/projects/conectapro.jpg',
    github: 'https://github.com/Equipe-Dev-fiap/gs-web-front-2.git',
    shortDescription: 'Plataforma web para conexões profissionais com perfis completos, mensagens, busca de talentos e recomendação com React, Node.js e Express.',
    fullDescription: 'Desenvolvimento de uma plataforma web inspirada em redes profissionais, permitindo conexão entre usuários, criação e gerenciamento de perfis profissionais, compartilhamento de informações e interação por mensagens.\n\nImplementação de autenticação de usuários e gerenciamento completo de perfil com foto, experiências, formação, habilidades, idiomas, certificações e projetos no frontend com React, Vite e Tailwind CSS. Backend desenvolvido em Node.js e Express para gerenciamento de usuários, perfis e mensagens, incluindo busca, filtros e recomendação profissional com interface responsiva e suporte nativo a modo escuro.',
    features: [
      'Autenticação de usuários e proteção de rotas.',
      'Gerenciamento de perfil completo (foto, experiências, formação, habilidades, idiomas e certificações).',
      'Backend com Node.js e Express para usuários, perfis e mensagens.',
      'Sistema de busca, filtros e recomendação de perfis profissionais.',
      'Compartilhamento de informações e interação por mensagens.',
      'Interface responsiva com suporte a modo escuro e boas práticas de UX.'
    ],
    technologies: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'REST API',
      'Git e GitHub'
    ],
    learnings: [
      'Desenvolvimento Full Stack (React + Node.js/Express).',
      'Estruturação de perfis e relacionamentos de dados complexos.',
      'Implementação de filtros dinâmicos e sistemas de busca.',
      'Trabalho colaborativo e integração em equipe via Git/GitHub.',
      'Boas práticas de organização de componentes, rotas e Dark Mode.'
    ]
  }
];
