// Rutas y etiquetas fijas del proyecto; no son datos del usuario.
(() => {
  const destino = document.querySelector('#estructura-comun');
  if (!destino) return;
  const actual = location.pathname.split('/').pop() || 'index.html';
  const enlaces = [
    ['index.html', 'Productos'],
    ['registro.html', 'Registrar']
  ];
  const menu = enlaces.map(([url, texto]) => {
    const esActual = url === actual;
    return `<li class="nav-item">
      <a class="nav-link${esActual ? ' active' : ''}"
        ${esActual ? 'aria-current="page"' : ''}
        href="${url}">${texto}</a>
    </li>`;
  }).join('');
  destino.innerHTML = `
  <a class="visually-hidden-focusable" href="#contenido">Saltar al contenido</a>
  <nav class="navbar inv-nav navbar-expand-lg bg-body-tertiary border-bottom"
    aria-label="Principal">
    <div class="container">
      <button id="tema" type="button" class="btn btn-outline-secondary btn-sm me-2" aria-pressed="false">Activar modo oscuro</button>
      <a class="navbar-brand" href="index.html">Inventario</a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#menu-principal"
        aria-controls="menu-principal" aria-expanded="false"
        aria-label="Mostrar u ocultar navegación">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="menu-principal" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">${menu}</ul>
      </div>
    </div>
  </nav>
`;
})();
