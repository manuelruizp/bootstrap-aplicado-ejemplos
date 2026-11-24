# Solución de referencia

solucion añade categoría a registro.html y su comprobación de espacios a registro.js. app.js y detalle.js permanecen iguales al capítulo 6.

required resuelve vacío; trim y setCustomValidity resuelven solo espacios. El bucle de campos incorpora el control y dirige foco según orden del documento. El mensaje está fuera de cualquier input-group y su visibilidad se controla con hidden, sin depender solo de bordes o color.

Tras cada corrección vuelve a validar: esta versión comprueba al enviar, no en cada pulsación. El éxito conserva campos y comunica expresamente que no se guardó nada. No representa una respuesta de servidor. P001 es el único duplicado simulado; P002 y P003 no se consultan en una base de datos.
