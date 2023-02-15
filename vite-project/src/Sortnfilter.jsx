import React from "react";

const Sortnfilter = () => {
  return (
    <>
      <div className=" text-2xl mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="pb-3">Sort and filter products: </h2>
        <select className="select select-warning w-full max-w-xs ">
          <option disabled selected>
            <h1>Sort By</h1>
          </option>
          <option>Relevance</option>
          <option>Low to high</option>
          <option>High to low</option>
        </select>{" "}
        <select className="select select-warning w-full max-w-xs">
          <option disabled selected>
            <h1>Availability</h1>
          </option>
          <option>Exclude Out of Stock</option>
        </select>
      </div>
    </>
  );
};

export default Sortnfilter;
