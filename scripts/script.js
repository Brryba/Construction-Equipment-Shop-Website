//фиксирует меню сверху при прокрутке страницы, скрывает верхний баннер
function pinMenu() {
    function updateMenu()  {
        const head_menu = document.getElementsByClassName("head-menu")[0];
        const head_banner = document.getElementsByClassName("head-banner")[0];
        const modal = document.getElementsByClassName("head-banner");
        if (window.innerWidth > 1024 && window.scrollY >= head_banner.offsetHeight) {
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
        if (window.getComputedStyle(headMenu).visibility === "hidden") {
            headMenu.style.visibility = "visible";
            document.body.style.overflow = 'hidden';
        } else {
            headMenu.style.visibility = "hidden";
            document.body.style.overflow = '';
        }
        headMenu.classList.toggle('opened');
    })

    function hideMenuOnScroll() {
        let prev = window.scrollY;
        const headBanner = document.getElementsByClassName("head-banner")[0];
        const headBackground = document.getElementsByClassName("head-background")[0];
        window.addEventListener('scroll', () => {
            let scrolled = window.scrollY;
            if (scrolled > prev && scrolled > 100) {
                headBanner.style.visibility = "hidden";
                headBackground.style.visibility = "hidden";
            } else if (scrolled < 100) {
                headBanner.style.visibility = "visible";
                headBackground.style.visibility = "visible";
            }
            prev = scrolled;
        })
    }
    hideMenuOnScroll();
}

document.addEventListener('DOMContentLoaded', () => {
    pinMenu();
    mobileMenuOpenClose();
})


