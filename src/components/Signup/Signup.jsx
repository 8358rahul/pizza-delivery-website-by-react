import React, { useState } from 'react'
import Header from '../Header/Header';
import {Link} from 'react-router-dom';

function Signup() {
  const[username1,setUsername1]=useState("")
  const[email1,setEmail1]=useState("")
  const[password1,setPassword1]=useState("")

   const signUp=(e)=>{

   }
  return (
    <>
    <Header/>
    <div>
    <section className="login-section">
            <h1 className=" signup login">Signup</h1>
            <form>
                <input 
                type="text" 
                class="userid"
                placeholder="username"
                onChange={(e)=>setUsername1(e.target.value)}
                value={username1}

                  />
                <input type="text" 
                 class="userid" 
                 placeholder="Email"
                 onChange={(e)=>setEmail1(e.target.value)}
                 value={email1} 
                 />
                <input type="password"
                class="userid"
                placeholder="password"
                onChange={(e)=>setPassword1(e.target.value)}

                 />
                <button class="login-btn" onClick={()=>{signUp()}}>Create</button>
            </form>
        </section>
    </div>
    </>
  )
}
export default Signup;
