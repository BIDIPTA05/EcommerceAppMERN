import { React, useState } from "react";
import { Products } from "./Products";
import Sort from "./Sortnfilter";

export default function Items(props) {
  console.log({ Products });
  const [products, setProducts] = useState(Products);

  

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <img
          src="https://www.linkpicture.com/q/highest-spender-offer-d_1.jpg"
          type="image"
          className=""
        />
        <Sort products={products} setProducts={setProducts} />
        <h2 className="sr-only">Products</h2>
        <h1 className=" pb-10 text-4xl">{props.label} </h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-xl  text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                <b> Rs. {product.price}</b>
              </p>
              <div
                className="rating"
                style={{
                  marginTop: "10px",
                }}
              >
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <br />
              <button
                className="btn btn-primary    "
                style={{
                  background: "#2ba3e3",
                  border: "none",
                  marginTop: "10px",
                }}
              >
                Buy Now
              </button>{" "}
              <button
                className="btn btn-accent"
                onClick={() => props.handleClick(product)}
              >
                Add to Cart
              </button>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
