function RentTypeCard(props) {
    const {useState} = React;
    return (
        <a className="rent-type-card-container" href={props.href}>
            <img src={props.image} alt="Фото недоступно."/>
            <div>
                <h2>{props.name}</h2>
            </div>
        </a>
    );
}

const typeCards = document.querySelectorAll('.rent-type-card');

typeCards.forEach(card => {
    ReactDOM.createRoot(card).render(<RentTypeCard
        image={card.getAttribute('image')}
        name={card.getAttribute('name')}
        href={card.getAttribute('href')}
    />);
});