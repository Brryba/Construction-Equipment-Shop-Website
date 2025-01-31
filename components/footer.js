//Создает элемент footer-component для вставки одинаковой нижней части на все страницы

class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <footer class="page-footer">
    <ul>
        <li>
            <h3 class="email">Наш email:</h3>
            <a class="footer-label" href="mailto:info@mirostat.by">info@mirostat.by</a>
        </li>
        <li class="phones">
            <h3 class="phone">Наши телефоны:</h3>
            <ul>
                <li><a href="tel:+375172722739">+375 (17) 272-27-39</li>
                <li><a href="tel:+375172424193">+375 (17) 242-41-93</li>
            </ul>
        </li>
        <li>
            <h3 class="address">Наш адрес:</h3>
            <a class="footer-label" href="https://yandex.by/maps/-/CHEIE05j" target="blank" tabindex="-1">
                220070, Республика Беларусь, г.Минск ул.Радиальная, 11Б/1, помещение №4</a>
        </li>
    </ul>
</footer>
        `;
    }
}

customElements.define("footer-component", Footer);
