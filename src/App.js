import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Accesorios from "./components/Accesorios/Accesorios";
import SobreNosotros from "./components/SobreNosotros/SobreNosotros";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Prendas from "./components/Prendas/Prendas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/category/prendas" element={<Prendas />} />
            <Route path="/category/home" element={<Home />} />
            <Route path="/category/accesorios" element={<Accesorios />} />
            <Route path="/category/sobreNosotros" element={<SobreNosotros />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
