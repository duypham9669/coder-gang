var nav1 = document.getElementById('nav-1');
var nav2 = document.getElementById('nav-2');
var nav3 = document.getElementById('nav-3');
var nav4 = document.getElementById('nav-4');
var nav5 = document.getElementById('nav-5');
var nav6 = document.getElementById('nav-6');
var nav7 = document.getElementById('nav-7');
var nav8 = document.getElementById('nav-8');
var underline = document.getElementById('nav-underline');
var navul = document.getElementById('nav-ul');
var flag;
var currentSection = '0px';
var hover;

navul.addEventListener('mouseenter', function() {
    document.getElementById('flag').style.height = '100px';
});

navul.addEventListener('mouseleave', function() {
    document.getElementById('flag').style.height = '0px';
});

window.onload = function() {
    flag = document.getElementById('flag').clientWidth;
    currentSection = flag + 'px';
    if (currentSection == '0px') {
        underline.style.transform = 'translateX(0)';
    }
    if (currentSection == '96px') {
        underline.style.transform = 'translateX(96px)';
    }
    if (currentSection == '196px') {
        underline.style.transform = 'translateX(196px)';
    }
    if (currentSection == '295px') {
        underline.style.transform = 'translateX(295px)';
    }
    if (currentSection == '406px') {
        underline.style.transform = 'translateX(406px)';
        underline.style.width = '73px';
    }
};

window.onscroll = function() {
    flag = document.getElementById('flag').clientWidth;
    currentSection = flag + 'px';
    hover = document.getElementById('flag').clientHeight;
    if (currentSection == '0px' && hover != 100) {
        underline.style.transform = 'translateX(0)';
        underline.style.width = '60px';
    }
    if (currentSection == '96px' && hover != 100) {
        underline.style.transform = 'translateX(96px)';
        underline.style.width = '60px';
    }
    if (currentSection == '196px' && hover != 100) {
        underline.style.transform = 'translateX(196px)';
        underline.style.width = '60px';
    }
    if (currentSection == '295px' && hover != 100) {
        underline.style.transform = 'translateX(295px)';
        underline.style.width = '60px';
    }
    if (currentSection == '406px' && hover != 100) {
        underline.style.transform = 'translateX(406px)';
        underline.style.width = '73px';
    }
};

nav1.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(0)';
    underline.style.width = '60px';
});

nav1.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    nav5active();
});

nav2.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(96px)';
    underline.style.width = '60px';
});

nav2.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    nav5active();
});

nav3.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(196px)';
    underline.style.width = '60px';
});

nav3.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    nav5active();
});

nav4.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(295px)';
    underline.style.width = '60px';
});

nav4.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    nav5active();
});

nav5.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(406px)';
    underline.style.width = '73px';
});

nav5.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    underline.style.width = '73px';
    nav5active();
});

nav6.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(553px)';
    underline.style.width = '105px';
});

nav6.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    nav5active();
});

nav7.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(664px)';
    underline.style.width = '70px';
});

nav7.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    nav5active();
});

nav8.addEventListener('mouseenter', function(){
    underline.style.transform = 'translateX(757px)';
    underline.style.width = '54px';
});

nav8.addEventListener('mouseleave', function(){
    underline.style.transform = 'translateX(' + currentSection + ')';
    nav5active();
});

var opennav = document.getElementById('open-mobile-nav');
var close = document.getElementById('close');
var mobilenav = document.getElementById('mobile-nav')

opennav.addEventListener('click', function() {
    mobilenav.style.right = '0';
});

close.addEventListener('click', function() {
    mobilenav.style.right = '-100%';
});

function nav5active() {
    if (currentSection == '406px') {
        underline.style.width = '73px';
    } else {
        underline.style.width = '60px';
    }
};