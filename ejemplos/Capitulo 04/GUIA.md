# Capítulo 4 Una interfaz que se adapta a la pantalla

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 04/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Colección oficial: ejemplos/Capitulo 04. Bootstrap por CDN necesita conexión.

1. Copia inicio como trabajo. Edita trabajo/index.html. inicio coincide con el final del capítulo 3.
2. Cambia el reparto exterior a xl; compara con pasos/01-espacio-local.html después de intentar el cambio.
3. Ajusta dirección y alineación de herramientas; compara con pasos/02-herramientas.html.
4. Ajusta rellenos adaptables; compara con pasos/03-espaciado.html y final/index.html.
5. Compara pasos/comparar-lg.html con final al mismo ancho. Elige umbrales según el contenido y el ancho local, no por nombre de dispositivo.
6. En pasos/laboratorio-imagen.html se incluye una imagen real local para comprobar img-fluid. Este laboratorio no modifica la pantalla principal.
7. Copia practica/inicio como mi-practica; adapta textos largos. Consulta practica/PISTAS.md si te detienes. Tras el intento compara practica/solucion/index.html y lee practica/SOLUCION.md.
8. Resuelve practica/diagnostico/index.html con el método de la sección 4.8. Registra resultados en una copia de practica/registro-pruebas.md.

Comprueba 375, 767, 768, 991, 992, 1199, 1200 y 1440 px, además de zoom, texto largo y teclado. Filtros siguen sin conexión; Aplicar filtros continúa deshabilitado. Se conservan tres productos y 117 unidades.

Desde 768 el formulario puede usar una fila mientras ocupa ancho completo. Desde 1200 pasa a columna dentro del panel lateral. Encabezado, resumen, listado y pie siguen presentes. El capítulo 5 añade navegación y conserva estas herramientas en el listado.


## Resumen de los tres estados del resultado principal

| Ventana de referencia | Ubicación de filtros | Herramientas dentro del panel | Relleno del panel |
|---|---|---|---|
| 375 px | Encima de productos | En columna | 16 px |
| 768 px | Encima de productos | En fila si caben; pueden pasar a otra línea | 24 px |
| 1200 px | En el lateral, junto a productos | Vuelven a columna | 16 px |

Entre 768 y 1199 px se mantiene la dirección en fila; desde 1200 px vuelve a columna. flex-wrap permite nuevas líneas cuando el contenido lo necesita. Los rellenos corresponden a p-3, p-md-4 y p-xl-3 con el tamaño raíz de 16 px de esta referencia.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.


ENVÍO DEL FORMULARIO DE MUESTRA
Mientras el filtro esté dentro de form, conserva onsubmit="return false". Es una cancelación puntual del envío con JavaScript: no conecta los filtros. Escribe P001, selecciona Papelería y pulsa Enter en la búsqueda. Deben conservarse ambos valores y los tres productos; la página no debe recargarse ni cambiar su dirección. Aplicar filtros permanece deshabilitado. Tab sigue recorriendo acceso, búsqueda y categoría.
