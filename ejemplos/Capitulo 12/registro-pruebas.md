# Registro de pruebas del panel

No marques aprobado sin ejecutar. Estados: pendiente, aprobado, falló, bloqueado. Cada fila comienza pendiente. Copia esta hoja y completa fecha, navegador/versión, carpeta probada y evidencia; conserva las condiciones de cada repetición.

## Condiciones de la sesión
Fecha: ___ | Navegador y versión: ___ | Carpeta/copia: ___ | Conexión/CDN: ___
Ventana en píxeles CSS: ___ | Zoom: ___ | Tema: ___ | Datos iniciales o cambios: ___

## Casos y cobertura
| ID | Pantalla | Condición | Pasos reproducibles | Resultado esperado | Resultado observado y evidencia | Estado |
|---|---|---|---|---|---|---|
| NAV-01 | Listado, registro y detalle | 1280 claro | Recorrer menú, Volver y fichas P001/P002/P003; abrir P999. | Rutas válidas; página actual correcta; P999 informa no encontrado. | Por completar | Pendiente |
| NAV-02 | Tres páginas | 375 claro y oscuro | Tab hasta apertura; Enter o Espacio; Tab por enlaces. | Menú se abre, foco visible, destinos utilizables, sin desbordamiento global. | Por completar | Pendiente |
| FIL-01 | Listado | 375 y 1280 | Buscar P002, Cuaderno, zzzz y borrar consulta. | 1 de 3, 1 de 3, 0 de 3 y 3 de 3; menús visibles coherentes. | Por completar | Pendiente |
| FIL-02 | Listado | 375 claro | Comprobar categoría y Aplicar filtros. | Categoría es muestra y Aplicar permanece deshabilitado; no prometer filtro por categoría. | Por completar | Pendiente |
| FOR-01 | Registro | 375 claro | Enviar vacío con teclado. | Primer error en código, foco y mensajes relacionados; no hay éxito. | Por completar | Pendiente |
| FOR-02 | Registro | 1280 oscuro | Probar código abc; luego P004, nombre Prueba, precio -1 y stock 1.5. | Se rechazan formato, precio negativo y existencias decimales; corregir antes de avanzar. | Por completar | Pendiente |
| FOR-03 | Registro | 375 oscuro | Con demás campos válidos, usar P001; después P004. | Duplicado simulado solo para P001; válido indica que no se guardó ni añadió el producto. | Por completar | Pendiente |
| FOR-04 | Registro | 375 claro | Pulsar etiqueta Nombre; navegar con Tab; provocar nombre vacío. | Etiqueta enfoca nombre; ayuda y error se conservan; foco permite corregir. | Por completar | Pendiente |
| MOD-01 | Listado | 375 y 1280 | Para P001/P002/P003 abrir menú y modal, cancelar con botón y con Escape. | Nombre correcto; no se elimina nada; foco vuelve al botón del menú correspondiente. | Por completar | Pendiente |
| MOD-02 | Listado | 375 oscuro | Recargar; eliminar P002; buscar P002 y abrir otra ficha. | Quedan 2 productos y 37 unidades; conteo 2 de 2 sin filtro, P002 da 0 de 2; foco útil. | Por completar | Pendiente |
| MOD-03 | Listado | 1280 claro | Recargar y eliminar los tres productos. | Estado vacío, acceso a Registrar y foco allí; contador oculto; no queda un menú huérfano. | Por completar | Pendiente |
| EST-01 | Listado | 375 claro | Buscar zzzz; Simular error; Reintentar y esperar. | Carga anuncia ocupación; contador no contradice estado; recuperación mantiene consulta y muestra 0 de 3. | Por completar | Pendiente |
| EST-02 | Listado | 1280 oscuro | Simular vacío y después Mostrar datos. | Vacío invita a registrar; vuelve el listado; búsqueda sin coincidencias se distingue de inventario vacío. | Por completar | Pendiente |
| EST-03 | Listado | 375 oscuro | Probar notificación; cerrar; Simular error. | Aviso breve no sustituye mensaje persistente; acciones disponibles coherentes. | Por completar | Pendiente |
| TEM-01 | Tres páginas | 375 y 1280 | Alternar tema, inspeccionar tablas, formularios, errores y modal; recargar y navegar. | Lectura y foco visibles; colores semánticos; recarga y nuevo documento comienzan en claro. | Por completar | Pendiente |
| ADP-01 | Tres páginas y modal | 375, 768, 991, 992, 1280 | Repetir apertura de menú, formulario con errores y tabla. | Sin desplazamiento global; tabla permite desplazamiento local; ninguna acción esencial queda fuera. | Por completar | Pendiente |
| ADP-02 | Listado y registro | 375 y 1280; zoom 200% | En copia usar nombre largo, cadena sin espacios y texto de error; ampliar zoom. | Texto legible, campos y botones accesibles; regiones se adaptan; registrar cualquier límite. | Por completar | Pendiente |
| TEC-01 | Tres páginas y modal | 375 claro y oscuro | Desde recarga usar Tab, salto al contenido, Enter, Espacio y Escape. | Orden comprensible, foco visible y recuperado; operaciones completables sin ratón. | Por completar | Pendiente |
| ASI-01 | Listado y registro | Con lector de pantalla | Escuchar conteo, carga/error/reintento, etiquetas y errores de formulario. | Anuncios comprensibles y asociaciones correctas; pendiente hasta prueba real, no basta inspeccionar ARIA. | Por completar | Pendiente |
| REC-01 | Tres páginas | Con conexión | Abrir Consola y Red antes de recargar; revisar CSS/JS propios y Bootstrap. | Sin errores inesperados ni recursos requeridos fallidos; registrar URL exacta y evidencia. | Por completar | Pendiente |
| REC-02 | Copia de trabajo | 1280 claro | Cambiar temporalmente href de app.css a app-ausente.css; recargar; restaurar. | Se detecta recurso faltante; restaurar referencia recupera identidad sin alterar datos ni scripts. | Por completar | Pendiente |
| LAB-01 | Laboratorio desbordamiento | 375 y 1280 | Reproducir, formular hipótesis, inspeccionar dimensiones, corregir y repetir. | Sin desbordamiento global; se conserva tabla desplazable y búsqueda. | Por completar | Pendiente |
| LAB-02 | Laboratorio modal | 375 y 1280 | Reproducir P002; comparar con P001, inspeccionar, corregir y repetir MOD-01/02. | El producto correcto abre modal, cancela y se elimina temporalmente. | Por completar | Pendiente |
| LAB-03 | Laboratorio etiqueta | Registro con teclado | Reproducir etiqueta Nombre; inspeccionar relación; corregir y repetir FOR-01/04. | Etiqueta asociada, foco correcto y mensajes intactos. | Por completar | Pendiente |

