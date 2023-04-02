import React, { useEffect } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";
import useProductStore from "../store/product";
import Spinner from "../components/Spinner";
function Products() {
  // const isLoading = useProductStore((state) => state.isLoading);

  // if (isLoading) {
  //   return <Spinner />;
  // }
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 grow">
      {" "}
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default Products;
