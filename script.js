document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

const certificates = [
  { file: "aws-cloud-practitioner.pdf", name: "AWS Cloud Practitioner" },
  { file: "csharp-basico.pdf", name: "C# (Básico)" },
  { file: "csharp-intermedio.pdf", name: "C# (Intermedio)" },
  { file: "net-core.pdf", name: ".NET Core" },
  { file: "java-basico.pdf", name: "Java (Básico)" },
  { file: "java-intermedio-avanzado.pdf", name: "Java (Intermedio y Avanzado)" },
  { file: "oracle-sql.pdf", name: "Oracle Database SQL — de 0 a experto" },
  { file: "restful-apis-microservicios.pdf", name: "RESTful APIs y Microservicios" },
  { file: "angular-basico.pdf", name: "Angular (Básico)" },
  { file: "typescript.pdf", name: "TypeScript" },
  { file: "html-css.pdf", name: "HTML & CSS" },
  { file: "git-basico.pdf", name: "Conceptos Básicos de Git" },
  { file: "devops-basico.pdf", name: "Conceptos Básicos de DevOps" },
  { file: "kubernetes-basico-intermedio.pdf", name: "Kubernetes (Básico e Intermedio)" },
  { file: "logica-programacion-algoritmos.pdf", name: "Lógica de Programación y Algoritmos" },
  { file: "fundamentos-agilismo.pdf", name: "Fundamentos de Agilismo" },
  { file: "fundamentos-scrum.pdf", name: "Fundamentos de SCRUM" },
  { file: "marcos-agiles.pdf", name: "Marcos Ágiles" },
  { file: "marcos-hibridos-trabajo.pdf", name: "Marcos Híbridos de Trabajo" },
  { file: "comunicacion-cx.pdf", name: "Comunicación Enfocada a CX" },
  { file: "autogestion-liderazgo.pdf", name: "Autogestión para el Liderazgo" },
];

const certGrid = document.getElementById("certGrid");
certGrid.innerHTML = certificates
  .map(
    c => `<a class="cert-card" href="assets/certs/${c.file}" target="_blank" rel="noopener">
      <span>${c.name}</span><span class="arrow">↗</span>
    </a>`
  )
  .join("");

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
