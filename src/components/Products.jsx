import React, { useEffect } from "react";
import { popularProducts } from "../data";
import ProductItem from "./ProductItem";
import axios from "axios";
import { useState } from "react";

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        cat
          ? `https://complete-ecommerce-back.onrender.com/api/products?category=${cat}`
          : `https://complete-ecommerce-back.onrender.com/api/products`
      );
      // const res = await axios.get(
      //   cat
      //     ? `http://localhost:5000/api/products?category=${cat}`
      //     : `http://localhost:5000/api/products`
      // );
      setProducts(res.data);
    };
    getProducts();
    console.log(products);
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilteredProducts(
        products.filter((item) => {
          return Object.entries(filters).every(([key, value]) => {
            return Array.isArray(item[key])
              ? item[key].includes(value)
              : item[key] === value;
          });
        })
      );
  }, [products, cat, filters, sort]);

  useEffect(() => {
    if (sort === "newest") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    }
    if (sort === "asc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    }
    if (sort === "desc") {
      setfilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [products, cat, filters, sort]);

  return (
    <div>
      {!cat && (
        <h1 className="text-center text-3xl text-semibold mt-10 mb-5">
          Products
        </h1>
      )}

      <div className="flex flex-col sm:flex-row gap-2 p-5 flex-wrap">
        {cat
          ? filteredProducts.map((item) => (
              <ProductItem key={item.id} item={item} />
            ))
          : products
              .slice(0, 8)
              .map((item) => <ProductItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Products;
