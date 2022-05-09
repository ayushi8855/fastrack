import logo from './logo.svg';
import './App.css';
import {
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Category} from "./components/category"
import {Product} from "./components/product"


function App() {
  return (
    
    <Routes>
      <Route>
      <Route path='/product/:id' element={<Product />} /> 
      <Route path='/' element={<Category />} /> 
      </Route>
    </Routes>

  
    
  );
}

export default App;
