import React from 'react';
import './Cart.css';

export default function Cart() {
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
                    <li><a href="#">cart<span>6</span></a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Logot</a></li>
                </ul>
            </div>
        </nav>

    </header>

    <main className="shopping-main">
        <section className="shopping-main__content">
            <h1 className="title">Shopping Cart</h1>
            <table  className="table">
                <tr>
                    <td>pizza image</td>
                    <td>Pizza name</td>
                    <td>price</td>
                    <td>quantity</td>
                    <td><button>Delete</button></td>
                </tr>
            </table>
         
        </section>

    </main>
    </>
  )
}
