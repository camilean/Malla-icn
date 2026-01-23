const STORAGE_KEY = "malla_estado_ce_vfinal";

/** Nombres bonitos de área */
const areaLabels = {
  ciencias: "Ciencias Básicas",
  agua: "Agua y Medioambiente",
  estructuras: "Estructuras y Geotecnia",
  gestion: "Gestión de Proyectos",
  tecnologias: "Tecnologías",
  integracion: "Proyectos de Integración",
  desarrollo: "Desarrollo Personal",
  optativos: "Optativos",
  ff: "Formación Fundamental",
  ingles: "Programa Inglés",
};

/**
 * ramos:
 * - area: ciencias | agua | estructuras | gestion | tecnologias | integracion | desarrollo | optativos | ff | ingles
 * - estado guardado: pendiente | curso | aprobado
 */
const ramos = [
  // 1
  { id:"MAT1001", nombre:"Fundamentos de Matemáticas para Ingeniería", semestre:1, creditos:0, area:"ciencias", prereq:[] },
  { id:"FIN0100", nombre:"Desarrollo Integral y Comunicación para Ingeniería", semestre:1, creditos:0, area:"desarrollo", prereq:[] },
  { id:"FIS1035", nombre:"Introducción a la Física", semestre:1, creditos:0, area:"ciencias", prereq:[] },
  { id:"ICN111",  nombre:"Introducción a la Ingeniería Civil en Construcción", semestre:1, creditos:0, area:"integracion", prereq:[] },
  { id:"ANT_CRIS",nombre:"Antropología Cristiana", semestre:1, creditos:0, area:"ff", prereq:[] },

  // 2
  { id:"MAT1002", nombre:"Cálculo Integral y Diferencial", semestre:2, creditos:0, area:"ciencias", prereq:["MAT1001"] },
  { id:"MAT1004", nombre:"Álgebra Lineal", semestre:2, creditos:0, area:"ciencias", prereq:["MAT1001"] },
  { id:"FIS1002", nombre:"Física para Ingeniería", semestre:2, creditos:0, area:"ciencias", prereq:["FIS1035"] },
  { id:"ICN123",  nombre:"Fundamentos de Química", semestre:2, creditos:0, area:"ciencias", prereq:["ICN111"] },
  { id:"ICN121",  nombre:"Dibujo de Ingeniería", semestre:2, creditos:0, area:"tecnologias", prereq:["ICN111"] },

  // 3
  { id:"MAT1003", nombre:"Cálculo en Varias Variables", semestre:3, creditos:0, area:"ciencias", prereq:["MAT1002"] },
  { id:"FIS1037", nombre:"Física General: Termodinámica y Ondas", semestre:3, creditos:0, area:"ciencias", prereq:["MAT1002"] },
  { id:"ICN213",  nombre:"Ciencia de los Materiales", semestre:3, creditos:0, area:"estructuras", prereq:["ICN123"] },
  { id:"ICN214",  nombre:"BIM", semestre:3, creditos:0, area:"tecnologias", prereq:["ICN121"] },
  { id:"ICN215",  nombre:"Geomensura", semestre:3, creditos:0, area:"tecnologias", prereq:["ICN121"] },
  { id:"ING9001", nombre:"Inglés 1", semestre:3, creditos:0, area:"ingles", prereq:[] },

  // 4
  { id:"MAT1005", nombre:"Ecuaciones Diferenciales", semestre:4, creditos:0, area:"ciencias", prereq:["MAT1002"] },
  { id:"FIS1038", nombre:"Física General: Electromagnetismo", semestre:4, creditos:0, area:"ciencias", prereq:["FIS1037"] },
  { id:"ICN221",  nombre:"Mecánica de Sólidos", semestre:4, creditos:0, area:"estructuras", prereq:["ICN213"] },
  { id:"ICN222",  nombre:"Estadística y Probabilidades", semestre:4, creditos:0, area:"ciencias", prereq:["MAT1002"] },
  { id:"ING9002", nombre:"Inglés 2", semestre:4, creditos:0, area:"ingles", prereq:["ING9001"] },
  { id:"FF1",     nombre:"Formación Fundamental 1", semestre:4, creditos:0, area:"ff", prereq:[] },

  // 5
  { id:"ICN311",  nombre:"Programación y Métodos Numéricos", semestre:5, creditos:0, area:"ciencias", prereq:["MAT1003"] },
  { id:"ICN312",  nombre:"Mecánica de Fluidos", semestre:5, creditos:0, area:"agua", prereq:["MAT1005"] },
  { id:"ICN313",  nombre:"Geotecnia 1", semestre:5, creditos:0, area:"estructuras", prereq:["ICN213"] },
  { id:"ICN314",  nombre:"Diseño, Innovación y Emprendimiento", semestre:5, creditos:0, area:"integracion", prereq:["ICN213"] },
  { id:"ING9003", nombre:"Inglés 3", semestre:5, creditos:0, area:"ingles", prereq:["ING9002"] },
  { id:"FF2",     nombre:"Formación Fundamental 2", semestre:5, creditos:0, area:"ff", prereq:[] },

  // 6
  { id:"ICN321",  nombre:"Tecnología de Materiales", semestre:6, creditos:0, area:"tecnologias", prereq:["ICN213"] },
  { id:"ICN322",  nombre:"Ingeniería Hidráulica e Hidrología", semestre:6, creditos:0, area:"agua", prereq:["ICN312"] },
  { id:"ICN323",  nombre:"Geotecnia 2", semestre:6, creditos:0, area:"estructuras", prereq:["ICN313"] },
  { id:"ICN325",  nombre:"Ingeniería Estructural", semestre:6, creditos:0, area:"estructuras", prereq:["ICN221"] },
  { id:"ING9004", nombre:"Inglés 4", semestre:6, creditos:0, area:"ingles", prereq:["ING9003"] },
  { id:"FF3",     nombre:"Formación Fundamental 3", semestre:6, creditos:0, area:"ff", prereq:[] },

  // 7
  { id:"ICN411",  nombre:"Ingeniería Económica", semestre:7, creditos:0, area:"gestion", prereq:["ICN314"] },
  { id:"ICN409",  nombre:"Ingeniería Ambiental y Sanitaria", semestre:7, creditos:0, area:"agua", prereq:["ICN322"] },
  { id:"ICN413",  nombre:"Maquinarias y Movimientos de Tierra", semestre:7, creditos:0, area:"gestion", prereq:["ICN215","ICN313"] },
  { id:"ICN414",  nombre:"Dinámica de Estructuras", semestre:7, creditos:0, area:"estructuras", prereq:["ICN325"] },
  { id:"ICN415",  nombre:"Sistema Integrado de Gestión", semestre:7, creditos:0, area:"gestion", prereq:["ICN314"] },
  { id:"ICN410",  nombre:"Diseño de Sistemas y Procesos Constructivos", semestre:7, creditos:0, area:"tecnologias", prereq:["ICN321"] },

  // 8
  { id:"ICN421",  nombre:"Investigación de Operaciones", semestre:8, creditos:0, area:"gestion", prereq:["ICN311"] },
  { id:"ICN430",  nombre:"Diseño de Obras Lineales", semestre:8, creditos:0, area:"integracion", prereq:["ICN313"] },
  { id:"ICN432",  nombre:"Diseño y Construcción en Acero", semestre:8, creditos:0, area:"estructuras", prereq:["ICN325"] },
  { id:"ICN433",  nombre:"Diseño y Construcción en Hormigón Armado", semestre:8, creditos:0, area:"estructuras", prereq:["ICN325"] },
  { id:"ICN434",  nombre:"Proyectos de Infraestructura de Transporte", semestre:8, creditos:0, area:"tecnologias", prereq:["ICN410"] },
  { id:"ICN435",  nombre:"Diseño de Instalaciones y Equipamientos", semestre:8, creditos:0, area:"tecnologias", prereq:["ICN410"] },
  { id:"ETI_CRIS",nombre:"Ética Cristiana", semestre:8, creditos:0, area:"ff", prereq:[] },

  // 9
  { id:"ICN511",  nombre:"Finanzas", semestre:9, creditos:0, area:"gestion", prereq:["ICN411"] },
  { id:"ICN512",  nombre:"Project Management 1", semestre:9, creditos:0, area:"gestion", prereq:["ICN415"] },
  { id:"ICN530",  nombre:"Análisis de Sistemas y Transporte", semestre:9, creditos:0, area:"estructuras", prereq:["ICN432","ICN433"] },
  { id:"ICN531",  nombre:"Diseño Sísmico de Estructuras", semestre:9, creditos:0, area:"estructuras", prereq:["ICN414","ICN432","ICN433"] },
  { id:"ICN532",  nombre:"Diseño de Obras de Infraestructuras", semestre:9, creditos:0, area:"integracion", prereq:["ICN433","ICN434"] },
  { id:"ICN516",  nombre:"Planificación y Control de Proyectos", semestre:9, creditos:0, area:"gestion", prereq:["ICN435"] },

  // 10
  { id:"ICN533",  nombre:"Legislación Aplicada", semestre:10, creditos:0, area:"gestion", prereq:["ICN511"] },
  { id:"ICN522",  nombre:"Construcciones Marítmas y Fluviales", semestre:10, creditos:0, area:"agua", prereq:["ICN432","ICN433"] },
  { id:"ICN534",  nombre:"Proyecto de Obras Civiles", semestre:10, creditos:0, area:"integracion", prereq:["ICN532"] },
  { id:"ICN535",  nombre:"Evaluación de Proyectos", semestre:10, creditos:0, area:"gestion", prereq:["ICN516"] },
  { id:"ICN525",  nombre:"Project Management 2", semestre:10, creditos:0, area:"gestion", prereq:["ICN512"] },
  { id:"OPT1",    nombre:"Optativo 1", semestre:10, creditos:0, area:"optativos", prereq:[] },

  // 11
  { id:"ICN611",  nombre:"Proyecto de Título", semestre:11, creditos:0, area:"integracion", prereq:["ICN534","ICN535"] },
  { id:"OPT2",    nombre:"Optativo 2", semestre:11, creditos:0, area:"optativos", prereq:[] },
  { id:"OPT3",    nombre:"Optativo 3", semestre:11, creditos:0, area:"optativos", prereq:[] },
  { id:"OPT4",    nombre:"Optativo 4", semestre:11, creditos:0, area:"optativos", prereq:[] },
];

