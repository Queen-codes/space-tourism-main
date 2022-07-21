const mobileToggler = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('.nav-menu');

mobileToggler.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    mobileToggler.classList.toggle('show-menu');
})
