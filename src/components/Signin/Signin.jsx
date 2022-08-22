import React from 'react'
import Header from '../Header/Header';
import './Signin.css';
import {Link} from 'react-router-dom';

 function Signin() {
  return (
    <>
       <Header/>
       <div>
       <section className="login-section">
            <h1 className="login">Login</h1>
            <form>
                <input type="text" name="" id="" class="userid" placeholder="abc@gmail.com"/>
                <input type="password" name="" id="" class="userid" placeholder="******"/>
                <Link to={'/Menu'} class="login-btn">Login</Link>
            </form>
        </section>
       </div>
    </>
  )
}
export default Signin;
