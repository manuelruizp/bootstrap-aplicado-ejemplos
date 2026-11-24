document.querySelector('#estado-anuncio').textContent = 'Regiones preparadas; los escenarios todavía no están conectados.';
document.querySelectorAll('[data-escenario], #probar-toast').forEach(b => b.disabled = true);
