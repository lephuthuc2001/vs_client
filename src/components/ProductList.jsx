import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import useProductStore from "../store/product";
import * as lodash from "lodash";

function ProductList() {
  const {
    products,
    getProducts,
    currentCategory,
    currentProductPerPage,
    updateCurrentProductPerPage,
  } = useProductStore();

  const isProductsLeft = products.length > currentProductPerPage;

  useEffect(() => {
    getProducts();
  }, []);

  const loadMoreHandler = () => {
    updateCurrentProductPerPage(currentProductPerPage + 8);
  };

  return (
    <div className="flex flex-col gap-2 m-2">
      {" "}
      <div className="font-extrabold text-2xl text-primary prose">
        {lodash.startCase(currentCategory)}
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-7 place-items-center">
        {products.slice(0, currentProductPerPage).map((product) => (
          <ProductCard
            key={product._id}
            title={product.name}
            description={product.description}
            imgSrc={product.image}
            price={product.price}
            id={product._id}
          />
        ))}
      </div>
      {isProductsLeft && (
        <button onClick={loadMoreHandler} className="btn btn-ghost ">
          Xem thêm...
        </button>
      )}
    </div>
  );
}

export default ProductList;
