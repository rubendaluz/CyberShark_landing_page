const translations = {
    pt: {
      nav_servicos: "Serviços",
      nav_software: "Software",
      nav_planos: "Pacotes",
      nav_cta: "Contactos",
      hero_h1: "Cibersegurança Inteligente e Automatizada",
      hero_p: "A segurança evoluiu: os teus ativos estão protegidos por sistemas que pensam, aprendem e reagem com inteligência artificial",
      hero_btn: "Agendar Demonstração",
      servicos_h2: "Serviços de Cibersegurança",
      serv1_h3: "Desenvolvimento Seguro e à Medida",
      serv1_p: "Soluções web e automações com segurança integrada, adaptadas à sua infraestrutura.",
      serv2_h3: "Pentesting Automatizado e Auditorias",
      serv2_p: "Testes de intrusão com relatórios assistidos por IA e recomendações acionáveis.",
      serv3_h3: "Segurança de Redes Inteligente",
      serv3_p: "Implementação de infraestruturas seguras com segmentação, firewalls e monitorização contínua.",
      serv4_h3: "Automação e Resposta a Incidentes",
      serv4_p: "Scripts, bots e fluxos inteligentes para deteção, alerta e reação automática a ameaças.",
      software_h2: "Plataforma Cyber Shark",
      soft1_h3: "SharkScan",
      soft1_p: "Scanner contínuo de vulnerabilidades com IA para priorização de riscos e sugestões de correção automatizadas.",
      soft2_h3: "SharkWatch",
      soft2_p: "Monitorização comportamental com deteção de anomalias em tempo real e alertas inteligentes por múltiplos canais.",
      soft3_h3: "SharkAI",
      soft3_p: "Plataforma central de inteligência que classifica eventos, ativa respostas automáticas e aprende com cada incidente.",
      planos_h2: "Planos e Subscrições Inteligentes",
      planos_p: "Proteja os seus ativos digitais com soluções automatizadas e inteligentes adaptadas ao seu negócio.",
      plano_essential_title: "🔹 Essential",
      plano_essential_price: "Gratuito",
      plano_essential_items: ["1 domínio ou app monitorizada", "Scan mensal com IA", "Alertas por email", "Relatório PDF básico"],
      plano_smartops_title: "🔸 SmartOps",
      plano_smartops_price: "39€/mês",
      plano_smartops_items: ["Até 5 domínios ou apps", "Monitorização contínua", "Dashboards + relatórios", "Sugestões automáticas de mitigação"],
      plano_autonomous_title: "🔺 Autonomous Shield",
      plano_autonomous_price: "Desde 99€/mês",
      plano_autonomous_items: ["IA para deteção e resposta", "Ações automáticas (bloqueios, alertas)", "Integração com CI/CD", "Suporte dedicado"],
      plano_essential_btn: "Começar",
      plano_smartops_btn: "Subscrever",
      plano_autonomous_btn: "Solicitar Demonstração",
      cta_h2: "Entre em contacto connosco",
      cta_p: "Descubra como a IA pode proteger o seu negócio.",
      cta_btn: "Enviar Email",
      footer_left_h3: "Cyber Shark",
      footer_left_p: "Soluções de cibersegurança inteligentes com IA e Machine Learning.",
      footer_email: "info@cybershark.io",
      footer_phone: "+351 933 551 276",
      nav_lang_switch: "PT / EN"
    },
    en: {
      nav_servicos: "Services",
      nav_software: "Software",
      nav_planos: "Plans",
      nav_cta: "Contact",
      hero_h1: "Smart and Automated Cybersecurity",
      hero_p: "Security evolved: your assets are protected by systems that think, learn and react with artificial intelligence",
      hero_btn: "Schedule Demo",
      servicos_h2: "Cybersecurity Services",
      serv1_h3: "Secure Custom Development",
      serv1_p: "Web solutions and automations with integrated security, tailored to your infrastructure.",
      serv2_h3: "Automated Pentesting and Audits",
      serv2_p: "Intrusion tests with AI-assisted reports and actionable recommendations.",
      serv3_h3: "Intelligent Network Security",
      serv3_p: "Implementation of secure infrastructures with segmentation, firewalls and continuous monitoring.",
      serv4_h3: "Automation and Incident Response",
      serv4_p: "Scripts, bots and smart workflows for detection, alert and automatic threat response.",
      software_h2: "Cyber Shark Platform",
      soft1_h3: "SharkScan",
      soft1_p: "Continuous vulnerability scanner with AI for risk prioritization and automated fix suggestions.",
      soft2_h3: "SharkWatch",
      soft2_p: "Behavioral monitoring with real-time anomaly detection and intelligent alerts via multiple channels.",
      soft3_h3: "SharkAI",
      soft3_p: "Central intelligence platform that classifies events, triggers automatic responses and learns from each incident.",
      planos_h2: "Smart Plans and Subscriptions",
      planos_p: "Protect your digital assets with automated and intelligent solutions tailored to your business.",
      plano_essential_title: "🔹 Essential",
      plano_essential_price: "Free",
      plano_essential_items: ["1 monitored domain or app", "Monthly AI scan", "Email alerts", "Basic PDF report"],
      plano_smartops_title: "🔸 SmartOps",
      plano_smartops_price: "39€/month",
      plano_smartops_items: ["Up to 5 domains or apps", "Continuous monitoring", "Dashboards + reports", "Automatic mitigation suggestions"],
      plano_autonomous_title: "🔺 Autonomous Shield",
      plano_autonomous_price: "From 99€/month",
      plano_autonomous_items: ["AI for detection and response", "Automatic actions (blocks, alerts)", "CI/CD integration", "Dedicated support"],
      plano_essential_btn: "Get Started",
      plano_smartops_btn: "Subscribe",
      plano_autonomous_btn: "Request Demo",
      cta_h2: "Get in Touch",
      cta_p: "Discover how AI can protect your business.",
      cta_btn: "Send Email",
      footer_left_h3: "Cyber Shark",
      footer_left_p: "Intelligent cybersecurity solutions with AI and Machine Learning.",
      footer_email: "info@cybershark.io",
      footer_phone: "+351 933 551 276",
      nav_lang_switch: "PT / EN"
    }
  };

