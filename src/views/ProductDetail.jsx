import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import BreadCrums from "../components/BreadCrums";

const ProductDetail = ({ onAddToCart }) => {
  const { productId } = useParams();

  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const { title, description, imgSrc, price } = location.state;

  return (
    <>
      <BreadCrums
        pages={[{ name: "Product", link: "/products" }, { name: title }]}
      />
      <div className="flex flex-col items-center justify-center h-full">
        <div className="max-w-lg w-full rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                className="w-full h-64 object-cover"
                src={imgSrc}
                alt={title}
              />
            </div>
            <div className="md:w-1/2 px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-800">{title}</h2>
                <span className="text-sm font-medium text-gray-500">
                  ${price}
                </span>
              </div>
              <p className="text-gray-700 text-base">{description}</p>
              <div className="flex items-center justify-end mt-4">
                <button
                  data-hs-overlay={
                    isAuthenticated ? "" : "#hs-vertically-centered-modal"
                  }
                  className="btn btn-primary btn-outline"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
