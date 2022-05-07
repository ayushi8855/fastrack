import logo from './logo.svg';
import './App.css';
import { Cart } from './components/Cart';
import { Procced } from './components/Procced';
import { Route, Routes } from 'react-router-dom';
import { Order_review } from './components/Order_review';

function App() {
  return (
    <div className="App">
         <Routes>
     <Route path="/" element={<Cart/>}></Route>
      <Route path="/procced" element={<Procced/>}></Route>
      <Route path="/order" element={<Order_review/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
