import React from "react";
import Header from "./Mainnavbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const Navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="hero min-h-screen bg-white">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold">
              Sale of the day! iPhone at lowest price of the year{" "}
            </h1>
            
            <img
              src="https://www.linkpicture.com/q/Laptops_1500_520_1105._CB588432905.jpg"
              alt=""
            />
            <img src="https://www.linkpicture.com/q/img_30.png" alt="" />
            <p className="py-6">
              Mobile phones are no more merely a part of our lives. Whether it's
              to stay connected with friends and family or to keep abreast of
              important developments around the world, mobiles are no longer for
              sending a text or making a call. From budget to state-of-the-art
              smartphones; indigenous names to global big-wigs - a whole
              universe of mobiles await you on Flipkart
            </p>
            <button
              onClick={() => Navigate("/products")}
              className="btn btn-primary"
              style={{
                background: "#2ba3e3",
                color: "white",
                border: "none",
              }}
            >
              get started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Landing;
