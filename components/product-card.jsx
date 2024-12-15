function ProductCard(props) {
    const {useState} = React;

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="product-card-container">
            <h2>{props.name}</h2>
            <div className="content">
                <div className="text">
                    {props.features}
                    <h3>Цена: {props.price}</h3>
                    <button onClick={handleOpenModal}>Подробнее</button>
                </div>
                <div className="photo">
                    <img src={props.image} alt="Фото не найдено." onClick={handleOpenModal}></img>
                </div>
            </div>

            {isModalOpen && (
                <div className="modal-background" onClick={handleCloseModal}>
                    <div className="modal" onClick={(closing) => closing.stopPropagation()}>
                    <div className="images">
                            <img src={props.image} alt={props.name} className="modal-image"/>
                            {props.images}
                        </div>
                        <div className="content">
                            <h2>{props.name}</h2>
                            {props.features}
                            {props.other}
                            <h3>Цена: {props.price}</h3>
                        </div>
                        <span className="close-button" onClick={handleCloseModal}>Закрыть</span>
                    </div>
                </div>
            )}
        </div>
    );
}

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    function splitInput(notes) {
        let notesArr = notes.split(';');
        notesArr.forEach((note, index) => {
            notesArr[index] = note.trim();
        });
        return notesArr.filter(item => item !== "");
    }

    function parseFeatures(features) {
        if (features === undefined || features === null) {
            return <div></div>;
        }
        let featuresArr = splitInput(features);
        return featuresArr.length > 0 ? featuresArr.map((item) => <p>{item}</p>) : <div></div>;
    }

    function parseImages(images) {
        if (images === undefined || images === null) {
            return <div></div>;
        }
        let imagesArr = splitInput(images);
        return imagesArr.length > 0 ? imagesArr.map((item) => <img src={item} alt="Фото не найдено."
                                                                   className="modal-image"></img>) : <div></div>;
    }

    ReactDOM.createRoot(card).render(<ProductCard
        name={card.getAttribute('name')}
        features={parseFeatures(card.getAttribute('features'))}
        price={card.getAttribute('price')}
        other={parseFeatures(card.getAttribute('other'))}
        image={card.getAttribute('image')}
        images={parseImages(card.getAttribute('images'))}
    />);
});