import React from "react";
import Header from "./Mainnavbar";
import Footer from "./Footer";
import { AiFillDelete } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Cartitem = () => {
  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="py-4  sm:px-2 lg:px-2 mx-14">
          <h1 className="text-5xl font-bold text-black">Your Cart </h1>
          <div className="py-12 flex w-full">
            <div className="flex flex-grow">
              <img src="https://picsum.photos/254/253" alt="" className="w-64 h-64"/>

              <div className="ml-12">
                <h1 className="text-2xl font-bold text-black">Backpack</h1>
                <h1 className="text-xl font-bold text-black mt-2 ">
                  Nike Backpack 28 Litre (Black)
                </h1>
                <p className="text-black mt-2">
                  Size: <b>40L</b>{" "}
                </p>
                <p className="text-black">
                  Color: <b>Black</b>{" "}
                </p>
                <p className="text-green-500 mt-2">In stock </p>
                <button className="btn btn-info mt-2">Free Shipping</button>
                <button className="btn btn-warning mx-2 ">
                  1 Offer Applied
                </button>
              </div>

              <div>
                <div className="mt-2 mb-2 ml-20">
                  <button className="border-black border-2  text-black  bg-white w-12 h-10 rounded-l-3xl">
                    -
                  </button>
                  <button className=" border-black  border-t-2 border-b-2  bg-white-600 text-black w-12 h-10">
                    1
                  </button>

                  <button className="border-black border-2 bg-white  w-12 h-10 text-black rounded-r-3xl">
                    +
                  </button>
                </div>

                <div className="ml-20 mt-8">
                  <p className="text-black text-2xl ">
                    <b>Rs. 2000</b>{" "}
                  </p>
                  <div className="flex space-x-10">
                    <a href="">
                      <AiFillHeart className="text-2xl text-pink-400 mt-2 " />
                    </a>
                    <a href="">
                      
                      <AiFillDelete className="text-2xl text-red-600 mt-2 " />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" w-auto h-auto  border-black border-4 rounded-lg">
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
                      Total Amount: <b className="float-right">Rs. 100600</b>
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
                    <b >Delivery by:</b> 12th March, 2023
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

export default Cartitem;
