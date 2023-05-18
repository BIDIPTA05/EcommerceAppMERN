import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import { useEffect, useState } from "react";
import Header from "./Mainnavbar";
import Footer from "./Footer";


export default function Example() {
  const [products, setProducts] = useState([]);
  const API_BASE_URL = "http://localhost:4000";

  //get logedin usedid
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchCart() {
      try {
        const token = localStorage.getItem("token");
        //save user if from local storage

        const response = await fetch(`${API_BASE_URL}/users/profile`, {
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
        console.log(response); // Check the response here

        const data = await response.json();
        console.log(data);
        setProducts(data.user.cart);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCart();
  }, []);
  console.log(products);

  //delete from cart
  const handleRemoveFromCart = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/users/cart/${itemId}`, {
        method: "DELETE",
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
        console.log("Item removed");
        const { success, message, user } = data;
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== itemId)
        );
        // Handle the response data as needed
        console.log(data);
      } else {
        // Item removal failed
        console.log("Error removing item");
        const { success, message, error } = data;
        // Handle the error message or error object
        console.error(message, error);
      }
    } catch (error) {
      // Error occurred during the request
      console.error("Error:", error);
    }
  };

  //no login
  if (!products || (products.length === 0 && userId)) {
    return (
      <>
        <Header />
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-5xl font-bold text-black  mb-10">
              Shopping Cart{" "}
            </h1>
            <h1 className="text-2xl font-bold text-black  mb-10">
              No items in cart
            </h1>
          </div>
        </div>
        <Footer />
      </>
    );
    //if no user is logged in
  } else if (!userId) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-5xl font-bold text-black  mb-10">My Wishlist </h1>
          <h1 className="text-2xl font-bold text-black  mb-10">
            Please login to view your wishlist
          </h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-5xl font-bold text-black  mb-10">
            Shopping Cart{" "}
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="cart-heading" className="sr-only">
                Items in your shopping cart
              </h2>

              <ul
                role="list"
                className="divide-y divide-gray-200 border-b border-t border-gray-200"
              >
                {products.map((product) => (
                  <li key={product._id} className="flex py-6 sm:py-10">
                    <div className="flex-shrink-0">
                      <img
                        src={product.productImage}
                        alt={product.imageAlt}
                        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                      <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href={product.href}
                                className="text-xl text-gray-700 hover:text-gray-800"
                              >
                                <b className="text-black">{product.name}</b>
                              </a>
                            </h3>
                          </div>
                          <div className="mt-1 flex text-sm">
                            <p className="text-gray-500">{product.color}</p>
                            {product.size ? (
                              <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                                {product.size}
                              </p>
                            ) : null}
                          </div>
                          <p className="mt-1 text-lg font-medium text-gray-900">
                            Rs. {product.price}
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 sm:pr-9">
                          <div className="absolute right-0 top-0">
                            <button
                              type="button"
                              className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">Remove</span>
                              <a>
                                <XMarkIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                  onClick={() =>
                                    handleRemoveFromCart(product._id)
                                  }
                                />
                              </a>
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                        {product.inStock ? (
                          <CheckIcon
                            className="h-5 w-5 flex-shrink-0 text-green-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <ClockIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-300"
                            aria-hidden="true"
                          />
                        )}

                        <p>In Stock</p>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Order summary */}
            <section
              aria-labelledby="summary-heading"
              className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
            >
              <h2
                id="summary-heading"
                className="text-lg font-medium text-gray-900"
              >
                Order summary
              </h2>

              <dl className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-sm text-gray-600">Subtotal</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    Rs. 999099.00
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex items-center text-sm text-gray-600">
                    <span>Shipping estimate</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how shipping is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    Rs. 50.00
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="flex text-sm text-gray-600">
                    <span>Tax estimate</span>
                    <a
                      href="#"
                      className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">
                        Learn more about how tax is calculated
                      </span>
                      <QuestionMarkCircleIcon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </a>
                  </dt>
                  <dd className="text-sm font-medium text-gray-900">
                    Rs. 800.32
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    Rs. 1120000.32
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Checkout
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
