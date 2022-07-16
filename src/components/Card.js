function Card() {
    return (
        <div className='card'>
            <img className='favorite' src="img/addFavorite.svg" alt="Favorite"/>
            <img width={133} height={112} src="img/sneaker1.jpg" alt="sneaker"/>
            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='d-flex flex-justify-content-space'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>12 999 руб.</b>
                </div>
                <button>
                    <img src="img/addCard.svg" alt="Add"/>
                </button>
            </div>
        </div>
    );
}

export default Card;