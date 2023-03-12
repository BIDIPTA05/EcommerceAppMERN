import React from 'react'
import Header from "./Mainnavbar";
import Footer from "./Footer";



const Error = () => {
  return (
    <>
      <Header />
      <div className="text-center text-4xl font-bold py-5  ">
        <h1>404 Error</h1>
        <h2>Page Not Found</h2>
      </div>
      <Footer />
    </>
  );
}

export default Error