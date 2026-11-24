# Solución de referencia

La variante conserva el nombre largo y la etiqueta ampliada. El inicio del capítulo 5 procede de final, no de esta práctica.

- col-12 col-xl-4 y col-12 col-xl-8 mantienen la lectura apilada antes de 1200 px. Desde xl recuperan el panel lateral y dan prioridad al listado.
- flex-column flex-md-row flex-xl-column responde a tres contextos: ancho pequeño, panel de ancho completo intermedio y panel lateral más estrecho.
- flex-wrap permite nuevas líneas; flex-grow-1 deja crecer los grupos. align-items-stretch, align-items-md-end y align-items-xl-stretch acompañan el cambio de ejes.
- El botón usa align-self-stretch align-self-md-end align-self-xl-start; en pequeño ocupa el ancho del grupo y en la columna lateral recupera su ancho de contenido.
- p-3 p-md-4 p-xl-3 evita gastar demasiado espacio interior en el panel lateral. El encabezado usa py-3 py-xl-4.

Puedes elegir lg si tus pruebas con tus contenidos lo justifican. No se exige que todos los controles permanezcan en una sola fila: envolver puede ser correcto.

Diagnóstico: la regla #buscar { min-width: 680px; } obliga al campo a ser más ancho que su región. Elimina esa declaración de css/laboratorio.css y recarga. Conserva la cuadrícula y los datos. No ocultes el exceso con overflow-hidden.

Prueba 375, 767, 768, 991, 992, 1199, 1200 y 1440 px, zoom y teclado. Registra ancho, síntoma, decisión y resultado. Compara el final con la solución al mismo ancho.
