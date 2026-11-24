# Solución de referencia

solucion añade P004 a index.html y al conjunto de detalle.js. app.js es idéntico al del recorrido principal: recopila cuatro filas al recargar y calcula visibles y total.

- Código P004 único en th, atributo data y enlace.
- data-nombre coincide con el nombre visible, para que la búsqueda no utilice un texto anterior.
- Precio 80.50 alineado al final y existencias 10 enteras.
- Etiqueta Existencias bajas con texto, además del color.
- Ver incluye el nombre del producto en su texto accesible y lleva a detalle.html?codigo=P004.
- Resumen actualizado a 4 productos y 127 unidades; permanece total aunque se oculte una fila.
- detalle.js contiene el mismo producto. Se trata de mantenimiento manual del ejemplo, no de persistencia ni de un segundo registro guardado por el usuario.

Prueba búsqueda vacía (4 de 4), P004 (1 de 4), hojas (1 de 4), p0 (4 de 4) y zzz (0 de 4), y borra para restaurar. La comparación distingue tildes: BOLÍGRAFO coincide; boligrafo sin tilde no es equivalente con esta implementación.
