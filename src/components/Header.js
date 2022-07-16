function Header() {
    return (
        <header className='d-flex flex-justify-content-space flex-align-items-center'>
            <div className='d-flex flex-align-items-center'>
                <img width={40} height={40} className='mr-15' src="img/logo.png" alt="logo"/>
                <div>
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li className='mr-30 d-flex flex-align-items-center'>
                    <img width={18} height={18} className='mr-10' src="img/cart.svg" alt="cart"/>
                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={20} height={20} src="img/user.svg" alt="user"/>
                </li>
            </ul>
        </header>
    );
}

export default Header;