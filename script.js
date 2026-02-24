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
