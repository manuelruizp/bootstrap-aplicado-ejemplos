const controlTema = document.querySelector('#tema');
function aplicarTema(tema) {
  document.documentElement.dataset.bsTheme = tema;
  const oscuro = tema === 'dark';
  controlTema.setAttribute('aria-pressed', String(oscuro));
  controlTema.textContent = oscuro ? 'Modo oscuro activado' : 'Activar modo oscuro';
}
controlTema.addEventListener('click', () => {
  aplicarTema(document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark');
});
aplicarTema('light');