let estado = cargarEstado();

const elMalla = document.getElementById("malla");
const elAprobados = document.getElementById("countAprobados");
const elCurso = document.getElementById("countCurso");
const elTotal = document.getElementById("countTotal");

const elSearch = document.getElementById("search");
const elFilterSem = document.getElementById("filterSem");
const elFilterArea = document.getElementById("filterArea");

document.getElementById("btnReset").addEventListener("click", () => {
  if (confirm("¿Seguro que quieres reiniciar tu progreso?")) {
    estado = {};
    guardarEstado();
    render();
  }
});

document.getElementById("btnCopyLink").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    alert("¡Link copiado!");
  } catch {
    // fallback
    const temp = document.createElement("input");
    temp.value = location.href;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    alert("¡Link copiado!");
  }
});

elSearch.addEventListener("input", render);
elFilterSem.addEventListener("change", render);
elFilterArea.addEventListener("change", render);

initFilters();
initExportImport();
render();

/* -------------------- storage -------------------- */
function cargarEstado() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}
function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
}
function getEstado(id){ return estado[id] || "pendiente"; }
function setEstado(id, value){
  if (value === "pendiente") delete estado[id];
  else estado[id] = value;
}
function esAprobado(id){ return getEstado(id) === "aprobado"; }

/* -------------------- prerequisitos -------------------- */
function prereqCumplidos(ramo) {
  return (ramo.prereq || []).every(esAprobado);
}

