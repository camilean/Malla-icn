const ramos = [
  // 1° SEMESTRE
  { id: "MAT1001", nombre: "Fundamentos de Matemáticas para Ingeniería", semestre: 1, creditos: 0, prereq: [] },
  { id: "FIN0100", nombre: "Desarrollo Integral y Comunicación para Ingeniería", semestre: 1, creditos: 0, prereq: [] },
  { id: "FIS1035", nombre: "Introducción a la Física", semestre: 1, creditos: 0, prereq: [] },
  { id: "ICN111",  nombre: "Introducción a la Ingeniería Civil en Construcción", semestre: 1, creditos: 0, prereq: [] },
  { id: "ANT_CRIS", nombre: "Antropología Cristiana", semestre: 1, creditos: 0, prereq: [] },

  // 2° SEMESTRE
  { id: "MAT1002", nombre: "Cálculo Integral y Diferencial", semestre: 2, creditos: 0, prereq: ["MAT1001"] },
  { id: "MAT1004", nombre: "Álgebra Lineal", semestre: 2, creditos: 0, prereq: ["MAT1001"] },
  { id: "FIS1002", nombre: "Física para Ingeniería", semestre: 2, creditos: 0, prereq: ["FIS1035"] },
  { id: "ICN123",  nombre: "Fundamentos de Química", semestre: 2, creditos: 0, prereq: ["ICN111"] },
  { id: "ICN121",  nombre: "Dibujo de Ingeniería", semestre: 2, creditos: 0, prereq: ["ICN111"] },

  // 3° SEMESTRE
  { id: "MAT1003", nombre: "Cálculo en Varias Variables", semestre: 3, creditos: 0, prereq: ["MAT1002"] },
  { id: "FIS1037", nombre: "Física General: Termodinámica y Ondas", semestre: 3, creditos: 0, prereq: ["MAT1002"] },
  { id: "ICN213",  nombre: "Ciencia de los Materiales", semestre: 3, creditos: 0, prereq: ["ICN123"] },
  { id: "ICN214",  nombre: "BIM", semestre: 3, creditos: 0, prereq: ["ICN121"] },
  { id: "ICN215",  nombre: "Geomensura", semestre: 3, creditos: 0, prereq: ["ICN121"] },
  { id: "ING9001", nombre: "Inglés 1", semestre: 3, creditos: 0, prereq: [] },

  // 4° SEMESTRE
  { id: "MAT1005", nombre: "Ecuaciones Diferenciales", semestre: 4, creditos: 0, prereq: ["MAT1002"] },
  { id: "FIS1038", nombre: "Física General: Electromagnetismo", semestre: 4, creditos: 0, prereq: ["FIS1037"] },
  { id: "ICN221",  nombre: "Mecánica de Sólidos", semestre: 4, creditos: 0, prereq: ["ICN213"] },
  { id: "ICN222",  nombre: "Estadística y Probabilidades", semestre: 4, creditos: 0, prereq: ["MAT1002"] },
  { id: "ING9002", nombre: "Inglés 2", semestre: 4, creditos: 0, prereq: ["ING9001"] },
  { id: "FF1",     nombre: "Formación Fundamental 1", semestre: 4, creditos: 0, prereq: [] },

  // 5° SEMESTRE
  { id: "ICN311",  nombre: "Programación y Métodos Numéricos", semestre: 5, creditos: 0, prereq: ["MAT1003"] },
  { id: "ICN312",  nombre: "Mecánica de Fluidos", semestre: 5, creditos: 0, prereq: ["MAT1005"] },
  { id: "ICN313",  nombre: "Geotecnia 1", semestre: 5, creditos: 0, prereq: ["ICN213"] },
  { id: "ICN314",  nombre: "Diseño, Innovación y Emprendimiento", semestre: 5, creditos: 0, prereq: ["ICN213"] },
  { id: "ING9003", nombre: "Inglés 3", semestre: 5, creditos: 0, prereq: ["ING9002"] },
  { id: "FF2",     nombre: "Formación Fundamental 2", semestre: 5, creditos: 0, prereq: [] },

  // 6° SEMESTRE
  { id: "ICN321",  nombre: "Tecnología de Materiales", semestre: 6, creditos: 0, prereq: ["ICN213"] },
  { id: "ICN322",  nombre: "Ingeniería Hidráulica e Hidrología", semestre: 6, creditos: 0, prereq: ["ICN312"] },
  { id: "ICN323",  nombre: "Geotecnia 2", semestre: 6, creditos: 0, prereq: ["ICN313"] },
  { id: "ICN325",  nombre: "Ingeniería Estructural", semestre: 6, creditos: 0, prereq: ["ICN221"] },
  { id: "ING9004", nombre: "Inglés 4", semestre: 6, creditos: 0, prereq: ["ING9003"] },
  { id: "FF3",     nombre: "Formación Fundamental 3", semestre: 6, creditos: 0, prereq: [] },

  // 7° SEMESTRE
  { id: "ICN411",  nombre: "Ingeniería Económica", semestre: 7, creditos: 0, prereq: ["ICN314"] },
  { id: "ICN409",  nombre: "Ingeniería Ambiental y Sanitaria", semestre: 7, creditos: 0, prereq: ["ICN322"] },
  { id: "ICN413",  nombre: "Maquinarias y Movimientos de Tierra", semestre: 7, creditos: 0, prereq: ["ICN215", "ICN313"] },
  { id: "ICN414",  nombre: "Dinámica de Estructuras", semestre: 7, creditos: 0, prereq: ["ICN325"] },
  { id: "ICN415",  nombre: "Sistema Integrado de Gestión", semestre: 7, creditos: 0, prereq: ["ICN314"] },
  { id: "ICN410",  nombre: "Diseño de Sistemas y Procesos Constructivos", semestre: 7, creditos: 0, prereq: ["ICN321"] },

  // 8° SEMESTRE
  { id: "ICN421",  nombre: "Investigación de Operaciones", semestre: 8, creditos: 0, prereq: ["ICN311"] },
  { id: "ICN430",  nombre: "Diseño de Obras Lineales", semestre: 8, creditos: 0, prereq: ["ICN313"] },
  { id: "ICN432",  nombre: "Diseño y Construcción en Acero", semestre: 8, creditos: 0, prereq: ["ICN325"] },
  { id: "ICN433",  nombre: "Diseño y Construcción en Hormigón Armado", semestre: 8, creditos: 0, prereq: ["ICN325"] },
  { id: "ICN434",  nombre: "Proyectos de Infraestructura de Transporte", semestre: 8, creditos: 0, prereq: ["ICN410"] },
  { id: "ICN435",  nombre: "Diseño de Instalaciones y Equipamientos", semestre: 8, creditos: 0, prereq: ["ICN410"] },
  { id: "ETI_CRIS", nombre: "Ética Cristiana", semestre: 8, creditos: 0, prereq: [] },

  // 9° SEMESTRE
  { id: "ICN511",  nombre: "Finanzas", semestre: 9, creditos: 0, prereq: ["ICN411"] },
  { id: "ICN512",  nombre: "Project Management 1", semestre: 9, creditos: 0, prereq: ["ICN415"] },
  { id: "ICN530",  nombre: "Análisis de Sistemas y Transporte", semestre: 9, creditos: 0, prereq: ["ICN432", "ICN433"] },
  { id: "ICN531",  nombre: "Diseño Sísmico de Estructuras", semestre: 9, creditos: 0, prereq: ["ICN414", "ICN432", "ICN433"] },
  { id: "ICN532",  nombre: "Diseño de Obras de Infraestructuras", semestre: 9, creditos: 0, prereq: ["ICN433", "ICN434"] },
  { id: "ICN516",  nombre: "Planificación y Control de Proyectos", semestre: 9, creditos: 0, prereq: ["ICN435"] },

  // 10° SEMESTRE
  { id: "ICN533",  nombre: "Legislación Aplicada", semestre: 10, creditos: 0, prereq: ["ICN511"] },
  { id: "ICN522",  nombre: "Construcciones Marítimas y Fluviales", semestre: 10, creditos: 0, prereq: ["ICN432", "ICN433"] },
  { id: "ICN534",  nombre: "Proyecto de Obras Civiles", semestre: 10, creditos: 0, prereq: ["ICN532"] },
  { id: "ICN535",  nombre: "Evaluación de Proyectos", semestre: 10, creditos: 0, prereq: ["ICN516"] },
  { id: "ICN525",  nombre: "Project Management 2", semestre: 10, creditos: 0, prereq: ["ICN512"] },
  { id: "OPT1",    nombre: "Optativo 1", semestre: 10, creditos: 0, prereq: [] },

  // 11° SEMESTRE
  { id: "ICN611",  nombre: "Proyecto de Título", semestre: 11, creditos: 0, prereq: ["ICN534", "ICN535"] },
  { id: "OPT2",    nombre: "Optativo 2", semestre: 11, creditos: 0, prereq: [] },
  { id: "OPT3",    nombre: "Optativo 3", semestre: 11, creditos: 0, prereq: [] },
  { id: "OPT4",    nombre: "Optativo 4", semestre: 11, creditos: 0, prereq: [] },
];


