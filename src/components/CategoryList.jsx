import React from "react";
import Category from "./Category";
import useProductStore from "../store/product";
import lodash from "lodash";

const categories = Object.values(
  import.meta.glob("../assets/*.svg", { eager: true })
).map(function (category) {
  const newCate = {
    imgSrc: category.default,
    name: category.default.substring(12).split(".")[0],
  };
  return newCate;
});

function CategoryList() {
  const currentCategory = useProductStore((state) => state.currentCategory);

  const getProducts = useProductStore((state) => state.getProducts);
  const isActive = lodash.lowerCase(currentCategory) === "all";

  const active =
    "outline-none ring-2 ring-primary  ring-offset-2 bg-primary text-primary-content";

  let btnClass =
    "text-xl mb-3 py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-base-300 font-semibold text-primary hover:text-white hover:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary hover:text-primary-content  focus:ring-offset-2 focus:bg-primary  transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500";

  if (isActive) {
    btnClass += active;
  }
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <button
        onClick={() => {
          getProducts();
        }}
        type="button"
        className={btnClass}
      >
        All
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="mask mask-squircle lg:w-10 md:w-8 sm:w-7 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
          />
        </svg>
      </button>
      <div className="card flex flex-row flex-wrap w-full items-center self-start justify-center gap-5">
        {categories.map((category) => (
          <Category
            key={Math.random().toString(36).substring(5)}
            name={category.name}
            imgSrc={category.imgSrc}
            isActive={category.isActive}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
