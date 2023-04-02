import React from "react";
import lodash from "lodash";
import useProductStore from "../store/product";
function Category({ name, imgSrc }) {
  const getProducts = useProductStore((state) => state.getProducts);

  const currentCategory = useProductStore((state) => state.currentCategory);

  const isActive = lodash.lowerCase(currentCategory) === lodash.lowerCase(name);

  const active = " outline-none ring-2 ring-primary  ring-offset-2 bg-primary ";
  let btnClass =
    "py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-base-300 font-semibold text-primary hover:text-white hover:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary  focus:ring-offset-2 focus:bg-primary  transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500";

  if (isActive) {
    btnClass += active;
  }
  return (
    <button
      type="button"
      onClick={() => {
        getProducts(name);
      }}
      className={btnClass}
    >
      <img
        className="mask mask-squircle lg:w-18 md:w-16 sm:w-14 w-12"
        src={imgSrc}
        alt={lodash.startCase(name)}
      />
    </button>
  );
}

export default Category;
