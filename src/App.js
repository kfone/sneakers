import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {
    return (
        <div className="wrapper clear">
            <Drawer/>
            <Header/>
            <div className="content p-40">
                <div className='d-flex flex-justify-content-space'>
                    <h1>Все кроссовки</h1>
                    <div className='search d-flex flex-align-items-center'>
                        <img src="img/search.png" alt="Search" className='mr-10'/>
                        <input type="search" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className='d-flex flex-justify-content-space mt-40'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default App;
