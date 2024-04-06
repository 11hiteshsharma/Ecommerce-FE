"use client";
import React from "react";
import ProductDetailsCarousel from "./ProductDetailsCarousel";
import ProductDetails from "./ProductDetails";

const SingleProductPage = ({ data }) => {
  console.log(data, "hello");
  return (
    <div className="flex px-10 gap-8">
      <ProductDetailsCarousel image={data.image} />
      <div className="w-full">
        <ProductDetails title={data.title} description={data.description} />
      </div>
    </div>
  );
};

export default SingleProductPage;