/* ramos que dependen de otro (para mostrar desbloqueos) */
function idsQueDependenDe(id){
  return ramos.filter(r => r.prereq.includes(id)).map(r => r.id);
}

/* -------------------- filtros -------------------- */
function initFilters(){
  const semestres = [...new Set(ramos.map(r => r.semestre))].sort((a,b)=>a-b);
  for (const s of semestres){
    const op = document.createElement("option");
    op.value = String(s);
    op.textContent = `Semestre ${s}`;
    elFilterSem.appendChild(op);
  }

  const areas = [...new Set(ramos.map(r => r.area))].sort();
  for (const a of areas){
    const op = document.createElement("option");
    op.value = a;
    op.textContent = areaLabels[a] || a;
    elFilterArea.appendChild(op);
  }
}

/* -------------------- render -------------------- */
function agruparPorSemestre(lista) {
  const map = new Map();
  for (const r of lista) {
    if (!map.has(r.semestre)) map.set(r.semestre, []);
    map.get(r.semestre).push(r);
  }
  return [...map.entries()].sort((a,b) => a[0]-b[0]);
}

function render() {
  const q = (elSearch.value || "").trim().toLowerCase();
  const fSem = elFilterSem.value;
  const fArea = elFilterArea.value;

  let visibles = ramos.slice();

  if (fSem !== "all") visibles = visibles.filter(r => String(r.semestre) === fSem);
  if (fArea !== "all") visibles = visibles.filter(r => r.area === fArea);
  if (q) visibles = visibles.filter(r =>
    r.id.toLowerCase().includes(q) || r.nombre.toLowerCase().includes(q)
  );

  const aprobados = ramos.filter(r => getEstado(r.id) === "aprobado").length;
  const enCurso = ramos.filter(r => getEstado(r.id) === "curso").length;

  elAprobados.textContent = String(aprobados);
  elCurso.textContent = String(enCurso);
  elTotal.textContent = String(ramos.length);

  elMalla.innerHTML = "";

  const grupos = agruparPorSemestre(visibles);

  for (const [sem, lista] of grupos) {
    const box = document.createElement("div");
    box.className = "semestre";

    box.innerHTML = `
      <button class="sem-header">
        <span>Semestre ${sem}</span>
        <span class="arrow">▼</span>
      </button>
      <div class="sem-body open"></div>
    `;

    const body = box.querySelector(".sem-body");
    const header = box.querySelector(".sem-header");

    header.addEventListener("click", () => {
      body.classList.toggle("open");
      box.classList.toggle("open");
    });

    for (const ramo of lista) {
      const est = getEstado(ramo.id);
      const ok = prereqCumplidos(ramo) || (ramo.prereq.length === 0);
      const bloqueado = (!ok && est === "pendiente");

      const statusText =
        est === "aprobado" ? "Aprobado" :
        est === "curso" ? "En curso" :
        (bloqueado ? "Bloqueado" : "Pendiente");

      const desbloquea = (est === "aprobado" && idsQueDependenDe(ramo.id).length > 0);

      const card = document.createElement("div");
      card.className = [
        "ramo",
        `area-${ramo.area}`,
        est === "aprobado" ? "aprobado" : "",
        est === "curso" ? "curso" : "",
        bloqueado ? "bloqueado" : "",
        desbloquea ? "desbloquea" : "",
      ].filter(Boolean).join(" ");

      card.innerHTML = `
        <div class="info">
          <p class="nombre">${ramo.nombre}</p>
          <p class="meta"><strong>${ramo.id}</strong>${ramo.creditos ? ` • ${ramo.creditos} créditos` : ""}</p>

          <div class="badge">${areaLabels[ramo.area] || ramo.area}</div>
          <div class="status">${statusText}</div>

          ${ramo.prereq.length ? `<p class="meta">Prerreq: ${ramo.prereq.join(", ")}</p>` : ""}

          <div class="actions">
            <button data-set="pendiente">Pendiente</button>
            <button data-set="curso">En curso</button>
            <button data-set="aprobado">Aprobado</button>
          </div>
        </div>
      `;

      // Botones estado
      card.querySelectorAll(".actions button").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          if (bloqueado) return;

          const next = btn.dataset.set;
          setEstado(ramo.id, next);
          guardarEstado();
          render();
        });
      });

      // tap en tarjeta: ciclo rápido (opcional)
      card.addEventListener("click", () => {
        if (bloqueado) return;
        const current = getEstado(ramo.id);
        const next = current === "pendiente" ? "curso" : (current === "curso" ? "aprobado" : "pendiente");
        setEstado(ramo.id, next);
        guardarEstado();
        render();
      });

      body.appendChild(card);
    }

    elMalla.appendChild(box);
  }
}

