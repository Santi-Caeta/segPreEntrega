import './index.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './containers/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from './components/nosotros/nosotros';
import Contacto from './components/contacto/contacto';
import { CartProvider } from './context/cartContext';
import Carrito from './components/cart/carrito';

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
