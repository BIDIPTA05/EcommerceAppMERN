import React from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Nextpage from "./Nextpage";
import Error from "./Error";
import Caterogy from "./Caterogy";
import Cartitem from "./Cartitem";
import Wishlist from "./Wishlist";




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products" element={<Nextpage />} />
          <Route path="/cart" element={<Cartitem />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* <Route path="/products/smartphones" element={<Mobiles />} />
          <Route path="/products/laptops" element={<Laptops />} />
          <Route path="/products/accessories" element={<Accessories />} /> */}

          <Route path={`/products/:id`} element={<Caterogy />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
