import React, { useEffect, useState } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom'

export default function Menu() {
    const [items, setItems] = useState([]);

    const getItems = async () => {
        const response = await fetch('http://localhost:9000/items');
        setItems(await response.json());
    }
    useEffect(() => {
        getItems();
    }, [])
    return (
        <>
            <header className="menu-header">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <h1>LOGO</h1>
                    </div>
                    <div className="navbar-menu">
                        <ul>
                            <li><a href="#">menu</a></li>
                            <li><a href='#'>cart<span>6</span></a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Logot</a></li>
                        </ul>
                    </div>
                </nav>

            </header>

            <main className="menu-main">
                <section className="menu-main__content">
                    <h1 className="title">Menu</h1>
                    <div className="items">

                        {
                            items.map((curEle) => {
                                return (
                                    <div className='allItems'>
                                        <div className="item">
                                            <img src={curEle.imgUrl} alt="" />
                                            {/* <div>image</div>  */}
                                            <div className="item-details">
                                                <h2 className="title">{curEle.name}</h2>
                                                <a href="#" className="add-to-cart">Add to cart</a>
                                                <span className="price">{curEle.price}</span>
                                            </div>

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </section>

            </main>
        </>
    )
}
