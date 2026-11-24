# Solución

solucion coincide con final. La selección se obtiene del código del botón y se valida contra una fila actual y visible. El texto del modal procede de esa fila y se escribe con textContent. Bootstrap abre, cierra y administra el diálogo; la aplicación decide qué fila retirar, cómo contar y dónde recuperar foco.

Al cancelar regresamos al botón del desplegable, porque la opción interna vuelve a quedar oculta. Al eliminar, ese grupo desaparece y enfocamos el encabezado Productos disponibles, con tabindex -1. El filtro recopila filas actuales en cada ejecución para no contar registros retirados.

El resumen se recalcula sobre todo lo que queda en esta página; el contador sigue describiendo solo lo visible. El detalle y el formulario no se guardan ni se modifican. Abrir una ficha directamente puede seguir mostrando el conjunto estático: la eliminación es local al listado y se restaura al recargar.
