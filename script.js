const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active");
    });
}