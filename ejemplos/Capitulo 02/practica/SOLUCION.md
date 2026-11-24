# Solución de referencia del capítulo 2

Abre solucion/index.html y compara solo tus cambios. El resultado principal del capítulo se conserva en final/index.html, desde la carpeta Capitulo 02.

- Se mantiene container: la anchura limitada evita que la lectura se extienda indefinidamente.
- Los filtros usan 4/12 y los productos 8/12 desde lg. El listado tiene prioridad; el filtro conserva espacio para etiquetas. Por debajo se apilan.
- El enlace Consultar existencias reserva el ancho de su contenido desde md y conserva #productos.
- g-4 distingue las regiones principales; g-3 agrupa elementos relacionados del encabezado y del resumen.
- Los indicadores usan col-12 col-md-4: se apilan en pequeño y reparten en tercios el ancho de productos desde md. No miden tercios de toda la página.
- La etiqueta larga comprueba el ajuste del texto.

Diagnóstico: el panel de filtros tiene style="min-width: 700px". A 375 px excede el espacio de su columna. Quitar ese atributo y recargar corrige el fallo; no es necesario cambiar el contenedor, las columnas o los gutters. final/index.html sirve como referencia limpia del laboratorio.

Comprueba 375, 768, 991, 992 y 1200 px. Conserva los datos estáticos: 3 productos, 117 unidades y 1 categoría. Los filtros no están conectados.
