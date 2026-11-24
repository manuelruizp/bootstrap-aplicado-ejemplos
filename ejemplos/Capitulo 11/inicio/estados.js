const resultados = document.querySelector('#resultados');
const panelEstado = document.querySelector('#panel-estado');
const textoEstado = document.querySelector('#estado-texto');
const anuncio = document.querySelector('#estado-anuncio');
const espera = document.querySelector('#espera');
const reintentar = document.querySelector('#reintentar');
const registrarPrimero = document.querySelector('#registrar-primero');
const botonesEscenario = [...document.querySelectorAll('[data-escenario]')];
const copiaFilas = document.querySelector('#filas-productos').innerHTML;
const copiaAcciones = document.querySelector('#acciones-productos').innerHTML;
let estadoActual = 'datos';
let temporizador;

const estados = {
  datos: { mensaje: 'Inventario disponible. La búsqueda conserva su consulta.', clase: '' },
  carga: { mensaje: 'Cargando productos de demostración.', clase: 'alert alert-info' },
  vacio: { mensaje: 'Todavía no hay productos en este escenario. El registro sigue sin almacenamiento.', clase: 'alert alert-secondary' },
  error: { mensaje: 'No se pudieron cargar los productos. Puedes reintentar.', clase: 'alert alert-danger' }
};

function restaurarDatos() {
  document.querySelector('#filas-productos').innerHTML = copiaFilas;
  document.querySelector('#acciones-productos').innerHTML = copiaAcciones;
  document.querySelector('#resumen-productos').textContent = '3';
  document.querySelector('#resumen-unidades').textContent = '117';
  document.querySelector('#operacion').textContent = '';
}

function mostrarEstado(nombre) {
  if (!estados[nombre]) throw new Error('Estado desconocido: ' + nombre);
  clearTimeout(temporizador);
  estadoActual = nombre;
  const conDatos = nombre === 'datos';
  const cargando = nombre === 'carga';
  const focoEnRegion = resultados.contains(document.activeElement)
    || panelEstado.contains(document.activeElement);

  resultados.hidden = !conDatos;
  resultados.setAttribute('aria-busy', String(cargando));
  document.querySelector('#buscar').disabled = !conDatos;
  panelEstado.hidden = conDatos;
  panelEstado.className = estados[nombre].clase || 'mb-3';
  textoEstado.textContent = estados[nombre].mensaje;
  espera.hidden = !cargando;
  reintentar.hidden = nombre !== 'error';
  registrarPrimero.hidden = nombre !== 'vacio';
  botonesEscenario.forEach(boton => boton.disabled = cargando);
  document.querySelector('#probar-toast').disabled = !conDatos;

  if (conDatos) {
    filtrar();
    sincronizarAcciones();
  }
  anuncio.textContent = estados[nombre].mensaje;
  if (focoEnRegion) {
    if (nombre === 'error') reintentar.focus();
    else if (nombre === 'vacio') registrarPrimero.focus();
    else document.querySelector('#titulo-simulador').focus();
  }
}

function cargarDatos() {
  mostrarEstado('carga');
  document.querySelector('#titulo-simulador').focus();
  temporizador = setTimeout(() => {
    restaurarDatos();
    mostrarEstado('datos');
  }, 700);
}

botonesEscenario.forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.dataset.escenario === 'carga') cargarDatos();
    else {
      if (boton.dataset.escenario === 'datos') restaurarDatos();
      mostrarEstado(boton.dataset.escenario);
    }
  });
});
reintentar.addEventListener('click', cargarDatos);
const notificacion = document.querySelector('#notificacion');
let devolverFocoToast = false;

notificacion.addEventListener('hide.bs.toast', () => {
  devolverFocoToast = notificacion.contains(document.activeElement);
});
notificacion.addEventListener('hidden.bs.toast', () => {
  const foco = document.activeElement;
  if (devolverFocoToast && (notificacion.contains(foco) || foco === document.body)) {
    const botonToast = document.querySelector('#probar-toast');
    if (!botonToast.disabled && !botonToast.closest('[hidden]')) botonToast.focus();
    else document.querySelector('#titulo-simulador').focus();
  }
  devolverFocoToast = false;
});

document.querySelector('#probar-toast').addEventListener('click', () => {
  bootstrap.Toast.getOrCreateInstance(notificacion, { delay: 5000 }).show();
});

document.querySelector('#filas-productos').addEventListener('inventario-cambiado', () => {
  if (!document.querySelector('#filas-productos > tr')) mostrarEstado('vacio');
});
mostrarEstado('datos');
