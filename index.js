// HANDLE MOBILE MENU (on click)
const handleMenu = e => {
    e.target.classList.toggle('opened');

    // To disable page scroll when the mobiule menu is opened
    document.body.classList.toggle('disableScroll');
}

// PARALLAX EFFECT
const logoTitle = document.querySelector('.logoTitle');

const titleParallax = new Parallax(logoTitle, .5);
document.addEventListener('scroll', titleParallax.move);