import React, { useState } from "react";
import Header from "./Mainnavbar";
import Footer from "./Footer";

import Cartiteminfo from "./Cartiteminfo";





const Cart = () => {

  const [price, setPrice] = useState(0);



  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="py-4  sm:px-2 lg:px-2 mx-auto w-fit ">
          <h1 className="text-5xl font-bold text-black ">My Cart </h1>
          <div className="py-12 flex w-full ">
            <div className="space-y-[13px] mr-[39px]">
              <Cartiteminfo />
              <hr className=" border-black"/>
             
            </div>

            <div className=" w-auto h-fit  border-black border-4 rounded-lg">
              <h1 className="text-3xl font-bold text-black mt-20 mb-4 text-center">
                Order Summary
              </h1>
              <div className="mx-7">
                <div className="border-2 border-black w-80 h-auto rounded-lg ">
                  <div className="mx-3">
                    <p className="text-black mt-7 mb-5 ">
                      Subtotal: <b className="float-right">Rs. 95000</b>
                    </p>
                    <hr className="  border-black" />

                    <p className="text-black mb-5 mt-3">
                      Shipping Charges: <b className="float-right">Rs. 200</b>
                    </p>
                    <hr className=" border-black" />
                    <p className="text-black mb-5 mt-3">
                      Total Taxes: <b className="float-right">Rs. 5400</b>
                    </p>
                    <hr className=" border-black" />
                    <p className="text-black my-3">
                      Total Amount: <b className="float-right">Rs. {price}</b>
                    </p>
                  </div>
                </div>
                <div className="border-2 border-black w-80 h-auto mt-9 rounded-lg ">
                  <p
                    className="text-black ml-3 my-3 mr-2 overflow-clip
                  "
                  >
                    <b>Shipping address:</b> 123, ABC Street, XYZ City, 123456{" "}
                    <br />
                    <b>Contact Details:</b> 1234545678 <br />
                    <b>Delivery by:</b> 12th March, 2023
                  </p>
                </div>
                <button className="bg-green-600 w-80 h-12 rounded-xl  text-xl text-white font-bold mt-8 mb-24 ">
                  Proceed to payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
