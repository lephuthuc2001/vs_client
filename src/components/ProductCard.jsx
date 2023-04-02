import React from "react";
import * as lodash from "lodash";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCartStore from "../store/cart";

function ProductCard({ title, description, imgSrc, price, id }) {
  const navigate = useNavigate("");
  const { isAuthenticated } = useAuth();

  const addToCart = useCartStore((state) => state.addToCart);

  const { items, totalQuantity, totalPrice } = useCartStore(
    (state) => state.cart
  );

  const isInCart = lodash.find(items, { productId: id });

  return (
    <a
      className="w-72 h-auto cursor-pointer group flex flex-col border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition "
      onClick={(e) => {
        const target = lodash.lowerCase(e.target.tagName);
        if (target !== "button" && target !== "svg" && target !== "path") {
          navigate(`/products/${id}`, {
            state: { title, description, price, imgSrc },
          });
        }
      }}
    >
      <div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
        <img
          className="w-full h-auto absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
          src={imgSrc}
          alt="Image Description"
        />
      </div>
      <div className="p-4 md:p-5">
        <div className="flex flex-row justify-between align-baseline">
          {" "}
          <h3 className="text-base overflow-hidden">
            {lodash.truncate(title, { length: 30 })}
          </h3>
        </div>
        <div className="mt-2 flex flex-row justify-between items-center">
          <p className="font-bold">
            {lodash.round(parseInt(price) / 1000)}.000 VND
          </p>
          {isInCart && isAuthenticated && (
            <div className="badge badge-info badge-md">Already in cart!</div>
          )}
          {(!isAuthenticated || !isInCart) && (
            <button
              className="btn btn-primary btn-sm z-20"
              // data-hs-overlay={
              //   isAuthenticated ? "" : "#hs-vertically-centered-modal"
              // }
              data-hs-overlay={
                isAuthenticated ? "" : "#hs-vertically-centered-modal"
              }
              onClick={(e) => {
                if (isAuthenticated) e.stopPropagation();
                addToCart(id, price);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </a>
  );
}

export default ProductCard;
