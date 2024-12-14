function ProductCard(props) {
    const {useState} = React;
    return (
        <div className="product-card-container">
            <h2>{props.name}</h2>
            <div className="content">
                <div className="text">
                    {props.features}
                    <h3>Цена: {props.price}</h3>
                    <button>Подробнее</button>
                </div>
                <div className="photo">
                    <img src={props.image} alt="Фото не найдено."></img>
                </div>
            </div>
        </div>
    );
}

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    let temp = card.getAttribute('features');
    let features = temp.split(';');
    features.forEach((feature, index) => {
        features[index] = feature.trim();
    });
    features = features.filter(item => item !== "");
    const featuresList = features.map((item) => <p>{item}</p>);
    console.log(card.getAttribute('image'));

    ReactDOM.createRoot(card).render(<ProductCard
        name={card.getAttribute('name')}
        features={featuresList}
        price={card.getAttribute('price')}
        hidden={card.getAttribute('hidden')}
        image={card.getAttribute('image')}
        images={card.getAttribute('images')}
    />);
});