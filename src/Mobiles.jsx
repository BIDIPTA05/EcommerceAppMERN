import React from 'react'
import Header from './Mainnavbar'
import Sort from './Sortnfilter'
import Footer from './Footer'
import Cart from './Cart'

const Mobiles = () => {
  return (
    <>
      <Header />
      <Sort />

      <Cart label="Smartphones" />
      <Footer />
    </>
  );
}

export default Mobiles