/* -------------------- Export / Import -------------------- */
function initExportImport(){
  const btnExport = document.getElementById("btnExport");
  const fileImport = document.getElementById("fileImport");

  if (btnExport) {
    btnExport.addEventListener("click", () => {
      const payload = {
        version: 1,
        exportedAt: new Date().toISOString(),
        estado: estado
      };

      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "progreso-malla.json";
      document.body.appendChild(a);
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
    });
  }

  if (fileImport) {
    fileImport.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      try {
        const text = await file.text();
        const parsed = JSON.parse(text);

        const importedEstado = parsed?.estado && typeof parsed.estado === "object"
          ? parsed.estado
          : parsed;

        if (!importedEstado || typeof importedEstado !== "object") {
          alert("Archivo inválido. No se pudo importar.");
          return;
        }

        const idsValidos = new Set(ramos.map(r => r.id));
        const limpio = {};

        for (const [id, val] of Object.entries(importedEstado)) {
          if (!idsValidos.has(id)) continue;
          if (val !== "curso" && val !== "aprobado") continue;
          limpio[id] = val;
        }

        estado = limpio;
        guardarEstado();
        render();
        alert("¡Progreso importado con éxito!");
      } catch {
        alert("No se pudo importar. Asegúrate de subir un .json válido.");
      } finally {
        e.target.value = "";
      }
    });
  }
}
