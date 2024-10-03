const menuBarra = document.querySelector('.menu-barra');
const linksContent = document.querySelector('.links-content');

menuBarra.addEventListener('click', () => {
  linksContent.classList.toggle('active');
});