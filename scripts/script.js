//фиксирует меню сверху при прокрутке страницы, скрывает верхний баннер
function pinMenu() {
    function updateMenu()  {
        const head_menu = document.getElementsByClassName("head-menu")[0];
        const head_banner = document.getElementsByClassName("head-banner")[0];
        const modal = document.getElementsByClassName("modal");
        if (window.scrollY >= head_banner.offsetHeight) {
            head_menu.classList.add("fixed");
            document.body.style.marginTop = `${head_menu.offsetHeight}px`;
        } else {
            head_menu.classList.remove("fixed");
            document.body.style.marginTop = "0px";
        }
    }
    window.addEventListener("scroll", updateMenu);
    updateMenu();
}

function mobileMenuOpenClose() {
    const button = document.getElementsByClassName("menu-opener")[0];
    const headMenu = document.getElementsByClassName('head-menu')[0];
    button.addEventListener('click', () => {
        if (window.getComputedStyle(headMenu).display === "none") {
            headMenu.style.display = "block";
            document.body.style.overflow = 'hidden';
        } else {
            headMenu.style.display = "none";
            document.body.style.overflow = '';
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    pinMenu();
    mobileMenuOpenClose();
})


