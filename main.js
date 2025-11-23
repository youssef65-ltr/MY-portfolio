const mobile_nav_links = document.querySelector(".mobile-nav-links");
const menu_btn = document.querySelector(".menu-btn");

const openMenu = () => {
    mobile_nav_links.classList.toggle("open"); 
    document.body.classList.toggle("no-scroll");
};

menu_btn.addEventListener("click", openMenu);
