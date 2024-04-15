"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCarousel from "./ProductDetailsCarousel";
import ProductDetails from "./ProductDetails";
import {
  addToCart,
  removeFromCart,
} from "../../../lib/Features/Cart/cartSlice";
import AddCartButton from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";

const SingleProductPage = ({ data }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const isInCart = cartItems.some((item) => item.id === data.id);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.title,
        price: data.price,
        quantity: 1,
        image: data.image,
      })
    );
  };

  const handleRemoveFromCart = () => {
    dispatch(
      removeFromCart({
        id: data.id,
      })
    );
  };
  return (
    <div className="flex px-10 gap-8">
      <ProductDetailsCarousel image={data.image} />
      <div className="w-full">
        <ProductDetails title={data.title} description={data.description} />
        {isInCart ? (
          <RemoveFromCart onClick={handleRemoveFromCart} />
        ) : (
          <AddCartButton onClick={handleAddToCart} />
        )}
      </div>
    </div>
  );
};

export default SingleProductPage;
