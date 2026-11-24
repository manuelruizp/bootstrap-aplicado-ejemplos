const consulta = document.querySelector('#buscar');
const filas = [...document.querySelectorAll('#filas-productos > tr')];

function filtrar() {
  const termino = consulta.value.trim().toLocaleLowerCase('es');
  filas.forEach(fila => {
    const codigo = fila.dataset.codigo.toLocaleLowerCase('es');
    const nombre = fila.dataset.nombre.toLocaleLowerCase('es');
    const coincide = codigo.includes(termino) || nombre.includes(termino);
    fila.hidden = !coincide;
  });
}

consulta.addEventListener('input', filtrar);
filtrar();
