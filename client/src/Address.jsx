import React, { useState } from "react";
import Header from "./Mainnavbar";
import Footer from "./Footer";

const AddressForm = () => {
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
    fetch("http://example.com/submit-address", {
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

  //payment
  const checkoutHandler = async (totalPrice) => {
    try {
      const key = "rzp_test_6JQqZ0Q4QX0Q0j";

      const checkoutResponse = await fetch(
        "http://localhost:4000/api/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: totalPrice,
          }),
        }
      );
      const { order } = await checkoutResponse.json();

      const options = {
        key: key,
        amount: order.amount,
        currency: "INR",
        name: "Bidipta Saikia",
        description: "Ecom app payment",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
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
      <Header />
      <div className="flex justify-center items-center h-screen  bg-white">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl w-full mx-auto p-8 bg-white rounded-lg shadow-lg  "
        >
          <h1 className="text-4xl font-bold text-black  mb-10">
            Add Shipping Address{" "}
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
};

export default AddressForm;
