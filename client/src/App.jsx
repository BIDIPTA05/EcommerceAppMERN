import React from "react";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import Nextpage from "./Nextpage";
import Error from "./Error";
import Item_category from "./Item_Caterogy";
import Cart from "./Cart";
import Wishlist from "./Wishlist";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/products" element={<Nextpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* <Route path="/products/smartphones" element={<Mobiles />} />
          <Route path="/products/laptops" element={<Laptops />} />
          <Route path="/products/accessories" element={<Accessories />} /> */}

          <Route path={`/products/:id`} element={<Item_category />} />

          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;