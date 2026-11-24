const formulario = document.querySelector('#producto-form');
const campos = [...formulario.querySelectorAll('input[required]')];
const resultado = document.querySelector('#resultado');
const codigo = document.querySelector('#codigo');
const nombre = document.querySelector('#nombre');

function mensajePara(campo) {
  if (campo.validity.badInput) return 'Introduce un número válido.';
  if (campo.validity.valueMissing) return 'Completa este campo.';
  if (campo.validity.patternMismatch) return 'Usa P mayúscula seguida de tres cifras, como P004.';
  if (campo.validity.rangeUnderflow) return 'El valor debe ser igual o mayor que cero.';
  if (campo.validity.stepMismatch) {
    return campo.id === 'stock'
      ? 'Introduce existencias enteras, sin decimales.'
      : 'Introduce un precio en incrementos de 0.01.';
  }
  if (campo.validity.tooLong) return 'Usa un máximo de 80 caracteres.';
  return campo.validationMessage;
}

function presentarErrores() {
  let primero = null;
  campos.forEach(campo => {
    const invalido = !campo.validity.valid;
    const mensaje = document.querySelector('#' + campo.id + '-error');
    campo.classList.toggle('is-invalid', invalido);
    if (invalido) campo.setAttribute('aria-invalid', 'true');
    else campo.removeAttribute('aria-invalid');
    mensaje.textContent = invalido ? mensajePara(campo) : '';
    mensaje.hidden = !invalido;
    if (invalido && !primero) primero = campo;
  });
  return primero;
}

formulario.addEventListener('submit', event => {
  event.preventDefault();
  campos.forEach(campo => campo.setCustomValidity(''));

  if (!nombre.value.trim()) {
    nombre.setCustomValidity('Escribe un nombre que no contenga solo espacios.');
  }
  const categoria = document.querySelector('#categoria');
  if (!categoria.value.trim()) {
    categoria.setCustomValidity('Escribe una categoría que no contenga solo espacios.');
  }
  const restriccionesValidas = formulario.checkValidity();

  // Regla simulada; no consulta una base de datos.
  if (restriccionesValidas && codigo.value === 'P001') {
    codigo.setCustomValidity('P001 ya existe en esta simulación. Prueba con P004.');
  }

  const primero = presentarErrores();
  if (primero) {
    resultado.textContent = 'Revisa los campos indicados. Los datos escritos se conservan.';
    primero.focus();
    return;
  }

  const activo = document.querySelector('#activo').checked;
  resultado.textContent = 'Datos válidos para ' + nombre.value.trim()
    + (activo ? ' (activo).' : ' (inactivo).')
    + ' Demostración: no se guardó ni se añadió ningún producto.';
});
