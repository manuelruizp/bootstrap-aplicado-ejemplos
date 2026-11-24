# Capítulo 7 Formularios y validación

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 07/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Colección oficial: ejemplos/Capitulo 07. Copia inicio como trabajo; coincide con final del capítulo 6. Conserva búsqueda, tabla y detalle sin cambios.

1. Crea el formulario accesible en registro.html. Compara pasos/01-estructura.
2. Añade required, pattern, maxlength, min y step. Compara pasos/02-restricciones; usa primero los mensajes nativos.
3. Crea registro.js y cárgalo solo en registro.html. Añade novalidate y controla submit. Compara pasos/03-envio.
4. Sustituye todo el contenido provisional de registro.js del paso 3 por los listados 7.4 a 7.8 del capítulo, en ese orden. Conserva una sola carga del archivo en registro.html. Construye mensajes, clases, aria-invalid y foco. Para comparar con pasos/04-validacion, omite por ahora el bloque de duplicado señalado en el listado 7.7; lo incorporarás en el paso 5.
5. Incorpora la simulación de P001 duplicado. Compara pasos/05-duplicado y final.

El CSS de Bootstrap presenta. El navegador evalúa restricciones. registro.js organiza la respuesta; no hay servidor ni almacenamiento. P001 simula duplicado, sin consultar los códigos del inventario. Se valida de nuevo al enviar, conservando los valores.

Prueba todos los casos de practica/registro-pruebas.md. Para la práctica añade el grupo Categoría después de Existencias y antes de Producto activo, en una copia de practica/inicio; consulta PISTAS.md y después solucion y SOLUCION.md. Bootstrap CDN necesita conexión. El inicio del capítulo 8 coincide con final.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.
