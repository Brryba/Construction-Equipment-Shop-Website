function TypeCard(props) {
    const {useState} = React;
    return (
        <a className="type-card-container" href={props.href}>
            <img src={props.image} alt="Фото недоступно."/>
            <div>
                <h3>{props.name}</h3>
            </div>
        </a>
    );
}

const typeCards = document.querySelectorAll('.type-card');

typeCards.forEach(card => {
    ReactDOM.createRoot(card).render(<TypeCard
        image={card.getAttribute('image')}
        name={card.getAttribute('name')}
        href={card.getAttribute('href')}
    />);
});