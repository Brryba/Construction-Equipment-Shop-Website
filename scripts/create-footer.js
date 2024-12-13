//Создает элемент footer-component для вставки одинакового заголовка на все страницы

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
            <div class="footer-label">info@mirostat.by</div>
        </li>
        <li class="phones">
            <h3 class="phone">Наши телефоны:</h3>
            <ul>
                <li>+375 (17) 272-27-39</li>
                <li>242-41-93</li>
            </ul>
        </li>
        <li>
            <h3 class="address">Наш адрес:</h3>
            <a class="footer-label" href="https://yandex.by/maps/-/CHEIE05j" target="blank">
                220070, Республика Беларусь, г.Минск ул.Радиальная, 11Б/1, помещение №4</a>
        </li>
    </ul>
</footer>
        `;
    }
}

customElements.define("footer-component", Footer);
