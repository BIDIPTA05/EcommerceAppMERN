import React from "react";

const Sortnfilter = () => {
  return (
    <>
      <div className=" text-2xl mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="pb-3 text-black">Sort and filter products: </h2>
        <select className="select select-warning w-full max-w-xs  bg-stone-300 text-black border-none mr-8 mb-4">
          <option disabled selected>
            <h1>Sort By</h1>
          </option>
          <option value="#" disabled></option>
          <option>Relevance</option>
          <option value="#" disabled></option>
          <option>Price-Low to High</option>
          <option value="#" disabled></option>
          <option>Price-High to Low</option>
          <option value="#" disabled></option>
        </select>
        <select className="select select-warning w-full max-w-xs bg-stone-300 text-black border-none">
          <option disabled selected>
            <h1>Price Range</h1>
          </option>
          <option value="#" disabled></option>
          <option>Rs.0-Rs.20000</option>
          <option value="#" disabled></option>
          <option value="">Rs.20000-Rs.50000</option>
          <option value="#" disabled></option>
          <option value="">Above Rs.50000</option>
          <option value="#" disabled></option>
        </select>
      </div>
    </>
  );
};

export default Sortnfilter;
