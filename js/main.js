// Header scroll active
window.addEventListener('scroll', function () {
    let header = document.querySelector('.header-scroll');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});


// Header menu
let openMenu = document.querySelectorAll('.bars');
let closeMenu = document.querySelector('.header-mob-close');
let menu = document.querySelector('.header-mob');
let menuLinks = document.querySelectorAll('.header-mob-link');
let menuBg = document.querySelector('.header-mob-bg');

openMenu.forEach(open => {
    open.addEventListener('click', function () {
        menu.classList.toggle('active');
    })
})
closeMenu.addEventListener('click', function () {
    menu.classList.remove('active');
})
menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', function () {
        menu.classList.remove('active');
    });
})
menuBg.addEventListener('click', function () {
    menu.classList.remove('active');
})


// // Play music

let audio = new Audio("../music/music.mp3");
window.addEventListener("load", function() {
    setTimeout(function() {
        audio.play();
    }, 500);
});

let play = document.querySelector(".play-music");
play.addEventListener("click", function() {
    if (audio.paused) {
        audio.play();
        this.classList.add("active");
    } else {
        audio.pause();
        this.classList.remove("active");
    }
});





// Accordion 
const items = document.querySelectorAll('.faq-item');

items.forEach((item) => {
    const accordionHeader = item.querySelector('.accordion-header');
    const accordionContent = item.querySelector('.accordion-content');
    const accordionIcon = item.querySelector('.accordion-icon');

    accordionHeader.addEventListener('click', () => {
        accordionIcon.classList.toggle('active');
        accordionHeader.classList.toggle('active');
        accordionContent.style.maxHeight = accordionContent.style.maxHeight ? null : accordionContent.scrollHeight + 'px';
    });
});


// Roadmap tab
let tabs = document.querySelectorAll(".roadmap-tab");
let images = document.querySelectorAll(".roadmap-img");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        images.forEach((image) => {
            image.classList.remove("active");
        });
        this.classList.add("active");
        let tabIndex = Array.from(tabs).indexOf(this);
        images[tabIndex].classList.add("active");
    });
});




const marqueItems = document.querySelectorAll('.marque-item1');

marqueItems.forEach(marqueItem => {
    gsap.to(marqueItem, {
        x: '-100%',
        duration: 15,
        repeat: -1,
        ease: 'linear',
        repeatDelay: 0,
        onStart: function () {
            gsap.set(marqueItem, { x: 0 });
        }
    });
});


const marqueItems2 = document.querySelectorAll('.marque-item2');

marqueItems2.forEach(marqueItem => {
    gsap.to(marqueItem, {
        x: '100%',
        duration: 15,
        repeat: -1,
        ease: 'linear',
        repeatDelay: 0,
        onStart: function () {
            gsap.set(marqueItem, { x: 0 });
        }
    });
});

