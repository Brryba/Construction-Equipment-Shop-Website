function ImageSlider(props) {
    const {useState} = React;
    const [imageIndex, setImageIndex] = useState(0);

    function next() {
        setImageIndex((imageIndex + 1) % props.images.length);
    }

    function prev() {
        if (imageIndex === 0) {
            setImageIndex(props.images.length - 1);
        } else {
            setImageIndex(imageIndex - 1);
        }
    }

    return (
        <div className="image-slider">
            {props.images[imageIndex]}
            <div className="move-buttons-container">
                <button className="move-buttons prevButton" onClick={prev}>
                    <img src="images/bu/main/left-arrow.png" alt="Предыдущая"></img>
                </button>
                <button className="move-buttons nextButton" onClick={next}>
                    <img src="images/bu/main/right-arrow.png" alt="Следующая"></img>
                </button>
            </div>
            <div className="dots-container">
                {props.images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === imageIndex ? 'active' : ''}`}
                        onClick={() => setImageIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

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
                        <ImageSlider
                            image=<img className="modal-image" src={props.image} alt="Фото не найдено."/>
                        images={props.images}
                        />
                        <div className="content">
                            <h2>{props.name}</h2>
                            <div className="features">
                                {props.features}
                                {props.other}
                            </div>
                            <h3>Цена: {props.price}</h3>
                        </div>
                        <span onClick={handleCloseModal}>
                            <img src="images/bu/main/close.png" alt="Close" className="close-icon"/>
                        </span>
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

    function parseImages(image, images) {
        if (images === undefined || images === null) {
            return [<img src={image} alt="Фото не найдено." className="modal-image"></img>];
        }
        let imagesArr = splitInput(images);
        let imgComponents = imagesArr.length > 0 ? imagesArr.map((item) =>
            <img src={item} alt="Фото не найдено." className="modal-image"></img>) : <div></div>;
        imgComponents.unshift(<img src={image} alt="Фото не найдено." className="modal-image"></img>);
        return imgComponents;
    }

    ReactDOM.createRoot(card).render(<ProductCard
        name={card.getAttribute('name')}
        features={parseFeatures(card.getAttribute('features'))}
        price={card.getAttribute('price')}
        other={parseFeatures(card.getAttribute('other'))}
        image={card.getAttribute('image')}
        images={parseImages(card.getAttribute('image'), card.getAttribute('images'))}
    />);
});