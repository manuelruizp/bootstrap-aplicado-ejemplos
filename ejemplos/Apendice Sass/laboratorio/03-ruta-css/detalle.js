const productos = [
  {
    "codigo": "P001",
    "nombre": "Cuaderno universitario",
    "precio": 150,
    "unidades": 25
  },
  {
    "codigo": "P002",
    "nombre": "Bolígrafo azul",
    "precio": 25,
    "unidades": 80
  },
  {
    "codigo": "P003",
    "nombre": "Carpeta tamaño carta",
    "precio": 45,
    "unidades": 12
  }
];

const codigo = new URLSearchParams(location.search).get('codigo') || '';
const producto = productos.find(item => item.codigo === codigo);

if (producto) {
  document.querySelector('#nombre-producto').textContent = producto.nombre;
  document.querySelector('#codigo-producto').textContent = producto.codigo;
  document.querySelector('#stock-producto').textContent = producto.unidades + ' unidades';
  document.querySelector('#precio-producto').textContent = '$ ' + producto.precio.toFixed(2);
  document.querySelector('#ruta-producto').textContent = 'Detalle de ' + producto.codigo;
  document.querySelector('#ficha-producto').hidden = false;
  document.title = producto.nombre + ' | Detalle del producto';
} else {
  document.querySelector('#no-encontrado').hidden = false;
}
