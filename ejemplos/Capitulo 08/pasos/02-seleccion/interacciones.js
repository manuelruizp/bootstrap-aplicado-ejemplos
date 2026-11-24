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
  confirmar.disabled = true;
});

modal.addEventListener('shown.bs.modal', () => {
  document.querySelector('#cancelar').focus();
});

modal.addEventListener('hidden.bs.modal', () => {
  const botonMenu = origen?.closest('[data-acciones]')?.querySelector('.dropdown-toggle');
  queueMicrotask(() => {
    if (!eliminado && botonMenu?.isConnected) botonMenu.focus();
    else document.querySelector('#titulo-productos').focus();
  });
  seleccion = null;
});
