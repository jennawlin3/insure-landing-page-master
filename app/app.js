const menuMobile = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".icon-menu");

menuIcon.addEventListener("click", e => {
    if(e) {
        menuMobile.classList.toggle("hide");

        if(menuIcon.classList.contains("hamburger")) {
        menuIcon.style.background = "url(./images/icon-close.svg)";
        menuIcon.classList.add("close");
        menuIcon.classList.remove("hamburger");
        return;
        }
        if(menuIcon.classList.contains("close")) {
            menuIcon.style.background = "url(./images/icon-hamburger.svg)"
        menuIcon.classList.add("hamburger");
        menuIcon.classList.remove("close");
        return;
        }
    }
})
