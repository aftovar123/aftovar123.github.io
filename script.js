document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

/* ---------- Certificates ---------- */
const certificates = [
  { file: "aws-cloud-practitioner.pdf", es: "AWS Cloud Practitioner", en: "AWS Cloud Practitioner" },
  { file: "csharp-basico.pdf", es: "C# (Básico)", en: "C# (Basic)" },
  { file: "csharp-intermedio.pdf", es: "C# (Intermedio)", en: "C# (Intermediate)" },
  { file: "net-core.pdf", es: ".NET Core", en: ".NET Core" },
  { file: "java-basico.pdf", es: "Java (Básico)", en: "Java (Basic)" },
  { file: "java-intermedio-avanzado.pdf", es: "Java (Intermedio y Avanzado)", en: "Java (Intermediate & Advanced)" },
  { file: "oracle-sql.pdf", es: "Oracle Database SQL — de 0 a experto", en: "Oracle Database SQL — Zero to Expert" },
  { file: "restful-apis-microservicios.pdf", es: "RESTful APIs y Microservicios", en: "RESTful APIs & Microservices" },
  { file: "angular-basico.pdf", es: "Angular (Básico)", en: "Angular (Basic)" },
  { file: "typescript.pdf", es: "TypeScript", en: "TypeScript" },
  { file: "html-css.pdf", es: "HTML & CSS", en: "HTML & CSS" },
  { file: "git-basico.pdf", es: "Conceptos Básicos de Git", en: "Git Fundamentals" },
  { file: "devops-basico.pdf", es: "Conceptos Básicos de DevOps", en: "DevOps Fundamentals" },
  { file: "kubernetes-basico-intermedio.pdf", es: "Kubernetes (Básico e Intermedio)", en: "Kubernetes (Basic & Intermediate)" },
  { file: "logica-programacion-algoritmos.pdf", es: "Lógica de Programación y Algoritmos", en: "Programming Logic & Algorithms" },
  { file: "fundamentos-agilismo.pdf", es: "Fundamentos de Agilismo", en: "Agile Fundamentals" },
  { file: "fundamentos-scrum.pdf", es: "Fundamentos de SCRUM", en: "SCRUM Fundamentals" },
  { file: "marcos-agiles.pdf", es: "Marcos Ágiles", en: "Agile Frameworks" },
  { file: "marcos-hibridos-trabajo.pdf", es: "Marcos Híbridos de Trabajo", en: "Hybrid Work Frameworks" },
  { file: "comunicacion-cx.pdf", es: "Comunicación Enfocada a CX", en: "CX-Focused Communication" },
  { file: "autogestion-liderazgo.pdf", es: "Autogestión para el Liderazgo", en: "Self-Management for Leadership" },
];

const certGrid = document.getElementById("certGrid");
function renderCertificates(lang) {
  certGrid.innerHTML = certificates
    .map(
      c => `<a class="cert-card" href="assets/certs/${c.file}" target="_blank" rel="noopener">
        <span>${lang === "en" ? c.en : c.es}</span><span class="arrow">↗</span>
      </a>`
    )
    .join("");
}

/* ---------- Scroll spy ---------- */
const sections = document.querySelectorAll("main section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");
const spy = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a => a.classList.remove("active"));
        const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
        if (active) active.classList.add("active");
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
sections.forEach(s => spy.observe(s));

/* ---------- Theme toggle ---------- */
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {
  if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    themeIcon.textContent = "☀️";
  } else {
    document.documentElement.removeAttribute("data-theme");
    themeIcon.textContent = "🌙";
  }
  try { localStorage.setItem("theme", theme); } catch (e) {}
}

const savedTheme = (() => {
  try { return localStorage.getItem("theme"); } catch (e) { return null; }
})();
applyTheme(savedTheme === "light" ? "light" : "dark");

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  applyTheme(current === "light" ? "dark" : "light");
});

