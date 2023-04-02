import React, { useEffect } from "react";
import CategoryList from "../components/CategoryList";
import ProductList from "../components/ProductList";

function Products() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 p-4 grow">
      {" "}
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default Products;
