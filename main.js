const navIconEl = document.querySelector('.nav--icon');
const navCloseEl = document.querySelector('.nav--close');
const navList = document.querySelector('.nav--list');
const navBgOvarLayEl = document.querySelector('.nav--bgOverlay');

const navOpen = () => {
    navList.classList.add('show')
    navBgOvarLayEl.classList.add('active');
    document.body.style = "visibility:visible;height:100vh; width:100vw; overflow:hidden;"
}

const navClose = () => {
    navList.classList.remove('show');
    navBgOvarLayEl.classList.remove('active');
    document.body.style = "visibility:visible;height:initial; width:100%; overflow-x:hidden;"

}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOvarLayEl.addEventListener('click', navClose)

// aos animetion start
AOS.init({
    offset: 200,
    delay: 100,
    duration: 400,
    easing: 'ease',
    mirror: false,
    once: false,
    anchorePlacement: 'top-button'

})