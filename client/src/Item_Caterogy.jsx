import React,{useState} from "react";
import { callouts } from "./Nextpage";
import { useParams } from "react-router-dom";
import Header from "./Mainnavbar";
import Footer from "./Footer";
import Sort from "./Sortnfilter";
import Items from "./Items";

const Item_category = () => {
  const { id } = useParams();

  const callout = callouts.find((callout) => callout.id === id);
  // console.log(callout);

    const [cart, setCart] = useState([]);

    const handleClick = (product) => {
      let isPresent = false;
      cart.forEach((products) => {
        if (product.id === products.id)
          isPresent = true;
      })
      if (isPresent){
        alert("Product already added to cart");
        return;
      }
      setCart([...cart, product]);
       
      console.log(cart);
    };
  
  
  

  return (
    <>
      <Header size={cart.length} />
      <Sort />

      <Items label={id} handleClick={ handleClick} />

      <Footer />
    </>
  );
};
export default Item_category;
