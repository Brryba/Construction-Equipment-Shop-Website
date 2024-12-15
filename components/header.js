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
                    <img src="images/head/head.png" alt="Логотип компании"/>
                </a>
                <div class="phone">+375 (17) 272-27-39</div>
                <div class="email">info@mirostat.by</div>
                <a class="address" href="https://yandex.by/maps/-/CHEIE05j" target="blank">Минск, ул.Радиальная,
                    11Б/1,
                    помещение №4</a>
            </div>
            <nav class="head-menu">
                <ul>
                    <li><a href="index.html">Главная</a></li>
                    <li><a class="head-menu-caret" href="index.html">Новое оборудование</a>
                        <ul>
                            <li><a href="index.html">Пневмонагнетатели</a></li>
                            <li><a>Компрессоры</a></li>
                        </ul>
                    </li>
                    <li><a class="head-menu-caret" href="bu.html">Техника Б/У</a>
                        <ul>
                            <li><a href="bu-pnevmo.html">Пневмонагнетатели</a></li>
                            <li><a href="bu-podyomniki.html">Подъёмники</a></li>
                            <li><a>Компрессоры</a></li>
                            <li><a>Прочее оборудование</a></li>
                        </ul>
                    </li>
                    <li><a class="head-menu-caret" href="arenda.html">Аренда техники</a>
                        <ul>
                            <li><a href="index.html">Пневмонагнетатели</a></li>
                            <li><a>Подъёмники</a></li>
                            <li><a>Компрессоры</a></li>
                            <li><a>Пескоструйное оборудование</a></li>
                        </ul>
                        </li>
                    <li><a href="buy.html">Полезная информация</a></li>
                    <li><a href="contact.html">Контакты</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

customElements.define("header-component", Header);
