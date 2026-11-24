const formulario = document.querySelector('#producto-form');
const resultado = document.querySelector('#resultado');
formulario.addEventListener('submit', event => {
  event.preventDefault();
  resultado.textContent = formulario.checkValidity()
    ? 'Restricciones HTML satisfechas. Ensayo sin almacenamiento.'
    : 'Hay restricciones HTML pendientes. Aún no presentamos errores por campo.';
});
