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
buttonku.addEventListener('click', function () {
    const gambarku = document.getElementById('gambarku');
    const tentangku = document.getElementById('about');

    gambarku.classList.toggle('hidden');
    tentangku.classList.toggle('hidden');
});