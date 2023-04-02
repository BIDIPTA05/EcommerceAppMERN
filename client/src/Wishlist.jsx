import React, { useState } from "react";
import Wishlistitem from "./Wishlist_items";
import Footer from "./Footer";
import Navbar from "./Mainnavbar";
import { useParams } from "react-router-dom";

//testing
const Wishlist = () => {

  const { id } = useParams();

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    let isPresent = false;
    cart.forEach((products) => {
      if (product.id === products.id) isPresent = true;
    });
    if (isPresent) {
      alert("Product already added to cart");
      return;
    }
    setCart([...cart, product]);

    console.log(cart);
  };

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      <Wishlistitem label={id} handleClick={handleClick} />
      <Footer />
    </>
  );
};

export default Wishlist;
