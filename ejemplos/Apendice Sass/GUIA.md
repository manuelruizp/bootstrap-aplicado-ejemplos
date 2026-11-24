# Cómo implementar Sass en el proyecto

Este apéndice opcional parte del panel terminado del capítulo 12. No incorpora sus laboratorios ni el reto de historial, ni las soluciones de prácticas anteriores. Conserva las tres pantallas y layout.js. No hay una ruta Sass paralela entre capítulos.

## Preparar tu copia
1. Dentro de Apendice Sass, copia inicio como trabajo-sass y conserva inicio sin modificar. Abre trabajo-sass/index.html en el navegador y los archivos de esa copia en tu editor.
2. Las rutas de edición y los comandos parten de trabajo-sass. Las referencias inicio, pasos, final, practica y laboratorio parten de ejemplos/Apendice Sass/.
3. Para recompilar instala Node.js LTS compatible, mínimo 20.19. Abre una terminal dentro de trabajo-sass. Ejecuta node --version, npm --version, npm ci y npm run build, una línea a la vez. La primera instalación requiere conexión. Si PowerShell bloquea npm.ps1, usa npm.cmd en los mismos comandos o una terminal cmd.
4. Las referencias incluyen CSS generado y bundle local, por lo que puedes observarlas sin instalar herramientas y sin conexión.

## Dónde encontrar lo que necesitas
| Necesidad | Archivo o carpeta |
|---|---|
| Editar la configuración Sass | trabajo-sass/scss/personalizado.scss |
| Inspeccionar la salida sin editarla | trabajo-sass/css/bootstrap-personalizado.css |
| Conservar identidad y temas del panel | app.css y tema.js; app.css carga después de Bootstrap |
| Conservar navegación compartida | layout.js carga antes de los controladores y tema.js |
| Instalar las dependencias de la edición | package.json y package-lock.json; npm ci |
| Preparar el bundle local | scripts/copiar-bootstrap.cjs; npm run preparar |
| Comparar una etapa | pasos/01-compilar, 02-variables, 03-mapas y 04-seleccion |
| Comparar el recorrido terminado | final/index.html |
| Resolver la práctica | practica/inicio; PISTAS.md durante el intento; solucion y SOLUCION.md después |
| Investigar fallos separados | laboratorio y registro-pruebas.md |

## Seguir el recorrido
S.1 explica variables CSS frente a Sass. En S.2 prepara las herramientas. En S.3 compila el import inicial y comprueba las cargas locales de las tres pantallas.

En S.4 coloca $primary, $border-radius y $enable-shadows antes del import; compara pasos/02-variables después del intento.

En S.5 une el listado S.5 de configuración y el S.6 de imports completos, en ese orden, como fuente completo. Añade borde-inventario-acento al div con aria-label="Resumen del inventario", conservando sus clases. Compara pasos/03-mapas.

En S.6 conserva la configuración S.5 y reemplaza únicamente los imports S.6 por S.7; compara pasos/04-seleccion y final. No pegues las dos listas de componentes juntas.

En S.7 usa npm run vigilar para recompilar al guardar, Ctrl+C para terminar y npm run produccion para comprimir. Comprueba la terminal antes de recargar: --no-error-css evita generar una hoja con el diagnóstico de error. Con las versiones de esta edición, una compilación fallida elimina el CSS de salida; corrige la fuente y ejecuta npm run css para recuperarlo. Los avisos conocidos de imports y dependencias Bootstrap 5.3 se omiten; los errores siguen deteniendo la compilación. Conserva las versiones fijadas.

S.8 explica mantenimiento y entrega. Conserva SCSS, CSS generado, bundle y licencia, fuentes de la aplicación, scripts y archivos de dependencias. No entregues node_modules. Editar HTML o JS no requiere compilar Sass; añadir componentes puede exigir ampliar imports.

## Laboratorios de diagnóstico
Copia cada laboratorio como mi-lab-01, mi-lab-02 o mi-lab-03 dentro de Apendice Sass. Lee su LEEME y registra síntoma, hipótesis, inspección y corrección antes de consultar la solución.
- SAS-01, laboratorio/01-compilacion: error de fuente; ejecuta npm ci y npm run css. El laboratorio incluye un CSS válido inicial, pero npm run css lo elimina al fallar. Una página ya abierta puede conservar temporalmente su aspecto; corrige la fuente y recompila antes de recargar.
- SAS-02, laboratorio/02-css-desactualizado: fuente azul y salida verde; compila y comprueba --bs-primary y el borde del resumen.
- SAS-03, laboratorio/03-ruta-css: investiga la carga del CSS del listado y comprueba qué archivo existe.

Después repite el fallo original y los flujos relacionados. Usa una copia de registro-pruebas.md; los casos empiezan pendientes. Estos ejercicios pertenecen al apéndice y no sustituyen los laboratorios del capítulo 12.

## Práctica de cierre
Copia practica/inicio como mi-practica-sass dentro de Apendice Sass. Cambia el acento y genera lectura-compacta con max-width de 36rem. Aplícala a #ayuda-tabla sin eliminar sus clases. Consulta practica/PISTAS.md durante el intento y practica/solucion y SOLUCION.md después. Usa una copia de practica/registro-pruebas.md. La práctica es independiente y no sustituye final.

## Qué debes observar
Tres páginas conservan CSS local antes de app.css, bundle antes de layout.js y montaje antes de los controladores. Comprueba --bs-primary, borde del resumen, navegación, temas y foco a 375 y 1280 píxeles. Repite filtro P002 y zzzz, error y reintento, cancelación y eliminación, formulario vacío y válido, detalle P002 y código desconocido. Una compilación exitosa no demuestra por sí sola que la aplicación funciona.
