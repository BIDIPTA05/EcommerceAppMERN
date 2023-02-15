import React from "react";
import Header from "./Mainnavbar";
import Sort from "./Sortnfilter";
import Footer from "./Footer";
import Cart from "./Cart";

const Accessories = () => {
  return (
    <>
      <Header />
      <Sort />

      <Cart label="Accessories" />
      <Footer />
    </>
  );
};

export default Accessories;
