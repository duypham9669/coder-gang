$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    
    var navbar = new ScrollMagic.Scene({
        triggerElement: '.navbar-active',
        triggerHook: 0.8
    })
    .setClassToggle('.s-navigation', 'nav-active')
    .addTo(controller);

    var navbarinner = new ScrollMagic.Scene({
        triggerElement: '.navbar-active',
        triggerHook: 0.8
    })
    .setClassToggle('.s-nav-inner', 'nav-inner-active')
    .addTo(controller);

    var underline = new ScrollMagic.Scene({
        triggerElement: '.navbar-active',
        triggerHook: 0.8
    })
    .setClassToggle('.nav-underline', 'nav-underline-active')
    .addTo(controller);

    var navactive1 = new ScrollMagic.Scene({
        triggerElement: '.home',
        triggerHook: 0.01,
        duration: '720px'
    })
    .setClassToggle('#flag', 'active-1')
    .addTo(controller);

    var navactive2 = new ScrollMagic.Scene({
        triggerElement: '.stories',
        triggerHook: 0.1,
        duration: '770px'
    })
    .setClassToggle('#flag', 'active-2')
    .addTo(controller);

    var navactive3 = new ScrollMagic.Scene({
        triggerElement: '.donate',
        triggerHook: 0.1,
        duration: '1145px'
    })
    .setClassToggle('#flag', 'active-3')
    .addTo(controller);

    var navactive4 = new ScrollMagic.Scene({
        triggerElement: '.events',
        triggerHook: 0.18,
        duration: '1267px'
    })
    .setClassToggle('#flag', 'active-4')
    .addTo(controller);

    var navactive5 = new ScrollMagic.Scene({
        triggerElement: '.our-work',
        triggerHook: 0.29,
    })
    .setClassToggle('#flag', 'active-5')
    .addTo(controller);

    var donate = new ScrollMagic.Scene({
        triggerElement: '.donate-picture',
        triggerHook: 1,
        duration: '150%'
    })
    .setTween(".donate-picture", {backgroundPosition: 'bottom'})
    .addTo(controller);
    
    var intro = new ScrollMagic.Scene({
        triggerElement: '#intro-bg',
        triggerHook: 0.1,
        duration: '150%'
    })
    .setTween("#intro-bg", {backgroundPosition: 'bottom'})
    .addTo(controller);

    var eventsactive = new ScrollMagic.Scene({
        triggerElement: '.div-event1',
        triggerHook: 0.29,
    })
    .setClassToggle('#flag', 'active-events')
    .addTo(controller);

    var storiesactive = new ScrollMagic.Scene({
        triggerElement: '.story',
        triggerHook: 0.29,
    })
    .setClassToggle('#flag', 'active-stories')
    .addTo(controller);

    var donateactive = new ScrollMagic.Scene({
        triggerElement: '.donate',
        triggerHook: 0.29,
    })
    .setClassToggle('#flag', 'active-donate')
    .addTo(controller);

    var dangeractive = new ScrollMagic.Scene({
        triggerElement: '.dangerzone',
        triggerHook: 0.29,
    })
    .setClassToggle('#flag', 'dangerzone-active')
    .addTo(controller);
});