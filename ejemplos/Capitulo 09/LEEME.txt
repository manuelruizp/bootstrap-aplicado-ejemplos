# Capítulo 9 Estados de la interfaz

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 09/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Copia inicio como trabajo. Conserva app.js, registro.js y detalle.js. Añade regiones y estados.js al listado; bundle, app.js e interacciones.js preceden estados.js.

1. pasos/01-regiones prepara laboratorio, aviso, anuncio y resultados; controles de laboratorio deshabilitados.
2. pasos/02-estados conecta escenarios a mostrarEstado; carga queda pendiente como estado de estudio y reintento está deshabilitado. Recarga para salir de esa prueba.
3. pasos/03-recuperacion y final incorporan espera simulada, reintento, restauración y toast. Une los listados 9.3, 9.4, 9.5 y 9.7 en estados.js. En interacciones.js inserta la emisión de inventario-cambiado del listado 9.6 antes de cerrar el modal y sustituye solo la rama else de foco con el listado 9.8. El toast devuelve el foco a Probar notificación cuando se cierra desde su interior, sin interrumpir la escritura en otros controles.

Laboratorio didáctico, sin servidor. Cargar datos y Mostrar datos restauran los tres productos de ejemplo. Vacío y error ocultan los resultados existentes sin afirmar que son una respuesta real. La consulta se conserva. Cero coincidencias no equivale a inventario vacío. Eliminar el último producto sí lleva al escenario vacío local.

Para practicar copia practica/inicio y añade mantenimiento; consulta PISTAS.md y después solucion y SOLUCION.md. Registra pruebas y realiza escucha con lector de pantalla. El CDN requiere conexión. El inicio del capítulo 10 coincide con final.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.
