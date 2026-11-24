# Pistas del capítulo 5

Copia practica/inicio como mi-practica dentro de Capitulo 05. Hay tres páginas y un menú funcional; faltan estado actual, ruta contextual, enlace al detalle y salto al contenido.

- En index marca Productos con active y aria-current="page". En registro marca Registrar. En detalle deja esos enlaces sin aria-current y marca el último elemento de la miga de pan.
- Enlaza solo Cuaderno universitario a detalle.html: esa página contiene P001 escrito en HTML. Los demás productos todavía no tienen detalle propio.
- Añade antes de nav el enlace #contenido y asigna id="contenido" tabindex="-1" al main existente de cada página.
- Las migas usan nav con nombre distinto al principal y una lista breadcrumb. Productos enlaza a index.html; Detalle de P001 es el último elemento sin enlace.
- En diagnostico/index.html el botón apunta a un id que no existe. Compara data-bs-target, aria-controls e id antes de cambiar varias cosas.
