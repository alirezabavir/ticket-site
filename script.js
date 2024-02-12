let $ = document;
let btnTogller = $.querySelector(".nav-toggler");
btnTogller.addEventListener("click", menuAction);
let openIcon = $.querySelector(".openIcon");
let closeIcon = $.querySelector(".closeIcon");
let navSmall = $.querySelector(".nav-small");

function menuAction() {

    openIcon.classList.toggle("d-none")
    closeIcon.classList.toggle("d-none")
    navSmall.classList.toggle("d-none")
    navSmall.style.transform = "translatex(0px)"

}