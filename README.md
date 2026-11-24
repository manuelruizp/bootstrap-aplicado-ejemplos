# Bootstrap aplicado

Diseña, personaliza y mejora la interfaz de tu aplicación web.

Materiales didácticos de los capítulos 1–12 y del apéndice opcional **Cómo implementar Sass en el proyecto**. Paquete **0.1.0**, en revisión editorial.

## Comenzar

1. Descarga el repositorio con **Code → Download ZIP** y descomprímelo, o clónalo si ya utilizas Git.
2. Abre `ejemplos/index.html` en tu navegador: es el catálogo local.
3. Abre la guía del capítulo y copia `inicio` como `trabajo` antes de editar.
4. Compara con `pasos` y `final` cuando lo indique el libro. Las prácticas tienen copias y soluciones independientes.

En GitHub los HTML se muestran como código; ejecútalos desde la copia descargada. No necesitas Git para estudiar ni GitHub Pages para abrir los ejemplos. También puedes usar tu servidor de desarrollo habitual.

## Materiales

| Capítulo | Guía |
| --- | --- |
| 01 | [Tu primera página con Bootstrap](ejemplos/Capitulo%2001/GUIA.md) |
| 02 | [Contenedores filas y columnas](ejemplos/Capitulo%2002/GUIA.md) |
| 03 | [Utilidades para el trabajo diario](ejemplos/Capitulo%2003/GUIA.md) |
| 04 | [Una interfaz que se adapta a la pantalla](ejemplos/Capitulo%2004/GUIA.md) |
| 05 | [Navegación y estructura del panel](ejemplos/Capitulo%2005/GUIA.md) |
| 06 | [Tablas y listados de productos](ejemplos/Capitulo%2006/GUIA.md) |
| 07 | [Formularios y validación](ejemplos/Capitulo%2007/GUIA.md) |
| 08 | [Componentes interactivos](ejemplos/Capitulo%2008/GUIA.md) |
| 09 | [Estados de la interfaz](ejemplos/Capitulo%2009/GUIA.md) |
| 10 | [Personaliza Bootstrap para tu proyecto](ejemplos/Capitulo%2010/GUIA.md) |
| 11 | [Reutiliza la estructura entre pantallas](ejemplos/Capitulo%2011/GUIA.md) |
| 12 | [Depura y prueba el panel completo](ejemplos/Capitulo%2012/GUIA.md) |

[Apéndice Sass](ejemplos/Apendice%20Sass/GUIA.md) · [Acceso y estructura](ejemplos/LEEME.txt)

Las rutas del libro parten de la raíz del repositorio: `ejemplos/Capitulo 01/inicio/index.html`, por ejemplo. Conserva los nombres de las carpetas.

## Qué contiene cada carpeta

- `inicio`: punto de partida que debes conservar limpio.
- `final`: resultado del recorrido principal y base del capítulo siguiente.
- `pasos`: referencias intermedias identificadas por el texto.
- `practica`: ejercicio independiente, pistas y solución de referencia.
- `laboratorio`: fallos intencionales para diagnosticar, con sus instrucciones.

En el capítulo 12, `inicio` y `final` coinciden: las incidencias están en sus laboratorios. El historial de movimientos es un reto independiente sin solución guiada.

## Ejecución

El recorrido principal utiliza **Bootstrap 5.3.9 por CDN** y requiere conexión. El capítulo 1 explica cómo prepararlo localmente. No se necesita Node.js para seguir los capítulos.

El apéndice incluye CSS compilado y bundle local: puede observarse sin conexión ni instalación. Para recompilar, copia `ejemplos/Apendice Sass/inicio` como `trabajo-sass` dentro de ese apéndice y ejecuta allí:

```sh
node --version
npm --version
npm ci
npm run build
```

Necesitas Node.js compatible, mínimo 20.19; el recorrido se comprobó con Node 24.22.3. Las dependencias están fijadas en Bootstrap 5.3.9 y Sass 1.108.2. La primera instalación necesita conexión. En PowerShell puedes usar `npm.cmd` si se bloquea `npm.ps1`.

Edita `scss/personalizado.scss`; `css/bootstrap-personalizado.css` es salida generada. Las guías explican vigilancia, errores y recuperación. Conserva el CSS generado, `vendor` y los archivos de bloqueo al compartir los materiales.

## Alcance del inventario

Los datos son ejemplos locales. El formulario valida sin guardar, la eliminación se revierte al recargar y el tema comienza en claro al abrir otro documento. Los importes se expresan en dólares estadounidenses ($). Cada capítulo distingue las funciones implementadas de los controles de muestra.

## Versión y licencias

Consulta [VERSION](VERSION), [CHANGELOG.md](CHANGELOG.md) y [LICENCIAS.md](LICENCIAS.md). La edición definitiva del libro indicará la etiqueta exacta que debe descargarse. Este paquete propone `v0.1.0` para la primera revisión publicada; la etiqueta se crea al publicarlo.

El código de los ejemplos y su documentación se ofrecen bajo [MIT](LICENSE): puedes copiarlos, mejorarlos y adaptarlos a tus proyectos. Conserva el aviso de copyright y la licencia. Consulta [LICENCIAS.md](LICENCIAS.md) para conocer el alcance y los avisos de las dependencias.
