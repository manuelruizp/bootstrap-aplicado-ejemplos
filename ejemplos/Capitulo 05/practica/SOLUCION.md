# Solución de referencia

solucion contiene las mismas tres páginas que final. Después del intento, compara solo los cambios respecto a practica/inicio.

1. Productos es la página actual en index; Registrar lo es en registro. active expresa apariencia y aria-current="page" expresa ubicación. En detalle la ubicación actual está en la miga Detalle de P001, no en un enlace que lleva al listado.
2. El nombre de P001 enlaza a detalle.html. P002 y P003 permanecen como texto: no prometemos que un detalle fijo cambie por añadir una consulta a la URL.
3. Las migas describen pertenencia a Productos, no el historial del navegador. Productos y Volver al listado funcionan aunque abras detalle directamente.
4. El salto al contenido se enfoca con Tab y lleva al main que tiene id contenido y tabindex -1.
5. En el laboratorio cambia data-bs-target="#menu-inexistente" a #menu-principal. aria-controls y el id del panel usan menu-principal sin #. La biblioteca bundle se conserva; no hace falta otro controlador.

Prueba 375, 991, 992 y 1200 px. Con el menú cerrado, aria-expanded es false; con el panel abierto pasa a true. Prueba Enter y Espacio y los regresos desde registro y detalle. No se exige cierre con Escape: collapse no es un menú de aplicación con navegación mediante flechas.
