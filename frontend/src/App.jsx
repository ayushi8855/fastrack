import { useState,createContext,} from 'react'
import './App.css'
import Home from "./Home"
import Login from "./Pages/login/login"
import Checkout from './Pages/checkoutpage/checkout'
import Signup  from './Pages/Signup/signup'
import {Link, Route, Routes} from 'react-router-dom';

export  const store = createContext(); 

function App() {


  return (
    <div className="App">
      
     <Routes>
    <Route path="/" element ={<Home/>}></Route>
       <Route path= "/signup" element={<Signup/>}></Route>
       <Route path= "/login" element={<Login/>}></Route>
<Route  path ="/checkout" element={<Checkout/>}></Route>
     </Routes>
       
    </div>
  )
}

export default App
