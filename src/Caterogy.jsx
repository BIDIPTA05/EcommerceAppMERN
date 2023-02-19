import React from "react";
import { callouts } from "./Nextpage";
import { useParams } from "react-router-dom";
import Header from "./Mainnavbar";
import Footer from "./Footer";
import Sort from "./Sortnfilter";
import Cart from "./Cart";

const Caterogy = () => {
  const { id } = useParams();

  const callout = callouts.find((callout) => callout.id === id);
  console.log(callout);

  return (
    <>
      <Header />
      <Sort />

      <Cart label={id} />

      <Footer />
    </>
  );
};
export default Caterogy;
