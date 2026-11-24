# Pistas de la práctica

Copia practica/inicio como mi-practica. Añade Categoría obligatoria, con etiqueta visible, ayuda y mensaje propios. Rechaza un valor de solo espacios. Conserva todas las reglas anteriores.

1. Coloca el grupo Categoría después de Existencias y antes de Producto activo. Usa input con required y los ids categoria, categoria-ayuda y categoria-error. aria-describedby relaciona ayuda y error.
2. El selector input[required] ya incorpora el campo al recorrido y a presentarErrores.
3. Antes de checkValidity establece un error personalizado si categoria.value.trim() está vacío. Al iniciar el siguiente envío se limpia junto a los demás.
4. No añadas el campo al listado ni simules guardarlo. Prueba vacío, espacios y categoría válida además de los casos originales.
