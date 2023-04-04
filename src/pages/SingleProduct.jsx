import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ScrollToTop from "../components/Scrolltotop";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../axiosRequests";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const SingleProduct = () => {
  const location = useLocation();
  const prodId = location.pathname.split("/")[2];
  console.log(prodId);

  const [singleProduct, setsingleProduct] = useState({});
  const sizeOrder = { S: 1, M: 2, L: 3, XL: 4, XXL: 5 };
  const newSizeOrder = singleProduct.size?.sort((a, b) => {
    if (sizeOrder[a] && sizeOrder[b]) {
      return sizeOrder[a] - sizeOrder[b];
    } else if (sizeOrder[a]) {
      return -1;
    } else if (sizeOrder[b]) {
      return 1;
    } else {
      return 0;
    }
  });

  const [quantity, setquantity] = useState(1);
  const [size, setsize] = useState("");
  const [color, setcolor] = useState("");
  const dispatch = useDispatch();

  const handlequantity = (type) => {
    type === "increase"
      ? setquantity((quantity) => quantity + 1)
      : quantity > 1 && setquantity((quantity) => quantity - 1);
  };

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const res = await publicRequest.get(`products/find/${prodId}`);
        setsingleProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getSingleProduct();
  }, [prodId]);

  const handleSubmit = () => {
    dispatch(
      addProduct({
        ...singleProduct,
        quantity,
        color,
        size,
      })
    );
  };

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Announcement />
      <div className="wrapper flex h-auto lg:h-[85vh] p-5">
        <div className="slide w-screen h-full flex flex-col md:flex-row gap-8 items-center">
          <div className="imgContainer flex-1 h-full flex justify-center">
            <img
              className="h-full w-full object-contain"
              src={singleProduct.img}
              alt="sliderImage"
            />
            
          </div>
          <div className="infoContainer max-h-full flex-1 space-y-8 sm:p-5">
            <h1 className="text-4xl">{singleProduct.title}</h1>
            <p className="text-lg font-medium ">{singleProduct.desc}</p>
            <h1 className="text-4xl">${singleProduct.price}</h1>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 items-center justify-between">
                <span>Color:</span>
                <div className="flex space-x-2">
                  {singleProduct.color?.map((item) => (
                    <button
                      onClick={() => setcolor(item)}
                      key={item}
                      style={{ backgroundColor: item }}
                      className={`w-8 h-8 cursor-pointer border-2 border-black`}
                    ></button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 items-center justify-between">
                <span>Sizes: </span>
                <div className="flex space-x-2">
                  {newSizeOrder?.map((item) => (
                    <button
                      onClick={() => setsize(item)}
                      key={item}
                      className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span>Quantity: </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handlequantity("decrease")}
                  className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black"
                >
                  -
                </button>
                {quantity}
                <button
                  onClick={() => handlequantity("increase")}
                  className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              className="w-full p-3 text-xl bg-transparent cursor-pointer border border-black
              "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default SingleProduct;
