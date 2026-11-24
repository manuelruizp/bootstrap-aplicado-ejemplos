# Solución

solucion añade mantenimiento al catálogo y un botón al laboratorio. mostrarEstado aplica el mismo contrato: resultados ocultos, búsqueda bloqueada, aria-busy false, aviso persistente y sin acciones de vacío/error. Cargar datos lleva a carga y después a datos. El anuncio se actualiza en la región viva ya existente.

La demostración conserva temporalmente el DOM en vacío/error; no significa que el servidor devolviera esos registros. Mostrar datos y la carga restauran los tres registros de ejemplo, incluso después de eliminar. La consulta se conserva; si no coincide, datos disponibles puede mostrar cero visibles sin ser inventario vacío.

Las pruebas automáticas comprueban atributos y texto. La audición real del anuncio debe revisarse con un lector de pantalla: sin depender de foco movido al mensaje, comprobar carga, error, reintento y mantenimiento. El toast no es la única explicación de un error.
