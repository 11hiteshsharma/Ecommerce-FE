"use client";

import { setCartItems } from "@/lib/Features/Cart/cartSlice";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartPage from "../Components/Cart/CartPage";

const Cart = () => {
  const cartValue = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartValue.length !== 0) {
      localStorage.setItem("cart", JSON.stringify(cartValue));
    }
  }, [cartValue]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));

    console.log(cartData, "CartData");
    if (cartData) {
      dispatch(setCartItems(cartData));
    }
  }, []);

  return (
    <div>
      <CartPage />
    </div>
  );
};

export default Cart;
