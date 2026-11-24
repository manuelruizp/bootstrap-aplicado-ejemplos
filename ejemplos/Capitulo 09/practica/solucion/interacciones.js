const modal = document.querySelector('#confirmar');
const confirmar = document.querySelector('#eliminar');
const operacion = document.querySelector('#operacion');
let seleccion = null;
let origen = null;
let eliminado = false;

function sincronizarAcciones() {
  document.querySelectorAll('[data-acciones]').forEach(grupo => {
    const fila = document.querySelector('tr[data-codigo="' + grupo.dataset.acciones + '"]');
    grupo.hidden = !fila || fila.hidden;
  });
}
document.querySelector('#buscar').addEventListener('input', sincronizarAcciones);
sincronizarAcciones();

modal.addEventListener('show.bs.modal', event => {
  origen = event.relatedTarget;
  eliminado = false;
  const codigo = origen?.dataset.codigo;
  seleccion = [...document.querySelectorAll('#filas-productos > tr')]
    .find(fila => fila.dataset.codigo === codigo);
  if (!seleccion || seleccion.hidden) {
    event.preventDefault();
    seleccion = null;
    return;
  }
  document.querySelector('#detalle-confirmar').textContent =
    '¿Eliminar ' + seleccion.dataset.nombre + ' (' + seleccion.dataset.codigo + ')?';
  confirmar.disabled = false;
});

modal.addEventListener('shown.bs.modal', () => {
  document.querySelector('#cancelar').focus();
});

confirmar.addEventListener('click', () => {
  if (!seleccion?.isConnected) return;
  confirmar.disabled = true;
  const codigo = seleccion.dataset.codigo;
  const nombre = seleccion.dataset.nombre;
  seleccion.remove();
  document.querySelector('[data-acciones="' + codigo + '"]').remove();
  eliminado = true;
  filtrar();
  sincronizarAcciones();
  const restantes = [...document.querySelectorAll('#filas-productos > tr')];
  document.querySelector('#resumen-productos').textContent = restantes.length;
  document.querySelector('#resumen-unidades').textContent = restantes.reduce(
    (total, fila) => total + Number(fila.dataset.unidades), 0);
  operacion.textContent = nombre + ' retirado de esta página. Recargar restaura el inventario.';
  document.querySelector('#filas-productos').dispatchEvent(new Event('inventario-cambiado'));
  bootstrap.Modal.getInstance(modal).hide();
});

modal.addEventListener('hidden.bs.modal', () => {
  const botonMenu = origen?.closest('[data-acciones]')?.querySelector('.dropdown-toggle');
  queueMicrotask(() => {
    if (!eliminado && botonMenu?.isConnected) botonMenu.focus();
    else {
      const titulo = document.querySelector('#titulo-productos');
      if (!titulo.closest('[hidden]')) titulo.focus();
      else document.querySelector('#registrar-primero').focus();
    }
  });
  seleccion = null;
});
