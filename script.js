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


//Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('aktif-hamburger');
    navMenu.classList.toggle('hidden');

});

const buttonCloseNotif = document.querySelector("#close-notif-berhasil");
const tulisanBerhasil = document.querySelector("#notif-berhasil");
const loading = document.querySelector("#loading");


buttonCloseNotif.addEventListener('click', function () {
    tulisanBerhasil.classList.toggle("hidden");
});

const scriptURL = "https://script.google.com/macros/s/AKfycbwqljeJBO2twb5X9P14CytVsTtGhG-RsCBofA27O0kQjD9Popj-xFFGBZoHFAs_VPxJ/exec";
const form = document.forms["contact-form"];
form.addEventListener("submit", (e) => {
    e.preventDefault();
    loading.classList.toggle("hidden");
    fetch(scriptURL, {
        method: "POST",
        body: new FormData(form)
    })
        .then((response) => {
            console.log("Success!", response);
            loading.classList.toggle("hidden");
            tulisanBerhasil.classList.toggle("hidden");
            form.reset();
        })
        .catch((error) => console.error("Error!", error.message));
});