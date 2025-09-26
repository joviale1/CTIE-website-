// ===== BANNIÈRE FADE =====
const hero = document.querySelector('.hero');
const images = [
    'images/banner1.jpg',
    'images/banner2.jpg',
    'images/banner3.jpg',
    'images/banner4.jpg',
    'images/banner5.jpg',
    'images/banner6.jpg',
    'images/banner7.jpg',
    'images/banner8.jpg',
    'images/banner9.jpg',
    'images/banner10.jpg',
    'images/banner11.jpg',
    'images/banner12.jpg',
    'images/banner13.jpg',
    'images/banner14.jpg',
    'images/banner15.jpg',
    'images/banner16.jpg',
    'images/banner17.jpg',
    'images/banner18.jpg'
];

let current = 0;

function changeBackground() {
    hero.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
}

setInterval(changeBackground, 5000);

// ===== MENU BURGER =====
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// ===== BOUTON RETOUR EN HAUT =====
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});