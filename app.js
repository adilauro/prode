const listaPartidos = [
  {
    "id": 1,
    "grupo": "A",
    "fecha": "2026-06-11",
    "local": "México",
    "visitante": "Sudáfrica",
    "estadio": "Estadio Azteca",
    "golesLocal": null,
    "golesVisitante": null,
    "cerrado": false
  },
  {
    "id": 2,
    "grupo": "A",
    "fecha": "2026-06-12",
    "local": "Corea del Sur",
    "visitante": "Rep. Checa o Dinamarca",
    "estadio": "BC Place",
    "golesLocal": null,
    "golesVisitante": null,
    "cerrado": false
  },
  {
    "id": 19,
    "grupo": "J",
    "fecha": "2026-06-14",
    "local": "Argentina",
    "visitante": "Argelia",
    "estadio": "MetLife Stadium",
    "golesLocal": null,
    "golesVisitante": null,
    "cerrado": false
  }
];
// Ejemplo para mostrar los partidos en el HTML
const contenedor = document.getElementById('contenedor-partidos');

listaPartidos.forEach(partido => {
    contenedor.innerHTML += `
        <div class="card-partido">
            <p>${partido.local} vs ${partio.visitante}</p>
            <input type="number" id="l-${partido.id}" placeholder="0">
            <input type="number" id="v-${partido.id}" placeholder="0">
        </div>
    `;
});

