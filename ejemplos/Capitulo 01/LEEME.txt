# Capítulo 1 Tu primera página con Bootstrap

Los materiales de este capítulo forman parte del repositorio de ejemplos de Bootstrap aplicado. Después de descargar o clonar el repositorio, esta carpeta se encuentra en ejemplos/Capitulo 01/. Las rutas abreviadas de esta guía parten de aquí. Consulta ../LEEME.txt para las instrucciones generales.

Colección oficial para este capítulo: ejemplos/Capitulo 01.

## Antes de comenzar
- Editor y navegador disponibles; puedes guardar y recargar el mismo archivo.
- inicio/index.html muestra tres productos sin Bootstrap.
- El CDN necesita Internet. Para uso sin conexión sigue la alternativa local del libro.

## Recorrido
1. Copia inicio como trabajo dentro de esta carpeta. Edita y abre trabajo/index.html.
2. Paso 1: añade CSS y JS. Tras comprobar las cargas, compara con pasos/01-bootstrap.html.
3. Paso 2: aplica contenedores y espacios; compara con pasos/02-contenedor.html.
4. Paso 3: ajusta títulos e introducción; compara con pasos/03-jerarquia.html.
5. Paso 4: destaca el enlace; compara con pasos/04-accion.html.
6. Paso 5: aplica las clases a los tres productos; compara con final/index.html.
7. Sigue la sección 1.8 para revisar recursos, inspeccionar clases y diagnosticar un fallo de carga.

## Resultado esperado
Tres regiones alineadas, jerarquía de títulos, enlace Ver productos a #productos y tres artículos uniformes. Pantalla legible a 375 píxeles, foco visible y recursos sin errores. Datos estáticos sin almacenamiento.

## Práctica autónoma
Copia trabajo como mi-practica. Añade P004, Paquete de hojas blancas tamaño carta para impresora, 40 unidades. Actualiza la cantidad a cuatro. Cambia el enlace a Consultar existencias con btn-success y conserva #productos. Comprueba móvil, zoom, teclado y cargas. Provoca y restaura un fallo de referencia al CSS.

Si necesitas ayuda consulta practica/PISTAS.md. Después del intento compara con practica/solucion/index.html y lee practica/SOLUCION.md. La solución de la práctica está separada de final para conservar la continuidad con el capítulo 2.

CAMBIOS.patch compara inicio y final. pasos/00-sin-bootstrap.html conserva el HTML inicial.

ESTRUCTURA DE REFERENCIA
Las carpetas Capitulo NN, inicio, final, pasos y practica organizan los materiales del repositorio. Dentro de la copia trabajo, el recorrido principal mantiene las páginas HTML y los recursos propios al mismo nivel. El capítulo 1 comienza solo con index.html; en el 5 se añaden registro.html y detalle.html, y los scripts y app.css se crean cuando el texto los introduce. vendor se utiliza únicamente si preparas Bootstrap local. La alternativa con paginas, css, js e img es opcional para tu aplicación. Si reorganizas archivos, revisa enlaces y referencias de CSS, JavaScript e imágenes, y comprueba las cargas tras recargar.

MÉTODO DE TRABAJO
1. Abrir: prepara la copia indicada en esta guía y localiza el archivo antes de editar.
2. Editar: realiza los cambios del texto en esa copia; conserva lo que el fragmento no sustituye.
3. Comprobar: reproduce las verificaciones y los criterios de aceptación antes de avanzar.
4. Comparar: consulta pasos cuando se indique y final después del intento. Los archivos completos son referencias.
La Práctica de cierre se realiza aparte: Pistas orienta; Solución de referencia permite comparar después; Criterios de aceptación determina qué debe funcionar. Su solución no reemplaza final.
