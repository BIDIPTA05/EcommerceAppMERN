import { useState, useEffect } from "react";
import { Disclosure, RadioGroup, Tab } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import Header from "./Mainnavbar";
import Footer from "./Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const userId = localStorage.getItem("userId");
  const [product, setProducts] = useState({});
  const { productId } = useParams();
  const API_BASE_URL = "http://localhost:4000";

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}`);
        const productsData = await response.json();
        const product = productsData; // define products variable here
        setProducts(product); // set products state here
        console.log(product);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);

  //   if (!product || (product.length === 0 && userId)) {
  //     return (
  //       <>
  //         <div className="bg-white">
  //           <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
  //             <h1 className="text-5xl font-bold text-black  mb-10">
  //               My Wishlist{" "}
  //             </h1>
  //             <h1 className="text-2xl font-bold text-black  mb-10">
  //               No items in wishlist
  //             </h1>
  //           </div>
  //         </div>
  //       </>
  //     );
  //   }

  //move to cart
  const handleMoveToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (!token || !userId) {
        alert("Please login to add to wishlist");
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
          quantity: 1,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Item added to cart");
        alert("Item added to cart");
        const { success, message, user } = data;

        // Handle the response data as needed
      } else {
        console.log("Item already added");
        alert("WARNING: Item already in cart");
        const { error } = data;
        // Handle the error state here
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred during adding to cart.");
    }
  };

  //add to wishlist
  const handleAddToWishlist = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      if (!token || !userId) {
        alert("Please login to add to wishlist");
        return;
      }
      const response = await fetch(
        `${API_BASE_URL}/users/wishlist/${productId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        if (data.success) {
          console.log("Item added to wishlist");
          alert("Item added to wishlist");
          const { success, message, user } = data;

          // Handle the response data as needed
        } else {
          console.log("Item already added");
          alert("WARNING: Item already in wishlist");
          const { error } = data;
          // Handle the error state here
        }
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred during adding to wishlist.");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}

            <div className="mx-auto mt-6  w-full max-w-2xl sm:block lg:max-w-none">
              <img
                src={product?.product?.productImage}
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {product?.product?.name}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  Rs. {product?.product?.price}
                </p>
              </div>

              {/* Reviews */}
              <div className="mt-3">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product?.product?.rating > rating
                            ? "text-indigo-500"
                            : "text-gray-300",
                          "h-5 w-5 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">
                    {product?.product?.rating} out of 5 stars
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>

                <div
                  className="space-y-6 text-base text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: product?.product?.description,
                  }}
                />
              </div>

              <form className="mt-6">
                <div className="sm:flex-col1 mt-10 flex">
                  <button
                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white   hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                    onClick={() => handleMoveToCart()}
                  >
                    Add to bag
                  </button>

                  <button
                    type="button"
                    className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                    onClick={() => handleAddToWishlist()}
                  >
                    <HeartIcon
                      className="h-6 w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Add to Wishlist</span>
                  </button>
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>

                <div className="divide-y divide-gray-200 border-t">
                  <Disclosure as="div" key={product?.product?.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? "text-indigo-600" : "text-gray-900",
                                "text-sm font-medium"
                              )}
                            >
                              <p className="text-xl">Addition Information</p>
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6 text-black"
                        >
                          <li>14 DAYS RETURN POLICY FOR ALL ORDER</li>
                          <li>FREE SHIPPING ON ORDERS OVER RS. 1000</li>
                          <li>CASH ON DELIVERY AVAILABLE</li>
                          <li>100% SECURE CHECKOUT</li>
                          <li>
                            FAST AND RELIABLE DELIVERY WITH SECURE PACKING
                          </li>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