/* ---------- Language toggle ---------- */
const translations = {
  es: {
    "meta.title": "Andrés Tovar Sandoval — Ingeniero de Sistemas | Backend & Integraciones",
    "meta.description": "Portafolio de Andrés Felipe Tovar Sandoval, Ingeniero de Sistemas especializado en backend C#, bases de datos Oracle/SQL Server e integración de sistemas empresariales.",
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.certifications": "Certificaciones",
    "nav.contact": "Contacto",
    "nav.toggleMenu": "Abrir menú",
    "hero.eyebrow": "Ingeniero de Sistemas · Barranquilla, Colombia",
    "hero.tagline": "Desarrollo backend en C#, administración de bases de datos Oracle/SQL Server e integración de sistemas empresariales. Enfocado en soluciones eficientes, escalables y bien documentadas.",
    "hero.btnProjects": "Ver proyectos",
    "hero.btnCv": "Descargar CV",
    "hero.btnContact": "Contactar",
    "about.eyebrow": "Perfil",
    "about.heading": "Sobre mí",
    "about.body": "Ingeniero de Sistemas de la Universidad del Norte (2024) con más de 4 años de experiencia en bases de datos Oracle y SQL Server, desarrollo backend en C# e integración de sistemas empresariales. Experto en servicios web, triggers, jobs y esquemas optimizados. Con amplio conocimiento en el flujo de aplicaciones de mantenimiento de activos, abarcando inventarios, mantenimiento preventivo y correctivo, compras y personal. Destacado por integrar plataformas de mantenimiento con SAP, mejorando la sincronización de datos y reduciendo tareas manuales.",
    "about.factLocationLabel": "Ubicación",
    "about.factExperienceLabel": "Experiencia",
    "about.factExperienceValue": "+4 años en backend & bases de datos",
    "about.factFocusLabel": "Enfoque",
    "about.factFocusValue": "Integraciones empresariales & automatización",
    "about.factCvLabel": "CV en inglés",
    "about.factCvLink": "Descargar PDF ↗",
    "skills.eyebrow": "Stack",
    "skills.heading": "Habilidades técnicas",
    "skills.databasesTitle": "Bases de datos",
    "skills.designOptimization": "Diseño & optimización",
    "skills.backupRecovery": "Respaldo & recuperación",
    "skills.languagesTitle": "Lenguajes",
    "skills.toolsTitle": "Herramientas",
    "skills.methodologiesTitle": "Metodologías & nube",
    "skills.agileScrum": "Ágil / Scrum",
    "skills.kubernetesBasic": "Kubernetes (básico)",
    "experience.eyebrow": "Trayectoria",
    "experience.heading": "Experiencia profesional",
    "experience.role": "Ingeniero de Sistemas y Especialista en Soporte de Aplicaciones",
    "experience.meta": "Enero 2023 — Actualidad · Barranquilla, Colombia",
    "experience.bullet1": "<strong>Integración con SAP:</strong> diseño e implementación de una integración backend entre una aplicación de mantenimiento de activos y SAP, con sincronización en tiempo real de órdenes de trabajo, materiales y registros de mantenimiento. Resultado: reducción del 90% en tareas manuales y mayor trazabilidad.",
    "experience.bullet2": "<strong>Administración de bases de datos:</strong> gestión de bases Oracle y SQL Server, creación y optimización de esquemas, procedimientos almacenados, triggers y jobs automatizados. Resultado: mejora del rendimiento de consultas en un 70%.",
    "experience.bullet3": "<strong>Desarrollo de servicios web:</strong> servicios SOAP y REST en C# para comunicación entre sistemas internos y externos, aumentando la interoperabilidad y automatización de procesos.",
    "experience.bullet4": "<strong>Soporte funcional y técnico:</strong> soporte a usuarios y áreas operativas en mantenimiento de activos, inventarios, compras y personal, garantizando la continuidad del negocio.",
    "projects.eyebrow": "Trabajo",
    "projects.heading": "Proyectos",
    "projects.p1Badge": "Sitio web corporativo",
    "projects.p1Desc": "Desarrollo y mantenimiento del sitio web de ClimbSun Digital, empresa de servicios de TI para pymes canadienses. Migración del hosting a un flujo con despliegue automático desde GitHub, panel de administración (servicios, productos, contenido) y formulario de contacto con notificaciones por correo.",
    "projects.viewLive": "Ver sitio en vivo ↗",
    "projects.p2Badge": "Integración empresarial · Triple A",
    "projects.p2Title": "Integración SAP (LBApps)",
    "projects.p2Desc": "Diseño y desarrollo de una integración entre el sistema de mantenimiento de activos y SAP para Triple A, compuesta por un servicio de Windows programado y un servicio web SOAP para el consumo y publicación de documentos XML (creación de ítems, órdenes de trabajo, materiales e inventario) contra una base de datos Oracle.",
    "projects.p3Badge": "Automatización de datos · Somos",
    "projects.p3Title": "Servicio de integración SQL → XML",
    "projects.p3Desc": "Servicio de Windows en C# desarrollado para Somos (Bogotá), que ejecuta consultas programadas contra SQL Server y genera automáticamente los archivos XML de intercambio a partir de los resultados, para alimentar procesos de integración de datos.",
    "certifications.eyebrow": "Formación continua",
    "certifications.heading": "Certificaciones",
    "education.eyebrow": "Académico",
    "education.heading": "Educación",
    "education.degree": "Ingeniería de Sistemas",
    "education.meta": "Graduado en 2024 · Barranquilla, Colombia",
    "contact.heading": "¿Tienes un proyecto en mente?",
    "contact.body": "Disponible para trabajos freelance de desarrollo backend, integración de sistemas y automatización de procesos.",
    "contact.btnEmail": "Escríbeme un correo",
    "footer.built": "Hecho con GitHub Pages",
  },
  en: {
    "meta.title": "Andrés Tovar Sandoval — Systems Engineer | Backend & Integrations",
    "meta.description": "Portfolio of Andrés Felipe Tovar Sandoval, Systems Engineer specialized in C# backend development, Oracle/SQL Server databases, and enterprise system integration.",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.contact": "Contact",
    "nav.toggleMenu": "Open menu",
    "hero.eyebrow": "Systems Engineer · Barranquilla, Colombia",
    "hero.tagline": "Backend development in C#, Oracle/SQL Server database administration, and enterprise system integration. Focused on efficient, scalable, and well-documented solutions.",
    "hero.btnProjects": "View projects",
    "hero.btnCv": "Download CV",
    "hero.btnContact": "Get in touch",
    "about.eyebrow": "Profile",
    "about.heading": "About me",
    "about.body": "Systems Engineer from Universidad del Norte (2024) with 4+ years of experience in Oracle and SQL Server databases, backend development in C#, and enterprise system integration. Skilled in web services, triggers, jobs, and optimized schemas. Deep knowledge of asset management application workflows, covering inventory, preventive and corrective maintenance, purchasing, and personnel. Recognized for integrating maintenance platforms with SAP, improving data synchronization and reducing manual work.",
    "about.factLocationLabel": "Location",
    "about.factExperienceLabel": "Experience",
    "about.factExperienceValue": "4+ years in backend & databases",
    "about.factFocusLabel": "Focus",
    "about.factFocusValue": "Enterprise integrations & automation",
    "about.factCvLabel": "CV in Spanish",
    "about.factCvLink": "Download PDF ↗",
    "skills.eyebrow": "Stack",
    "skills.heading": "Technical skills",
    "skills.databasesTitle": "Databases",
    "skills.designOptimization": "Design & optimization",
    "skills.backupRecovery": "Backup & recovery",
    "skills.languagesTitle": "Languages",
    "skills.toolsTitle": "Tools",
    "skills.methodologiesTitle": "Methodologies & cloud",
    "skills.agileScrum": "Agile / Scrum",
    "skills.kubernetesBasic": "Kubernetes (basic)",
    "experience.eyebrow": "Career",
    "experience.heading": "Professional experience",
    "experience.role": "Systems Engineer & Application Support Specialist",
    "experience.meta": "January 2023 — Present · Barranquilla, Colombia",
    "experience.bullet1": "<strong>SAP integration:</strong> designed and implemented a backend integration between an asset management application and SAP, with real-time synchronization of work orders, materials, and maintenance records. Result: 90% reduction in manual tasks and improved traceability.",
    "experience.bullet2": "<strong>Database administration:</strong> managed Oracle and SQL Server databases, creating and optimizing schemas, stored procedures, triggers, and automated jobs. Result: 70% improvement in query performance.",
    "experience.bullet3": "<strong>Web services development:</strong> built SOAP and REST services in C# for communication between internal and external systems, increasing interoperability and process automation.",
    "experience.bullet4": "<strong>Functional & technical support:</strong> supported users and operational areas in asset management, inventory, purchasing, and personnel, ensuring business continuity.",
    "projects.eyebrow": "Work",
    "projects.heading": "Projects",
    "projects.p1Badge": "Corporate website",
    "projects.p1Desc": "Development and maintenance of the ClimbSun Digital website, an IT services company for Canadian SMBs. Migrated hosting to an automated GitHub-based deployment flow, built an admin panel (services, products, content), and fixed the contact form to send email notifications.",
    "projects.viewLive": "View live site ↗",
    "projects.p2Badge": "Enterprise integration · Triple A",
    "projects.p2Title": "SAP Integration (LBApps)",
    "projects.p2Desc": "Designed and built an integration between the asset management system and SAP for Triple A, made up of a scheduled Windows service and a SOAP web service for consuming and publishing XML documents (item creation, work orders, materials, and inventory) against an Oracle database.",
    "projects.p3Badge": "Data automation · Somos",
    "projects.p3Title": "SQL → XML Integration Service",
    "projects.p3Desc": "Windows service in C# built for Somos (Bogotá), running scheduled queries against SQL Server and automatically generating the XML exchange files from the results to feed downstream data integration processes.",
    "certifications.eyebrow": "Continuing education",
    "certifications.heading": "Certifications",
    "education.eyebrow": "Academic",
    "education.heading": "Education",
    "education.degree": "Systems Engineering",
    "education.meta": "Graduated in 2024 · Barranquilla, Colombia",
    "contact.heading": "Have a project in mind?",
    "contact.body": "Available for freelance work in backend development, systems integration, and process automation.",
    "contact.btnEmail": "Email me",
    "footer.built": "Built with GitHub Pages",
  },
};

const langToggle = document.getElementById("langToggle");
const cvBtn = document.getElementById("cvBtn");
const altCvLink = document.getElementById("altCvLink");

function applyLanguage(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
    if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
  });

  document.documentElement.setAttribute("lang", lang);
  document.title = dict["meta.title"];
  langToggle.textContent = lang === "en" ? "ES" : "EN";
  langToggle.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");

  if (lang === "en") {
    cvBtn.setAttribute("href", "assets/cv/Andres_Tovar_CV_EN.pdf");
    altCvLink.setAttribute("href", "assets/cv/Andres_Tovar_CV_ES.pdf");
  } else {
    cvBtn.setAttribute("href", "assets/cv/Andres_Tovar_CV_ES.pdf");
    altCvLink.setAttribute("href", "assets/cv/Andres_Tovar_CV_EN.pdf");
  }

  renderCertificates(lang);
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

const savedLang = (() => {
  try { return localStorage.getItem("lang"); } catch (e) { return null; }
})();
applyLanguage(savedLang === "en" ? "en" : "es");

langToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("lang") === "en" ? "en" : "es";
  applyLanguage(current === "en" ? "es" : "en");
});
