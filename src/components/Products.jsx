import React from "react";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="flex justify-between gap-2 p-5 flex-wrap">
      {popularProducts.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Products;
