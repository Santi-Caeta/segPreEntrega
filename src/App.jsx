import './index.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './containers/itemListContainer/itemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nosotros from './components/nosotros/nosotros'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
          </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
