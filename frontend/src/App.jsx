import { useState,createContext,} from 'react'
import './App.css'
import Home from "./Home"
import Login from "./Pages/login/login"
import Checkout from './Pages/checkoutpage/checkout'
import Signup  from './Pages/Signup/signup'
import {Link, Route, Routes} from 'react-router-dom';
import Checkoutpersonal from './Components/checkoutPersonaldet'
import Orderreview from './Components/Orderreview'
import Paymentpage from './Pages/Paymentpage/Paymentpage'
import Paying from './Pages/paying/paying'
export  const store = createContext(); 

function App() {


  return (
    <div className="App">
      
     <Routes>
    <Route path="/" element ={<Home/>}></Route>
       <Route path= "/signup" element={<Signup/>}></Route>
       <Route path= "/login" element={<Login/>}></Route>
<Route  path ="/checkout" element={<Checkout/>}></Route>
<Route path='/checkout/form' element={<Checkoutpersonal/>}></Route>
<Route path ="/checkout/orderrev" element={<Orderreview/>}></Route>
<Route path="/checkout/payment" element ={<Paymentpage/>}></Route>
<Route path="/checkout/paying" element ={<Paying/>}></Route>


     </Routes>
       
    </div>
  )
}

export default App
