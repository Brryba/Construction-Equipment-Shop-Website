//Создает элемент header-component для вставки одинакового заголовка на все страницы

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="head-background"></div>
            <div class="head-banner">
                <a class="head-image" href="index.html">
                    <img src="images/head/head.png" alt="Логотип Миростат"/>
                </a>
                <a class="phone" href="tel:+375172722739">+375 (17) 272-27-39</a>
                <a class="email" href="mailto:info@mirostat.by">info@mirostat.by</a>
                <a class="address" href="https://yandex.by/maps/-/CHEIE05j" target="blank">Минск, ул.Радиальная,
                    11Б/1,
                    помещение №4</a>
                <button class="menu-opener">
                    <img src="images/head/menu-icon.png" alt="Меню">
                </button>
            </div>
            <nav class="head-menu">
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a class="head-menu-caret">Новое оборудование<span class="after"></span></a>
                        <ul>
                            <li><a href="pulsar.html">Пневмонагнетатели</a></li>
                            <li><a href="new-compr.html">Компрессоры</a></li>
                        </ul>
                    </li>
                    <li><a class="head-menu-caret" href="bu.html">Техника Б/У</a>
                        <ul>
                            <li><a href="bu-pnevmo.html">Пневмонагнетатели</a></li>
                            <li><a href="bu-podyomniki.html">Подъёмники</a></li>
                            <li><a href="bu-compressory.html">Компрессоры</a></li>
                            <li><a href="bu-prochee.html">Прочее оборудование</a></li>
                        </ul>
                    </li>
                    <li><a class="head-menu-caret" href="rent.html">Аренда техники</a>
                        <ul>
                            <li><a href="rent-pnevmo.html">Пневмонагнетатели</a></li>
                            <li><a href="rent-podyomniki.html">Подъёмники</a></li>
                            <li><a href="rent-compr.html">Компрессоры</a></li>
                            <li><a href="rent-peskostruy.html">Пескоструйное оборудование</a></li>
                        </ul>
                        </li>
                    <li><a href="info.html">Полезная информация</a></li>
                    <li><a href="contacts.html">Контакты</a></li>
                </ul>
            </nav>
             <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
        </header>
        `;
    }
}

customElements.define("header-component", Header);
