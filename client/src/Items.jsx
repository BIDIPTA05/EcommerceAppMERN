import { React, useState, useEffect } from "react";
import Sort from "./Sortnfilter";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Items(props) {
  const [products, setProducts] = useState([]);

  const API_BASE_URL = "http://localhost:4000";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const productsData = await response.json();
        const products = productsData.products; // define products variable here
        setProducts(products); // set products state here
        console.log(products);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  //add to wishlist
  const handleAddToWishlist = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/users/wishlist/${itemId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          id: localStorage.getItem("userId"),
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Item added");
        alert("Item added to wishlist");
        const { success, message, user } = data;
        // Handle the response data as needed
      } else {
        console.log("Item already added");
        alert("WARNING: Item already in wishlist");
        const { error } = data;
        // Handle the error state here
      }
    } catch (error) {
      console.error(error);
    }
  };

  //add to cart
  const handleAddToCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (!token || !userId) {
        alert("Please login to add to cart");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/users/cart/${productId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.success) {
          console.log("Product added to cart");
          const { success, message, user } = data;
          // Handle the response data as needed
        } else {
          console.log("Product already in cart");
          const { success, message } = data;
          // Handle the case when the product is already in the cart
        }
      } else {
        alert("Product already in cart");
        const { error } = data;
        // Handle the error state here
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            <a key={product._id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <Link to={`/${product._id}`}>
                  <img
                    src={product.productImage}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    crossOrigin="anonymous"
                  />
                </Link>
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
              <div className="flex space-x-10">
                <button
                  className="btn btn-accent"
                  onClick={() => handleAddToCart(product._id, 1)}
                >
                  Add to Cart
                </button>

                <a onClick={() => handleAddToWishlist(product._id)}>
                  <AiFillHeart className="text-4xl text-pink-400 mt-2 " />
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
