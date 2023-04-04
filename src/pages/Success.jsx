import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { userRequest } from "../axiosRequests";
import { useDispatch } from "react-redux";
import { resetCart } from "../redux/cartRedux";

const Success = () => {
  const location = useLocation();
  console.log("locationdata", location.state);
  const data = location.state.stripeData;
  const cart = location.state.productCollection;
  const [orderId, setOrderId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          // userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
        dispatch(resetCart());
      } catch (error) {
        console.log(error);
      }
    };
    data && createOrder();
  }, [cart, data]);

  return (
    <div className="h-screen md:h-screen w-full py-20 bg-black flex justify-center items-center ">
      <div className="wrapper lg:min-w-[60vw] md:w-[60vh] h-auto p-10 w-3/4 bg-white rounded space-y-7">
        <h1 className="p-4 text-2xl font-semibold text-center border-b-[1px] border-opacity-30 border-black">
          Order Successful
        </h1>
        <div className="space-y-5" action="">
          <p className="text-xl text-center">{`Order has been created successfully. Your order number is ${orderId}`}</p>
          <div>
            <Link to={`/`}>
              <button
                className="p-3 text-xl bg-black text-white w-full cursor-pointer border border-black
              "
              >
                Continue shopping...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
