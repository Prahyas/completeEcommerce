import React from "react";
import { categories } from "../data";
import CategoriesItems from "./CategoriesItems";
const Categories = () => {
  return (
    <div className="flex justify-between flex-col sm:flex-row gap-5 p-5">
      {categories.map((item) => (
        <CategoriesItems key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categories;
