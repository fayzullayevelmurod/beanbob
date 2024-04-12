// Header scroll active
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header-scroll');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});

// Play music
let audio = document.getElementById("myAudio");
let playButton = document.querySelector(".play-music");

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playButton.classList.add("playing");
        playButton.innerHTML = '<img src="images/icons/pause.png" alt="" class="pause">';
    } else {
        audio.pause();
        playButton.classList.remove("playing");
        playButton.innerHTML = '<img src="images/icons/play.svg" alt="" class="play">';
    }
}

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
