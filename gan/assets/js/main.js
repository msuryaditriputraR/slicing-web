/* ==================== TEAMS SLIDER ===================== */
const swiper = new Swiper(".home3__teams", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: 2,
    coverflowEffect: {
        rotate: 0,
        modifier: 2.5,
        stretch: 20,
        slideShadows: false,
        scale: 0.95,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* ==================== YEAR ===================== */
const year = document.getElementById("year");
const date = new Date();

year.innerHTML = date.getFullYear();

/* ==================== SCROLL HEADER ===================== */
function scrollHeader() {
    const header = document.getElementById("header"),
        logo = document.querySelector(".nav__logo img");
    let logoName = "logo";

    if (this.scrollY >= 50) {
        header.classList.add("scroll-header");
        logoName = "logo-icon";
    } else {
        header.classList.remove("scroll-header");
        logoName = "logo";
    }

    logo.src = `./assets/img/${logoName}.png`;
}

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function showScrollup(idScrollUp) {
    const scrollUp = document.getElementById(idScrollUp);

    scrollUp.classList[this.scrollY >= 130 ? "add" : "remove"](
        "active-scrollup"
    );
}

window.addEventListener("scroll", () => showScrollup("scroll-up"));
