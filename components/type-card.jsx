function TypeCard(props) {
    const {useState} = React;
    return (
        <div className="type-card-container">
            <h2>{props.name}</h2>
            <img src={props.image} alt="Фото недоступно." />
        </div>
    );
}

const typeCards = document.querySelectorAll('.type-card');

typeCards.forEach(card => {
    ReactDOM.createRoot(card).render(<TypeCard
        image={card.getAttribute('image')}
        name={card.getAttribute('name')}
    />);
});