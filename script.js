const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const sectionTop = sec.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if(sectionTop < triggerPoint){
            sec.classList.add("show");
        }
    });
});
// SLIDER
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0;

function showSlide(i) {
    if (i >= images.length) index = 0;
    if (i < 0) index = images.length - 1;
    slides.style.transform = `translateX(${-index * 100}%)`;
}

next.addEventListener("click", () => {
    index++;
    showSlide(index);
});

prev.addEventListener("click", () => {
    index--;
    showSlide(index);
});

// Auto Slide
setInterval(() => {
    index++;
    showSlide(index);
}, 4000);
