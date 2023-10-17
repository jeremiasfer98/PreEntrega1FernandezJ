// App.jsx
import React from 'react';
import Header from "./Header";
import Cuerpo from "./Cuerpo";
import Footer from "./Footer";
import NavBar from "./components/header/NavBar.jsx";
import CartWidget from "./components/header/CartWidget";
import Contenedor from "./components/contenedor/contenedor";
import ItemListContainer from "./components/items/ItemListContainer";
import ItemDetailContainer from "./components/items/ItemDetailContainer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <>
          <NavBar />
          <Contenedor greeting="Bienveniedo a Caro y Puro" />
          <Routes>
            <Route path="/categoria/:categoria" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          </Routes>
        </>
      </Router>
      <Header />
      <Cuerpo />
      <Footer />
    </>
  );
}

export default App;
