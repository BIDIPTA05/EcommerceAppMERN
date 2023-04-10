import { React, useState } from "react";

export const RANGE_MAPPER = {
  below_20: (price) => price < 20000,
  between_20_50: (price) => price >= 20000 && price <= 50000,
  above_50: (price) => price >= 50000,
};

const SORT_DIRECTIONS = {
  ASC: "asc",
  DESC: "desc",
};

const Sortnfilter = ({ products, setProducts }) => {
  //sort
  const sort = (e) => {
    const value = e.target.value;
    let sortedProducts = [...products];

    if (value === SORT_DIRECTIONS.ASC) {
      setProducts(sortedProducts.sort((a, b) => a.price - b.price));
    } else if (value === SORT_DIRECTIONS.DESC) {
      setProducts(sortedProducts.sort((a, b) => b.price - a.price));
    }
  };

  //filter
  const filter = (e) => {
    const value = e.target.value;
    let filteredProducts = [...products];

    const rangeFn = RANGE_MAPPER[value];

    if (!rangeFn) {
      setProducts(filteredProducts);
    }
    setProducts(filteredProducts.filter((product) => rangeFn(product.price)));
  };
  return (
    <>
      <form>
        <div className=" text-2xl mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <h2 className="pb-3 text-black">Sort and filter products: </h2>

          <select
            className="select select-warning w-full max-w-xs  bg-stone-300 text-black border-none mr-8 mb-4"
            name="sort"
            onChange={sort}
          >
            <option disabled selected>
              <h1>Sort By</h1>
            </option>
            <option disabled></option>
            <option value="relevance">Relevance</option>
            <option disabled></option>
            <option value={SORT_DIRECTIONS.ASC}> Price-Low to High</option>
            <option disabled></option>
            <option value={SORT_DIRECTIONS.DESC}>Price-High to Low</option>
            <option disabled></option>
          </select>
          <select
            className="select select-warning w-full max-w-xs bg-stone-300 text-black border-none"
            onChange={filter}
          >
            <option disabled selected>
              <h1>Price Range</h1>
            </option>
            <option disabled></option>
            <option value="below_20">Rs.0-Rs.20000</option>
            <option disabled></option>
            <option value="between_20_50">Rs.20000-Rs.50000</option>
            <option disabled></option>
            <option value="above_50">Above Rs.50000</option>
            <option disabled></option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Sortnfilter;
