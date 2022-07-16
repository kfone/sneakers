function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer d-flex flex-column">
                <div className="headerCart d-flex flex-justify-content-space mb-30">
                    <h2>Корзина</h2>
                    <img className='removeBtn' src="img/btnRemove.svg" alt="remove"/>
                </div>
                <div className="items">
                    <div className="cartItem d-flex flex-align-items-center mb-20">
                        <img className='mr-20' width={70} height={70} src="img/sneaker1.jpg" alt="sneaker"/>
                        <div className='mr-20'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn' src="img/btnRemove.svg" alt="remove"/>
                    </div>
                    <div className="cartItem d-flex flex-align-items-center mb-20">
                        <img className='mr-20' width={70} height={70} src="img/sneaker1.jpg" alt="sneaker"/>
                        <div className='mr-20'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <img className='removeBtn' src="img/btnRemove.svg" alt="remove"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <ul>
                        <li className='d-flex mb-20'>
                            <span>Итого:</span>
                            <div></div>
                            <b>21 498 руб. </b>
                        </li>
                        <li className='d-flex'>
                            <span>Налог 5%: </span>
                            <div></div>
                            <b>1074 руб. </b>
                        </li>
                    </ul>
                    <button className='greenBtn mt-25'>Оформить заказ <img src="img/arrow.svg" alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;