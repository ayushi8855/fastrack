import logo from './logo.svg';
import './App.css';
import { CategoryPage } from './components/categorypage';
import { ProductPage } from './components/productpage';
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/category-page" element={<CategoryPage/>}> </Route>
        <Route path="/product-page" element={<ProductPage/>}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;
