import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const ProductDetailsCarousel = ({ image }) => {
  const images = [
    {
      id: 1,
      url: image,
    },
    {
      id: 3,
      url: image,
    },
    {
      id: 4,
      url: image,
    },
    {
      id: 5,
      url: image,
    },
  ];

  useEffect(() => {
    const thumbsElement = document.querySelector(".thumbs.animated");

    console.log(thumbsElement);
    if (thumbsElement) {
      thumbsElement.style.display = "flex";
      thumbsElement.style.flexDirection = "column";
      thumbsElement.style.gap = "15px";
    }
  }, []);

  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel flex flex-row-reverse"
      >
        {images.map((img) => (
          <img
            key={img?.id}
            src={img?.url}
            alt=""
            className="mix-blend-multiply"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
