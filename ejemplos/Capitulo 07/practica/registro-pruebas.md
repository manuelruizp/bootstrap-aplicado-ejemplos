# Registro de pruebas del formulario

| Caso | Entrada o acción | Resultado esperado | Resultado |
| --- | --- | --- | --- |
| Vacío | Validar sin datos | Mensajes y foco en código | |
| Formato | X004, nombre válido, 10, 2 | Error en código | |
| Precio negativo | P004, nombre, -1, 2 | Error en precio | |
| Precio fuera de paso | P004, nombre, 1.001, 2 | Error en precio | |
| Existencias decimales | P004, nombre, 10, 1.5 | Error en existencias | |
| Nombre solo espacios | P004, espacios, 10, 2 | Error en nombre | |
| Duplicado simulado | P001 y otros campos válidos | Error de duplicado y foco en código | |
| Corrección | Cambiar P001 a P004 y validar | Se retira el error anterior | |
| Válido | P004, Carpeta, 0, 0 | Mensaje válido sin guardar | |
| Inactivo | Desmarcar activo y validar valores válidos | Mensaje indica inactivo | |
| Teclado | Tab hasta validar y Enter | Primer error recibe foco | |
| Después del éxito | Abrir listado y recargar | Siguen los tres productos iniciales | |
