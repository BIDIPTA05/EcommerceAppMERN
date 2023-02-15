import React from "react";
import Nav from "./Mainnavbar";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";

const callouts = [
  {
    id: "smartphones",
    name: "Smart Phones",
    description: "Wide range of phone from multi brands.",
    imageSrc: "https://www.linkpicture.com/q/iphone_buy_chvehwtfgamq_og.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    id: "laptops",
    name: "Laptops",
    description: "Shop with us with wide range of laptop collection.",
    imageSrc: "https://www.linkpicture.com/q/laptop.jpeg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Daily commute essentials, find all kinds of accessories here",
    imageSrc: "https://www.linkpicture.com/q/sony_1.jpeg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const Nextpage = () => {
  const Navigate = useNavigate();

  return (
    <>
      <Nav />

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-20 lg:max-w-none lg:py-15">
            <h2 className="text-xl font-bold text-gray-900">
              Discount from banking partners
            </h2>

            <div className="mt-3 space-y-12 lg:grid lg:grid-cols-1 lg:gap-x-6 lg:space-y-0">
              <img
                src="https://www.linkpicture.com/q/Screenshot-2023-02-13-at-10.14.40-PM.png"
                alt=""
              />
              <img
                src="https://www.linkpicture.com/q/macbook-air.jpg"
                alt=""
                className="pt-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-4">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 ">
              {callouts.map((callout) => (
                <div
                  key={callout.name}
                  className="group relative "
                  onClick={() => {
                    Navigate("products/{callout.id}");
                  }}
                >
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 ">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a  >
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Nextpage;