function setLanguage(lang) {
    const t = translations[lang];
  
    // Navbar
    document.querySelector('a[href="#servicos"]').textContent = t.navbar_servicos;
    document.querySelector('a[href="#software"]').textContent = t.navbar_software;
    document.querySelector('a[href="#planos"]').textContent = t.navbar_planos;
    document.querySelector('a[href="#cta"]').textContent = t.navbar_cta;
  
    // Hero
    document.querySelector('.hero h1').textContent = t.hero_h1;
    document.querySelector('.hero p').textContent = t.hero_p;
    document.querySelector('.hero .btn-primary').textContent = t.hero_btn;
  
    // Serviços
    document.querySelector('#servicos h2').textContent = t.servicos_h2;
    const servicos = document.querySelectorAll('#servicos .feature');
    servicos[0].querySelector('h3').textContent = t.servico1_h3;
    servicos[0].querySelector('p').textContent = t.servico1_p;
    servicos[1].querySelector('h3').textContent = t.servico2_h3;
    servicos[1].querySelector('p').textContent = t.servico2_p;
    servicos[2].querySelector('h3').textContent = t.servico3_h3;
    servicos[2].querySelector('p').textContent = t.servico3_p;
    servicos[3].querySelector('h3').textContent = t.servico4_h3;
    servicos[3].querySelector('p').textContent = t.servico4_p;
  
    // Software
    document.querySelector('#software h2').textContent = t.software_h2;
    const software = document.querySelectorAll('#software .feature');
    software[0].querySelector('h3').textContent = t.software1_h3;
    software[0].querySelector('p').textContent = t.software1_p;
    software[1].querySelector('h3').textContent = t.software2_h3;
    software[1].querySelector('p').textContent = t.software2_p;
    software[2].querySelector('h3').textContent = t.software3_h3;
    software[2].querySelector('p').textContent = t.software3_p;
  
    // Planos
    document.querySelector('#planos h2').textContent = t.planos_h2;
    document.querySelector('#planos > p').textContent = t.planos_p;
    const planos = document.querySelectorAll('.pricing-card');
  
    // Essential
    planos[0].querySelector('h3').textContent = t.plano_essential_title;
    planos[0].querySelector('.card-header p').textContent = t.plano_essential_price;
    const ulEss = planos[0].querySelectorAll('ul li');
    ulEss[0].textContent = t.plano_essential_li1;
    ulEss[1].textContent = t.plano_essential_li2;
    ulEss[2].textContent = t.plano_essential_li3;
    ulEss[3].textContent = t.plano_essential_li4;
    planos[0].querySelector('.btn-card').textContent = t.plano_essential_btn;
  
    // SmartOps
    planos[1].querySelector('h3').textContent = t.plano_smartops_title;
    planos[1].querySelector('.card-header p').textContent = t.plano_smartops_price;
    const ulSmart = planos[1].querySelectorAll('ul li');
    ulSmart[0].textContent = t.plano_smartops_li1;
    ulSmart[1].textContent = t.plano_smartops_li2;
    ulSmart[2].textContent = t.plano_smartops_li3;
    ulSmart[3].textContent = t.plano_smartops_li4;
    planos[1].querySelector('.btn-card').textContent = t.plano_smartops_btn;
  
    // Autonomous Shield
    planos[2].querySelector('h3').textContent = t.plano_autonomous_title;
    planos[2].querySelector('.card-header p').textContent = t.plano_autonomous_price;
    const ulAuto = planos[2].querySelectorAll('ul li');
    ulAuto[0].textContent = t.plano_autonomous_li1;
    ulAuto[1].textContent = t.plano_autonomous_li2;
    ulAuto[2].textContent = t.plano_autonomous_li3;
    ulAuto[3].textContent = t.plano_autonomous_li4;
    planos[2].querySelector('.btn-card').textContent = t.plano_autonomous_btn;
  
    // CTA
    document.querySelector('#cta h2').textContent = t.cta_h2;
    document.querySelector('#cta p').textContent = t.cta_p;
    document.querySelector('#cta .btn-primary').textContent = t.cta_btn;
  
    // Footer
    document.querySelector('footer .footer-left h3').textContent = t.footer_left_h3;
    document.querySelector('footer .footer-left p').textContent = t.footer_left_p;
}
  
  
// Inicializar com idioma atual
setLanguage('pt');

// Alternar idioma com botão, por exemplo:
document.getElementById('btn-pt').addEventListener('click', () => setLanguage('pt'));
document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

