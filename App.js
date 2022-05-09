import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Checkout from "./Pages/checkoutpage/checkout"
import Login from './Pages/login/Login';
import Signup from './Pages/Signup/signup';
import {Cart} from './components/Cart'
import { Order_review } from './components/Order_review';
import Paymentpage from "./Pages/Paymentpage/Paymentpage"
import Paying from './Pages/paying/paying';
import { Home } from './components/Home';
import {Category} from "./components/Category"
import {Product} from "./components/Product"
import { Footer } from './components/footeres/Footer';
function App() {
  return (
    <div className="App">
    <Navbar/>
     
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Cart' element={<Cart/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/checkout/order_review' element={<Order_review/>}></Route>
      <Route path='/checkout/payment' element={<Paymentpage/>}></Route>
      <Route path="/checkout/paying"  element={<Paying/>}></Route>
      <Route path="/category"  element={<Category/>}></Route>
      <Route path='/product/:id' element={<Product />} />
      </Routes>
   <Footer/>
    </div>
  );
}

export default App;
