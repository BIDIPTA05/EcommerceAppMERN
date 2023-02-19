import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const Cartiteminfo = () => {
  return (
    <>
      <div className="flex flex-grow">
        <img src="https://picsum.photos/254/253" alt="" className="w-64 h-64" />

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
          <button className="btn btn-warning mx-2 ">1 Offer Applied</button>
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
    </>
  );
}

export default Cartiteminfo;