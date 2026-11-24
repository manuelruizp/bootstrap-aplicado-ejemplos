# Capítulo 2 Contenedores filas y columnas

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 02/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Colección oficial: ejemplos/Capitulo 02. Bootstrap por CDN requiere conexión.

1. Abre inicio/index.html: coincide con final del capítulo 1. Copia inicio como trabajo.
2. Compara inicio con pasos/01-regiones.html y copia el contenido de ese andamiaje a trabajo/index.html para comenzar el recorrido de distribución. Si utilizas Bootstrap local, conserva las referencias a vendor mediante el procedimiento siguiente.
3. Modifica trabajo/index.html siguiendo los pasos. Compara con pasos/03-proporciones.html, 04-automaticas.html, 05-gutters.html y 06-alineacion.html después de intentar cada cambio.
4. pasos/02-fluido.html es una alternativa de estudio. pasos/laboratorio.html reúne experimentos independientes.
5. Añade el resumen interior y compara con final/index.html. La fila exterior reparte 4/8 desde lg; la interior reparte dos mitades del espacio local.
6. Comprueba 375, 768, 991, 992 y 1200 px; texto largo, teclado y ausencia de desbordamiento.
7. Copia trabajo como mi-practica. Sigue los requisitos del libro: etiqueta larga, acceso Consultar existencias, comparación 3/9 y 4/8, gutters y resumen con tres indicadores col-12 col-md-4.
8. Resuelve practica/diagnostico/index.html sin quitar clases al azar. Consulta practica/PISTAS.md si necesitas ayuda; después compara con practica/solucion/index.html y practica/SOLUCION.md.


## Conservar Bootstrap local al incorporar el andamiaje
Si elegiste la alternativa local del capítulo 1:
1. Antes de copiar, guarda las dos etiquetas locales de trabajo/index.html: la hoja vendor/bootstrap/css/bootstrap.min.css y el script vendor/bootstrap/js/bootstrap.bundle.min.js.
2. Copia el contenido de pasos/01-regiones.html a trabajo/index.html. Reemplaza las etiquetas CDN completas del CSS y del bundle por las dos etiquetas locales que guardaste, en head y al final de body, respectivamente. Sustituye las cargas existentes; no añadas otras dos.
3. Conserva la carpeta trabajo/vendor. Guarda y recarga sin conexión. Deben aparecer filtros y estilos; Red debe mostrar una sola carga local del CSS y otra del bundle, sin solicitudes a un CDN.

Si sigues la modalidad CDN, conserva las referencias que incluye el andamiaje y mantén la conexión. El resto del recorrido es el mismo.

Continuidad: final conserva 3 productos y 117 unidades. El capítulo 3 conserva el resumen y el panel lateral, y mejora la presentación interna con utilidades. La práctica de tres indicadores es independiente.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.


ENVÍO DEL FORMULARIO DE MUESTRA
Mientras el filtro esté dentro de form, conserva onsubmit="return false". Es una cancelación puntual del envío con JavaScript: no conecta los filtros. Escribe P001, selecciona Papelería y pulsa Enter en la búsqueda. Deben conservarse ambos valores y los tres productos; la página no debe recargarse ni cambiar su dirección. Aplicar filtros permanece deshabilitado. Tab sigue recorriendo acceso, búsqueda y categoría.
