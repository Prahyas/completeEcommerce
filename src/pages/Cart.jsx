import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import ecomLogo from "../assets/favicon.png";
import { userRequest } from "../axiosRequests";
import { Link, useHistory } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeProduct,
} from "../redux/cartRedux";

const Cart = () => {
  const history = useHistory();
  const KEY = import.meta.env.VITE_STRIPE_KEY;

  const [stripeToken, setstripeToken] = useState(null);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const onToken = (token) => {
    setstripeToken(token);
  };

  console.log(stripeToken);

  useEffect(() => {
    const makeRequestStripe = async () => {
      try {
        const res = await userRequest.post(`checkout/payment`, {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        history.push("/success", {
          stripeData: res.data,
          productCollection: cart,
        });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequestStripe();
  }, [stripeToken, cart.total, history]);

  console.log(stripeToken);

  return (
    <div>
      <Navbar />
      <Announcement />
      <div className="wrapper min-h-[85vh] p-5">
        <h1 className="font-semibold text-center text-2xl mb-5"> Your cart</h1>
        <div className="top flex items-center justify-between">
          <Link to={"/"}>
            <button
              className="flex gap-2 p-2 text-md bg-transparent cursor-pointer border border-black
          "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>

              <span>Continue shopping</span>
            </button>
          </Link>
        </div>

        <div className="bottom mt-5 flex flex-col lg:flex-row gap-5 justify-between">
          <div className="info flex-1 lg:flex-[3_3_0%]">
            {cart.products?.map((item) => (
              <div>
                <div className="product flex flex-col md:flex-row justify-between gap-8 ">
                  <div className="productDetail flex-[2_2_0%] flex ">
                    <div className="w-44 h-44">
                      <img
                        className="w-full h-full object-contain"
                        src={item.img}
                        alt=""
                      />
                    </div>
                    <div className="details text-lg p-5 flex flex-col gap-3 justify-center">
                      <span>
                        <strong>{item.title}</strong>
                      </span>
                      {/* <span>
                        <strong>ID</strong> : {item._id}
                      </span> */}
                      <div className="flex gap-5">
                        <button
                          style={{ backgroundColor: item.color }}
                          className={`w-8 h-8 cursor-pointer border-2 border-black`}
                        ></button>

                        <button className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black">
                          {item.size}
                        </button>
                      </div>
                      <span>${item.price}</span>
                    </div>
                  </div>

                  <div className="priceDetails flex-1 flex flex-row justify-center items-center gap-12">
                    <div className="quantity flex items-center gap-3">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item._id))}
                        className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item._id))}
                        className="w-8 h-8  text-sm bg-transparent cursor-pointer border-2 border-black"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-2xl font-medium">
                      ${item.price * item.quantity}
                    </p>
                    <button onClick={() => dispatch(removeProduct(item._id))}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <hr className="w-full h-[1px] my-5 bg-black border-0 opacity-10" />
              </div>
            ))}

            {cart.products.length === 0 &&
            cart.quantity === 0 &&
            cart.total === 0 ? (
              <p className="text-4xl text-center">Your cart is empty</p>
            ) : null}
          </div>
          <div
            className={`${
              cart.products.length === 0 &&
              cart.quantity === 0 &&
              cart.total === 0
                ? `hidden`
                : null
            } summary min-h-auto  flex-1 p-5 border-black border-2 space-y-8 border-opacity-10`}
          >
            <h1 className="text-4xl font-medium">Order Summary</h1>
            <div className="summaryItem flex justify-between">
              <span>Subtotal </span>
              <span>${cart.total} </span>
            </div>
            <div className="summaryItem flex justify-between">
              <span>Estimated Shipping </span>
              <span>$10 </span>
            </div>
            <div className="summaryItem flex justify-between">
              <span>Shipping discount </span>
              <span>$10 </span>
            </div>
            <div className="summaryItem flex justify-between text-xl">
              <span className="font-semibold">Total </span>
              <span>${cart.total} </span>
            </div>
            <div>
              <StripeCheckout
                name="Ecommerce"
                image={ecomLogo}
                billingAddress
                shippingAddress
                description={`Your total is $${cart.total}`}
                amount={cart.total * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button
                  className="w-full p-2 text-md bg-black text-white cursor-pointer border border-black
              "
                >
                  Checkout
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
