# Capítulo 6 Tablas y listados de productos

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 06/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Colección oficial: ejemplos/Capitulo 06. Bootstrap por CDN necesita conexión.

1. Copia inicio como trabajo: coincide con el final del capítulo 5.
2. Sustituye el ul del listado por una tabla de seis columnas. pasos/01-tabla conserva el detalle fijo de P001; los otros productos todavía no tienen enlace.
3. Aplica estilos, alineación numérica y estado de existencias. Compara pasos/02-presentacion.
4. Convierte el formulario de muestra en div#herramientas, conserva grupos y clases y explica que la búsqueda se aplica al escribir. Crea app.js, cárgalo solo en index y compara pasos/03-evento.
5. Construye comparación y visibilidad; compara pasos/04-filtro.
6. Añade contador y orientación sin coincidencias; compara pasos/05-contador.
7. Crea detalle.js, adapta detalle.html y enlaza cada producto por código; compara pasos/06-detalle y final.

app.js solo filtra y cuenta filas. detalle.js solo contiene datos estáticos y selección de la ficha. No hay validación de registro, modales, simulaciones de carga o tema. Registro conserva su explicación del capítulo 5.

La búsqueda compara nombre o código, distingue tildes y omite mayúsculas y espacios exteriores. Categoría y Aplicar filtros siguen de muestra. El resumen representa todo el inventario, no el subconjunto visible.

Para la práctica copia practica/inicio como mi-practica y añade P004 en tabla y datos de detalle. Usa practica/PISTAS.md y, tras el intento, practica/solucion y practica/SOLUCION.md. Registra pruebas en practica/registro-pruebas.md. El inicio del capítulo 7 coincide con final.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.


Al convertir el form del filtro en div#herramientas, retira onsubmit="return false". El grupo ya no puede enviarse; Enter conserva la consulta y el filtrado sigue respondiendo al escribir.
