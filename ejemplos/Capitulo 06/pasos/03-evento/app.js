const consulta = document.querySelector('#buscar');

consulta.addEventListener('input', () => {
  console.log(consulta.value.trim().toLocaleLowerCase('es'));
});
