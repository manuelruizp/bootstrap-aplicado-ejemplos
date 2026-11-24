# Capítulo 3 Utilidades para el trabajo diario

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 03/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Colección oficial: ejemplos/Capitulo 03. CDN requiere Internet.

## Cómo trabajar
1. Copia inicio como trabajo. Abre trabajo/index.html en el editor y navegador. inicio coincide con final del capítulo 2.
2. Sigue el libro sobre ese archivo: espaciado, tipografía, color, bordes y distribución. Después de intentar cada cambio compara con el archivo de pasos correspondiente.
3. Compara con final/index.html al terminar. Se conservan encabezado, panel de filtros, resumen de 3 productos y 117 unidades, listado y pie. Los filtros no están conectados y Aplicar filtros sigue deshabilitado.
4. pasos/laboratorio-clases.html añade py-2 py-4 en un artículo para inspeccionar un conflicto. No lo copies al proyecto; vuelve a una sola utilidad tras identificar la regla activa.
5. Para la práctica copia practica/inicio como mi-practica. Mejora jerarquía y densidad conservando datos y regiones. Guarda capturas al mismo ancho. Consulta practica/PISTAS.md y después practica/solucion/index.html y practica/SOLUCION.md.

## Comprobaciones
- Encabezado, filtros y productos conservan la cuadrícula del capítulo 2.
- Títulos y nombres destacan respecto a ayudas y códigos.
- Los artículos comparten py-2 y el formulario usa gap-3 sin márgenes añadidos a sus grupos.
- No hay desbordamiento a 375, 768 y 1200 px ni con un nombre largo.
- Ver productos conserva #productos y funciona con teclado.
- Los valores de resumen siguen siendo 3 y 117, sin cálculo automático.

El inicio del capítulo 4 coincide con este final. Su primera versión reorganiza los controles para estudiar adaptación; esa reorganización pertenece al capítulo siguiente.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.


ENVÍO DEL FORMULARIO DE MUESTRA
Mientras el filtro esté dentro de form, conserva onsubmit="return false". Es una cancelación puntual del envío con JavaScript: no conecta los filtros. Escribe P001, selecciona Papelería y pulsa Enter en la búsqueda. Deben conservarse ambos valores y los tres productos; la página no debe recargarse ni cambiar su dirección. Aplicar filtros permanece deshabilitado. Tab sigue recorriendo acceso, búsqueda y categoría.
