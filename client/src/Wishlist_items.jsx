import { AiFillDelete } from "react-icons/ai";
import Wishlist from "./Wishlist";

const products = [
  {
    id: 1,
    name: "iPhone 14",
    price: 50000,
    imageSrc: "https://www.linkpicture.com/q/ip13.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "iPhone 14 pro",
    price: 45999,
    imageSrc: "https://www.linkpicture.com/q/ip14.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "iPhone 12",
    price: 79999,
    imageSrc: "https://www.linkpicture.com/q/ip12.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "iPhone 14 plus",
    price: 85990,
    imageSrc: "https://www.linkpicture.com/q/ipp14.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "iPhone 14",
    price: 37999,
    imageSrc: "https://www.linkpicture.com/q/ip13.jpeg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
];

export default function Example(props) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-5xl font-bold text-black  mb-10">My Wishlist </h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
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
                <button className="btn btn-accent"  onClick={() => props.handleClick(product)}>
                  Move to Cart
                </button>

                <a>
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
