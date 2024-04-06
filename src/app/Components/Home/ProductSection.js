"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductSection = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="sm:px-[40] md:px-[80px] lg:px-[132px]">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center place-items-center">
        {data.map((card, index) => (
          <ProductCardContainer
            className="sm: w-full flex justify-center md:block"
            key={card.id}
          >
            <ProductCard
              id={card.id}
              image={card.image}
              price={card.price}
              title={card.title}
            />
          </ProductCardContainer>
        ))}
      </div>

      {!showMore && (
        <div className="flex justify-center">
          <button
            className="mt-4 bg-[#3c3633]  text-white font-[200] py-[14px] px-[22px] rounded-3xl"
            onClick={() => setShowMore(true)}
          >
            View All
          </button>
        </div>
      )}
      {showMore && (
        <div className="grid grid-cols-1 mt-[30px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-center place-items-center">
          {extraCards.map((card) => (
            <div
              className="sm: w-full flex justify-center md:block mt-[10px]"
              key={card.id}
            >
              <ProductCard />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSection;

const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: block !important;
    width: 100%;
  }
`;
