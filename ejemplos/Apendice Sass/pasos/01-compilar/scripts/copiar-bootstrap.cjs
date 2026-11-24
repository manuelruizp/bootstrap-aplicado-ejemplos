const fs = require('node:fs');
const path = require('node:path');
const source = require.resolve('bootstrap/dist/js/bootstrap.bundle.min.js');
fs.mkdirSync('vendor', { recursive: true });
fs.copyFileSync(source, path.join('vendor', 'bootstrap.bundle.min.js'));
console.log('Bundle local de Bootstrap preparado.');
