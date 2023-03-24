import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";

const ProductCollection = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="title text-4xl p-8">Dresses</h1>
      <div className="filterWrapper p-8 flex justify-between items-center">
        <div className="filter1 flex items-center gap-5 ">
          <p>Filter Products:</p>
          <select
            className="p-2 bg-transparent cursor-pointer border border-black"
            name="filterSelect1"
            id=""
          >
            <option value="" selected disabled>
              Select color
            </option>
            <option value="">Black</option>
            <option value="">White</option>
            <option value="">Red</option>
            <option value="">Blue</option>
            <option value="">Yellow</option>
            <option value="">Green</option>
          </select>
          <select
            className="p-2 bg-transparent cursor-pointer border border-black"
            name="filterSelect2"
            id=""
          >
            <option value="" selected disabled>
              Select size
            </option>
            <option value="">XS</option>
            <option value="">S</option>
            <option value="">M</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XXL</option>
          </select>
        </div>
        <div className="filter2 flex items-center gap-5">
          <p>Sort products:</p>
          <select
            className="p-2 bg-transparent cursor-pointer border border-black"
            name="filterSelect2"
            id=""
          >
            <option value="" selected disabled>
              Select option
            </option>
            <option value="">Newest</option>
            <option value="">Price Asc</option>
            <option value="">Price Dsc</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default ProductCollection;
