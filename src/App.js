import React, { useState } from "react";
import './App.css'
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Course from "./components/Course/Course";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/Pages/About";
import Support from "./components/Pages/Support";
import MainImg from "./components/Layout/MainImg";
import Contact from "./components/Pages/Contact";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <MainImg/>
        <main>
          <Course />
        </main>
        <Footer />
      </CartProvider>
      }/>
      <Route path="/aboutus" element={<About/>} />
      <Route path="/support" element={<Support/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
