export const projectsData = [
  {
    id: 'vinharia-edge',
    title: 'Vinharia Agnello — IoT & Edge Computing',
    category: 'iot',
    badge: 'IoT & Edge Computing',
    description: 'Sistema completo de monitoramento ambiental para vinícolas com ESP32, sensores DHT e LDR, comunicação via MQTT e plataforma FIWARE hospedada na nuvem Azure.',
    longDescription: 'Desenvolvido com foco em sistemas distribuídos e edge computing. Utiliza ESP32 conectado a sensores de temperatura, umidade e luminosidade, enviando telemetria em tempo real via protocolo MQTT para a arquitetura FIWARE (Orion Context Broker, IoT Agent e STH-Comet) rodando em VM Linux na Azure com Docker Compose. Inclui dashboard dinâmico em Python (Dash/Plotly) com alertas visuais para parâmetros críticos.',
    image: '/projects/vinharia-edge.svg',
    github: 'https://github.com/rafa212007/cp05-Edge.git',
    tags: ['ESP32', 'FIWARE', 'MQTT', 'Docker', 'Azure VM', 'Python', 'Dash/Plotly', 'Linux'],
    highlights: [
      'Arquitetura FIWARE completa na nuvem Azure com Docker Compose',
      'Comunicação leve e resiliente com protocolo MQTT e ESP32',
      'Dashboard analítico em Python com alertas de limites críticos'
    ]
  },
  {
    id: 'finance-app',
    title: 'Controle Financeiro Pessoal — Full Stack Web',
    category: 'web',
    badge: 'Full Stack & Database',
    description: 'Aplicação web completa de gestão financeira com Python, Flask e banco relacional Oracle via SQLAlchemy, autenticação segura e relatórios gráficos interativos.',
    longDescription: 'Sistema completo de controle de finanças pessoais. Modelagem relacional e normalização de dados em Oracle Database. Implementação de autenticação com Flask-Login e criptografia de senhas com hash para isolamento seguro por usuário. CRUD completo de despesas e receitas, filtros inteligentes por período e relatórios analíticos com gráficos interativos via Chart.js.',
    image: '/projects/finance-app.svg',
    github: 'https://github.com/rafa212007',
    tags: ['Python', 'Flask', 'Oracle Database', 'SQLAlchemy', 'Flask-Login', 'Chart.js', 'SQL'],
    highlights: [
      'Modelagem e normalização de dados com Oracle DB & SQLAlchemy ORM',
      'Autenticação segura com criptografia de senha e isolamento de sessão',
      'Relatórios visuais e gráficos comparativos com Chart.js'
    ]
  },
  {
    id: 'space-missions',
    title: 'Data Science — Estatística de Missões Espaciais',
    category: 'data',
    badge: 'Ciência de Dados',
    description: 'Análise exploratória e inferência estatística sobre 4.324 lançamentos espaciais entre 1957 e 2020 (Kaggle), aplicando testes de hipótese e modelagem com SciPy.',
    longDescription: 'Estudo aprofundado utilizando dataset histórico de missões espaciais do Kaggle. Tratamento robusto de dados com remoção de valores ausentes e tratamento de outliers. Aplicação de estatística descritiva, intervalos de confiança e testes não-paramétricos de hipótese (Mann-Whitney U e Qui-Quadrado), além do cálculo de tamanho de efeito (Cohen\'s d e V de Cramér) utilizando a stack científica de Python.',
    image: '/projects/space-missions.svg',
    github: 'https://github.com/rafa212007',
    tags: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib', 'Seaborn', 'Kaggle', 'Estatística'],
    highlights: [
      'Tratamento e exploração de mais de 4.300 missões históricas',
      'Testes de hipótese estatística: Mann-Whitney U e Qui-Quadrado',
      'Visualizações detalhadas de distribuição e correlação'
    ]
  },
  {
    id: 'web-react',
    title: 'Desenvolvimento Front-end Responsivo & SPA',
    category: 'web',
    badge: 'Front-end & Componentes',
    description: 'Construção de aplicações e interfaces web modernas, fluidas e acessíveis com React, Vite, Tailwind CSS e controle de versão profissional via Git/GitHub.',
    longDescription: 'Desenvolvimento de interfaces ricas com foco em semântica, acessibilidade e performance. Utilização de React com Vite para compilação ultra veloz, arquitetura de componentes reutilizáveis, gerenciamento de estado e estilização rápida e responsiva com Tailwind CSS. Fluxo de trabalho padronizado com Git (branches, commits semânticos e resolução de conflitos).',
    image: '/projects/web-react.svg',
    github: 'https://github.com/rafa212007',
    tags: ['React', 'Vite', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5 Semântico', 'Git/GitHub'],
    highlights: [
      'Design 100% responsivo para mobile, tablet e desktop',
      'Componentização modular e boas práticas de código limpo',
      'Fluxo de versionamento profissional no GitHub'
    ]
  }
];
