const openMenu = document.querySelector('.open');
const closeMenu = document.querySelector('.close');
const nav = document.querySelector('.list-items');
const navLinks = document.querySelectorAll('.list-item');
const logo = document.querySelector('.logo');


function openMenuNav() {
    nav.style.transform = 'translateY(0%)'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'initial'
}

openMenu.addEventListener('click', openMenuNav)


function closeNav() {
    nav.style.transform = 'translateX(100%)'
    openMenu.style.display = 'initial'
    closeMenu.style.display = 'none'
};

closeMenu.addEventListener('click', closeNav);

navLinks.forEach((item) => item.addEventListener('click', closeNav));

logo.addEventListener('click', closeNav)

// for (const link of navLinks) {
//     link.addEventListener('click', closeMenuNav)
// }

const sr = ScrollReveal({
    distance: '25px',
    duration: 3000
});

sr.reveal(`.socials, .about-text`, {
    origin: 'left'
})

sr.reveal(`.home-content, .header-2`, {
    origin: 'right'
})


sr.reveal(`.contact-header`, {
    origin: 'top'
})
