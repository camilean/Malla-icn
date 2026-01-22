// 1) Define aquí tus ramos (por ahora ejemplo). Luego los cambiamos a tu malla real.
const ramos = [
  { id: "MAT101", nombre: "Cálculo I", semestre: 1, creditos: 6, prereq: [] },
  { id: "FIS101", nombre: "Física I", semestre: 1, creditos: 5, prereq: [] },
  { id: "ICC101", nombre: "Introducción a ICC", semestre: 1, creditos: 4, prereq: [] },

  { id: "MAT102", nombre: "Cálculo II", semestre: 2, creditos: 6, prereq: ["MAT101"] },
  { id: "FIS102", nombre: "Física II", semestre: 2, creditos: 5, prereq: ["FIS101"] },
  { id: "EST101", nombre: "Estática", semestre: 2, creditos: 5, prereq: ["MAT101", "FIS101"] },
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
