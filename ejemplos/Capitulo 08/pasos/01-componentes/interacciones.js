const modal = document.querySelector('#confirmar');
modal.addEventListener('shown.bs.modal', () => document.querySelector('#cancelar').focus());
document.querySelector('#eliminar').disabled = true;
