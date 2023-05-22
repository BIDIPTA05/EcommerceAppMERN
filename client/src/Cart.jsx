import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

import { useEffect, useState } from "react";
import Header from "./Mainnavbar";
import Footer from "./Footer";


//navigation
import { useNavigate } from "react-router-dom";
import Address from "./Address";

export default function Example() {
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  const [products, setProducts] = useState([]);
  const API_BASE_URL = "http://localhost:4000";

  

  //get logedin usedid
  const userId = localStorage.getItem("userId");

  //address
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to the server
    fetch(`${API_BASE_URL}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(address),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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

  useEffect(() => {
    const totalPrice = products.reduce(
      (total, product) => total + product.price,
      0
    );
    setTotalPrice(totalPrice);
  }, [products]);

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
          <h1 className="text-5xl font-bold text-black  mb-10">My Cart </h1>
          <h1 className="text-2xl font-bold text-black  mb-10">
            Please login to view your wishlist
          </h1>
        </div>
      </div>
    );
  }
  const checkoutHandler = async (e) => {
    e.preventDefault();
    try {
      const key = "rzp_test_nT9c75B62QdPkY";
      console.log(address);
      console.log(products);
      console.log(localStorage.getItem("userId"));
      console.log(totalPrice * 100);

      const productArray = products.map((product) => {
        return {
          productId: product._id,
        };
      });

      console.log(productArray);

      const checkoutResponse = await fetch(
        "http://localhost:4000/api/checkout",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            total_amount: totalPrice * 100,
            userId: localStorage.getItem("userId"),
            address: address,
            products: productArray,
          }),
        }
      );

      const data = await checkoutResponse.json();
      console.log(data);
      const options = {
        key: key,
        amount: data.order.amount,
        currency: "INR",
        name: "Bidipta Saikia",
        description: "Ecom app payment",
        image: "https://avatars.githubusercontent.com/u/76623158?v=4",
        order_id: data.order.id,
        callback_url: "http://localhost:4000/api/verify",
        prefill: {
          name: "Bidipta Saikia",
          email: "bidipta.saikia@gmail.com",
          contact: "9876789876",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#528FF0",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header/>
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
                    Rs. {totalPrice.toFixed(2)}
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
                    Rs. 0.00
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
                    Rs. 0.00
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    Rs. {totalPrice.toFixed(2)}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                {/* <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  onClick={checkoutHandler}
                >
                  Checkout
                </button> */}
              </div>
            </section>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center h-screen  bg-white ">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl w-full mx-auto p-8 bg-white rounded-lg shadow-lg  "
        >
          <h1 className="text-4xl font-bold text-black  mb-10">
            Add Shipping Address Below{" "}
          </h1>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={address.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 bg-white text-black"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="street"
              className="block text-gray-700 font-medium mb-1"
            >
              Street Address
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={address.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 bg-white text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="city"
              className="block text-gray-700 font-medium mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 bg-white text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="state"
              className="block text-gray-700 font-medium mb-1"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={address.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 bg-white text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="zip"
              className="block text-gray-700 font-medium mb-1"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={address.zip}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 bg-white text-black"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="phone_number"
              className="block text-gray-700 font-medium mb-1"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={address.phone_number}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 bg-white text-black"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            onClick={checkoutHandler}
          >
            PROCEED TO PAYMENT
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}
