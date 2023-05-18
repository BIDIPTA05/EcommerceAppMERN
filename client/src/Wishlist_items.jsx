import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

export default function Example(props) {
  const [products, setProducts] = useState([]);
  const API_BASE_URL = "http://localhost:4000";

  //get logedin usedid
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function fetchWishlist() {
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
        setProducts(data.user.wishlist);
      } catch (error) {
        console.error(error);
      }
    }
    fetchWishlist();
  }, []);
  console.log(products);


  
  if (!products || (products.length === 0 && userId)) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-5xl font-bold text-black  mb-10">My Wishlist </h1>
          <h1 className="text-2xl font-bold text-black  mb-10">
            No items in wishlist
          </h1>
        </div>
      </div>
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

  //remove from wishlist
  const handleRemoveFromCart = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${API_BASE_URL}/users/wishlist/${itemId}`, {
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

  //move to cart
  const moveFromWishlistToCart = async (itemId) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      // Check if the user is logged in
      if (!token || !userId) {
        console.log("User not logged in");
        // Handle the case when the user is not logged in
        return;
      }

      const addToCartResponse = await fetch(
        `${API_BASE_URL}/users/cart/${itemId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userId,
            quantity: 1, // Set the desired quantity
          }),
        }
      );

      const addToCartData = await addToCartResponse.json();
      if (addToCartResponse.ok) {
        console.log("Item added to cart");
        // Handle the successful addition to cart

        // Remove the item from the wishlist only if it was successfully added to the cart
        const removeFromWishlistResponse = await fetch(
          `${API_BASE_URL}/users/wishlist/${itemId}`,
          {
            method: "DELETE",
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

        const removeFromWishlistData = await removeFromWishlistResponse.json();
        if (removeFromWishlistResponse.ok) {
          setProducts((prevProducts) =>
            prevProducts.filter((product) => product._id !== itemId)
          );
          console.log("Item moved to cart");
          alert("Item moved to cart");
          // Handle the successful removal from wishlist
        } else {
          console.log("Error removing item from wishlist");
          // Handle the error state for removing from wishlist
        }
      } else {
        alert("WARNING: ITEM ALREADY IN CART");
        // Handle the error state for adding to cart
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl font-bold text-black  mb-10">My Wishlist </h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products?.map((product, key) => (
            <a key={key} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.productImage}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}.
              </p>
              <div
                class="rating"
                style={{
                  marginTop: "10px",
                }}
              ></div>
              <br />

              <div className="flex space-x-10">
                <button
                  className="btn btn-accent"
                  onClick={() => moveFromWishlistToCart(product._id)}
                >
                  Move to Cart
                </button>

                <a onClick={() => handleRemoveFromCart(product._id)}>
                  <AiFillDelete className="text-2xl text-red-600 mt-2 " />
                </a>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
