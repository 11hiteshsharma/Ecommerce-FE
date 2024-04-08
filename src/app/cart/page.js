"use client";

import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartValue = useSelector((state) => state.cart.cartItems);
  console.log(cartValue);
  return <div>Cart</div>;
};

export default Cart;
