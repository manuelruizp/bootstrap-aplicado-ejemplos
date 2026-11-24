# Pruebas de estados

| Transición o caso | Contenido y acciones esperados | Resultado |
| --- | --- | --- |
| Datos a carga | Resultados ocultos, búsqueda bloqueada, ocupado true, anuncio y spinner | |
| Carga a datos | Tabla y contador coherentes, ocupado false, consulta conservada | |
| Datos a vacío | Sin tabla/resumen/contador, enlace Registrar el primero | |
| Datos a error | Aviso persistente y Reintentar, sin datos antiguos visibles | |
| Error a carga a datos | Reintentar desaparece, foco visible, controles restaurados | |
| Buscar zzz | Datos disponibles, 0 visibles y orientación para borrar | |
| Eliminar última fila | Vacío, foco en Registrar el primero | |
| Toast | No cambia el estado ni comunica un guardado | |
| Cerrar toast con Enter | Foco visible en Probar notificación; si está deshabilitado, en el título del laboratorio | |
| Autoocultación del toast | Escribir en Buscar y esperar el cierre conserva el foco y lo escrito | |
| Mantenimiento de práctica | Aviso y anuncio, sin contador ni spinner, carga recupera | |
| Lector de pantalla | Carga, error y recuperación anunciados sin duplicación innecesaria | |
