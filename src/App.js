
// import { Navigate, Route, Routes } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/Home/Home';
import Menu from "./components/Menu/Menu";
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <>
    <Router>
      <Routes>
         <Route path={'/'} element={<Home/>}></Route>
         <Route path={'/Signup'} element={<Signup/>}></Route>
         <Route path={'/Signin'} element={<Signin/>}></Route>
         <Route path={'/Menu'} element={<Menu/>}></Route>
         <Route path={'/Cart'} element={<Cart/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
