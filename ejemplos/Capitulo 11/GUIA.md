# Capítulo 11 Reutiliza la estructura entre pantallas
inicio coincide con final del capítulo 10. Copia inicio como trabajo.
Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 11/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

1. Detecta lo común: navegación y salto al contenido. Conserva títulos, migas, main y pie.
2. Crea layout.js. Sustituye solo la navegación de index.html por estructura-comun y noscript. Carga layout.js antes de tema.js y del comportamiento de pantalla. Compara pasos/01-extraer-listado.
3. Migra registro.html y detalle.html. Compara pasos/02-tres-pantallas y final.
4. Cambia una etiqueta en enlaces de layout.js y recarga las tres páginas. Prueba el menú a 375 px con teclado, los destinos y la página actual.
Productos y Registrar son destinos principales. Detalle no recibe una marca de página actual falsa; sus migas identifican el producto.
No hay fetch, servidor, almacenamiento ni persistencia del tema. Bootstrap por CDN necesita conexión. JavaScript deshabilitado deja navegación básica, no las interacciones.
Práctica: extraer el pie en practica/inicio. PISTAS.md y solucion ofrecen ayuda y referencia.
final se conserva como inicio del capítulo 12. La práctica resuelta se mantiene aparte.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.
