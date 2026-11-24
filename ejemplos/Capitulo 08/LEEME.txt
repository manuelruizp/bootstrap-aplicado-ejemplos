# Capítulo 8 Componentes interactivos

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 08/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Copia inicio como trabajo. Conserva los archivos del capítulo 7. Bootstrap bundle debe preceder app.js e interacciones.js en el listado.

1. Añade tres menús de producto fuera de table-responsive y un modal después de main. Compara pasos/01-componentes: confirmar está deshabilitado.
2. Sustituye el contenido provisional de interacciones.js del paso 1 por los bloques del controlador; no los añadas debajo del ensayo. Conserva una sola carga del archivo en index.html. Identifica la fila y prepara nombre y código. Durante este paso usa confirmar.disabled = true en el listado 8.4; revisa pasos/02-seleccion.
3. Completa eliminación, contador, resumen y foco. Al incorporar el manejador del listado 8.6, cambia la línea del listado 8.4 a confirmar.disabled = false. En app.js mueve la consulta de filas dentro de filtrar. Compara pasos/03-eliminacion y final.

Filtrar oculta también los menús de filas no visibles. Cancelar, cierre y Escape no eliminan. El cambio afecta solo al listado actual y recargar lo revierte; detalle conserva sus datos estáticos. El menú y modal no implementan almacenamiento.

Para la práctica copia practica/inicio como mi-practica y completa la confirmación; consulta PISTAS.md, después solucion y SOLUCION.md. Prueba casos en registro-pruebas.md. El inicio del capítulo 9 coincide con final. El CDN requiere conexión.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.
