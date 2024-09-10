const nav1 = document.querySelector('#nav1');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
  nav1.classList.add('visible');
});

cerrar.addEventListener('click', () => {
  nav1.classList.remove('visible');
});
