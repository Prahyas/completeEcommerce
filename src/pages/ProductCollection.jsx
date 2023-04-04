import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ScrollToTop from "../components/Scrolltotop";
import { useLocation } from "react-router-dom";

const ProductCollection = () => {
  const [filters, setfilters] = useState({});
  const [sort, setsort] = useState("newest");
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    setfilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSort = (e) => {
    setsort(e.target.value);
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);
  useEffect(() => {
    console.log(sort);
  }, [sort]);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Announcement />
      <h1 className="title text-4xl p-8 capitalize">{cat}</h1>
      <div className="filterWrapper p-8 flex justify-between items-center flex-col md:flex-row gap-6">
        <div className="filter1 flex items-center gap-5 ">
          <p>Filter Products:</p>
          <select
            className="p-2 bg-transparent cursor-pointer border border-black"
            name="color"
            id=""
            defaultValue={`Select color`}
            onChange={handleFilters}
          >
            <option disabled>Select color</option>
            <option>black</option>
            <option>white</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select
            className="p-2 bg-transparent cursor-pointer border border-black"
            name="size"
            id=""
            defaultValue={`Select size`}
            onChange={handleFilters}
          >
            <option value="Select size" disabled>
              Select size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
        <div className="filter2 flex items-center gap-5">
          <p>Sort products:</p>
          <select
            className="p-2 bg-transparent cursor-pointer border border-black"
            name="sort"
            id=""
            defaultValue={`newest`}
            onChange={handleSort}
          >
            <option value="newest">Newest</option>
            <option value="asc">Price Asc</option>
            <option value="desc">Price Dsc</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />

      <Footer />
    </div>
  );
};

export default ProductCollection;
