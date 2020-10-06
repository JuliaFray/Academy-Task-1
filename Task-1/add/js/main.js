var header = document.querySelector('.header');
var scrollUp = document.querySelector('.footer-up-btn');
var scrollDown = document.querySelector('.scroll-btn');
var features = document.querySelector('.features');

var nav = document.querySelector('.nav')

var clientWidth = window.document.documentElement.clientWidth;
var burgerMenu = document.querySelector('.burger')

function toggleMenu() {
    nav.classList.toggle('nav-burger')
}

burgerMenu.addEventListener('click', () => {toggleMenu()});

var homeAnchor = document.getElementById('home');
var home = document.querySelector('.intro');

var featuresAnchor = document.getElementById('features');

var pricingAnchor = document.getElementById('pricing');
var pricing = document.querySelector('.pricing');

var pagesAnchor = document.getElementById('pages');
var pages = document.querySelector('.news');

function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
};

scrollDown.addEventListener('click', () => {scrollTo(features)});
scrollUp.addEventListener('click', () => {scrollTo(header)});
homeAnchor.addEventListener('click', () => {scrollTo(home)});
pricingAnchor.addEventListener('click', () => {scrollTo(pricing)});
featuresAnchor.addEventListener('click', () => {scrollTo(features)});
pagesAnchor.addEventListener('click', () => {scrollTo(pages)});