const STORAGE_KEY = "malla_estado_v1";

// 2) Estado guardado: { MAT101: "aprobado", ... }
let estado = cargarEstado();

const elMalla = document.getElementById("malla");
const elAprobados = document.getElementById("countAprobados");
const elTotal = document.getElementById("countTotal");
document.getElementById("btnReset").addEventListener("click", () => {
  if (confirm("¿Seguro que quieres reiniciar tu progreso?")) {
    estado = {};
    guardarEstado();
    render();
  }
});

function cargarEstado() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}
function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}

function estaAprobado(id) {
  return estado[id] === "aprobado";
}

function prereqCumplidos(ramo) {
  return (ramo.prereq || []).every(estaAprobado);
}

function toggleAprobado(id) {
  estado[id] = estado[id] === "aprobado" ? "pendiente" : "aprobado";
  if (estado[id] === "pendiente") delete estado[id];
  guardarEstado();
  render();
}

function agruparPorSemestre(lista) {
  const map = new Map();
  for (const r of lista) {
    if (!map.has(r.semestre)) map.set(r.semestre, []);
    map.get(r.semestre).push(r);
  }
  return [...map.entries()].sort((a,b) => a[0]-b[0]);
}

function render() {
  elMalla.innerHTML = "";
  const grupos = agruparPorSemestre(ramos);

  // stats
  const aprobados = ramos.filter(r => estaAprobado(r.id)).length;
  elAprobados.textContent = String(aprobados);
  elTotal.textContent = String(ramos.length);

  for (const [sem, lista] of grupos) {
    const box = document.createElement("div");
    box.className = "semestre";
    box.innerHTML = `<h3>Semestre ${sem}</h3>`;

    for (const ramo of lista) {
      const ok = prereqCumplidos(ramo) || ramo.prereq.length === 0;
      const aprobado = estaAprobado(ramo.id);

      const card = document.createElement("div");
      card.className = "ramo" + (aprobado ? " aprobado" : "") + (!ok && !aprobado ? " bloqueado" : "");

      const tagText = aprobado ? "Aprobado" : (ok ? "Disponible" : "Bloqueado");
      card.innerHTML = `
        <div class="info">
          <p class="nombre">${ramo.nombre}</p>
          <p class="meta"><strong>${ramo.id}</strong> • ${ramo.creditos} créditos</p>
          <div class="tag">${tagText}</div>
          ${ramo.prereq.length ? `<p class="meta">Prerreq: ${ramo.prereq.join(", ")}</p>` : ""}
        </div>
        <div>
          <input type="checkbox" ${aprobado ? "checked" : ""} ${(!ok && !aprobado) ? "disabled" : ""} />
        </div>
      `;

      const checkbox = card.querySelector("input");
      checkbox.addEventListener("change", () => toggleAprobado(ramo.id));

      box.appendChild(card);
    }

    elMalla.appendChild(box);
  }
}

render();
