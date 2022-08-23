//Navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

const buttonku = document.getElementById('buttonku');
const buttonku2 = document.getElementById('buttonku2');

buttonku.addEventListener('click', function () {
    const gambarku = document.getElementById('gambarku');
    const about = document.getElementById('about');
    const footer = document.getElementById('footer');
    const home = document.getElementById('home');

    gambarku.classList.toggle('hidden');
    about.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    home.classList.toggle('hidden');
});

buttonku2.addEventListener('click', function () {
    const gambarku = document.getElementById('gambarku');
    const about = document.getElementById('about');
    const footer = document.getElementById('footer');
    const home = document.getElementById('home');

    gambarku.classList.toggle('hidden');
    about.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    home.classList.toggle('hidden');
});