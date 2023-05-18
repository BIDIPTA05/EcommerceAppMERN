import { useState, useEffect } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ size }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setLoggedIn(false);
  }

  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-base-200 shadow p-5">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <h2
              className="text-2xl font-bold text-white hover:text-blue-600 cursor-pointer"
              style={{ display: "flex" }}
              onClick={() => navigate("/")}
            >
              TechVariable eCom
            </h2>

            <div className="md:hidden">
              <button
                className="p-2 text-blue-600 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className="text-white hover:text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <li className="text-white hover:text-blue-600">
                <a href="javascript:void(0)">About Us</a>
              </li>
              <li className="text-white hover:text-blue-600">
                <a href="javascript:void(0)">Contact Us</a>
              </li>
              <li>
                <Link navigate to="/wishlist">
                  {" "}
                  <BsFillBookmarkHeartFill className="text-3xl text-pink-500" />{" "}
                </Link>
              </li>
              <li className="text-white hover:text-blue-600">
                <a href="#">
                  <div className="indicator ">
                    <span className="indicator-item badge badge-secondary bg-red-600 border-white  ">
                      {size}
                    </span>
                    <Link navigate to="/cart">
                      <BsFillCartPlusFill className="text-3xl text-white" />
                    </Link>
                  </div>
                </a>
              </li>

              <div>
                {loggedIn ? (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn m-1 bg-purple-800 text-white"
                    >
                      WELCOME
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-purple-400 rounded-box w-52 text-white "
                    >
                      <li>
                        <a className="b-3">My Account</a>
                      </li>
                      <li>
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <li>
                    <button
                      onClick={() => navigate("/login")}
                      className="btn"
                      style={{
                        background: "#2ba3e3",
                        color: "white",
                        border: "none",
                      }}
                    >
                      Login Or Register
                    </button>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
