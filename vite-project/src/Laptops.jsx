import React from "react";
import Header from "./Mainnavbar";
import Sort from "./Sortnfilter";
import Footer from "./Footer";
import Cart from "./Cart";

const Laptops = () => {
  return (
    <>
      <Header />
      <Sort />

      <Cart label="Laptops" />
      <Footer />
    </>
  );
};

export default Laptops;