## Ficha de incidencia para copiar
- ID y caso vinculado:
- Síntoma y resultado esperado:
- Carpeta, navegador, ancho, zoom, tema y datos:
- Pasos exactos desde recarga:
- Hipótesis inicial:
- Inspección realizada y evidencia encontrada:
- Causa confirmada, archivo y selector o elemento:
- Corrección mínima aplicada:
- Nueva prueba del caso original y resultado:
- Regresión realizada y resultado con IDs:
- Evidencia guardada y limitaciones pendientes:

## Ejemplo de cierre de LAB-01
Condición: copia del laboratorio 01, index.html, ventana de 375 px CSS, zoom 100%, claro, datos iniciales. Síntoma: el documento tiene ancho desplazable mayor que la ventana. Hipótesis: una región impone un mínimo. Inspección: main mide al menos 62rem y Estilos señala la regla min-width añadida en app.css. Corrección: retirar esa declaración en el archivo. Repetición: medir el documento y comprobar que ya no desborda a 375 px. Regresión: FIL-01, MOD-01, ADP-01 a 1280 px. Este ejemplo describe cómo registrar; completa navegador, mediciones y evidencia de tu propia ejecución antes de marcar aprobado.

## Reto independiente
El historial se desarrolla después de los tres laboratorios y la revisión del panel. Crea casos RET-01 en adelante para navegación compartida, filtros combinados/restablecer, cero coincidencias, ausencia de movimientos, texto largo, teclado y temas. No hay una solución guiada del historial. Los fallos pendientes deben tener un caso reproducible y siguiente paso.

## Evidencia para zoom y lector de pantalla
ADP-02 requiere el zoom de página real del navegador en 200 %, confirmado en su menú. Anota ventana antes de ampliar, ancho CSS después, navegador y versión, sistema, tema, datos y capturas. Aumentar solo la fuente, deviceScaleFactor o la emulación móvil no sustituye esa prueba.
ASI-01 requiere escucha real: anota lector y versión, navegador, sistema, pasos, foco y anuncio observado. Inspeccionar ARIA no es una aprobación de escucha.
El recorrido del autor se registra como tal; no sustituye la prueba con un lector independiente. Conserva pendientes las pruebas manuales no ejecutadas aunque pasen las comprobaciones automatizadas.
