import React from "react";
import { categories } from "../data";
import CategoriesItems from "./CategoriesItems";
const Categories = () => {
  return (
    <div>
      <h1 className="text-center text-3xl text-semibold mt-10 mb-5">
        Categories
      </h1>
      <div className="flex justify-between flex-col sm:flex-row gap-2 p-5 flex-wrap">
        {categories.map((item) => (
          <CategoriesItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
