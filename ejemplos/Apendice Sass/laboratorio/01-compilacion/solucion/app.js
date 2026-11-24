const consulta = document.querySelector('#buscar');
const conteo = document.querySelector('#conteo');
const sinCoincidencias = document.querySelector('#sin-coincidencias');

function filtrar() {
  const filas = [...document.querySelectorAll('#filas-productos > tr')];
  const termino = consulta.value.trim().toLocaleLowerCase('es');
  let visibles = 0;

  filas.forEach(fila => {
    const codigo = fila.dataset.codigo.toLocaleLowerCase('es');
    const nombre = fila.dataset.nombre.toLocaleLowerCase('es');
    const coincide = codigo.includes(termino) || nombre.includes(termino);
    fila.hidden = !coincide;
    if (coincide) visibles++;
  });

  conteo.textContent = `Productos visibles: ${visibles} de ${filas.length}.`
    + (visibles === 0 ? ' Sin coincidencias.' : '');
  sinCoincidencias.hidden = visibles !== 0;
}

consulta.addEventListener('input', filtrar);
filtrar();
