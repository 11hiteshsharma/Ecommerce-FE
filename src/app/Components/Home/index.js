"use client";
import React from "react";
import BannerSlider from "./Banner";
import CategoriesCards from "./CategorySection";
import VideoContainer from "./VideoContainer";
import ProductSection from "./ProductSection";

const HomePage = ({ data }) => {
  return (
    <div>
      <div className="">
        <BannerSlider />
      </div>

      <div className="p-[90px] relative">
        <CategoriesCards />
      </div>

      <div className="pt-[50px]">
        <VideoContainer />
      </div>

      <div className="pt-[90px]">
        <ProductSection data={data} />
      </div>
    </div>
  );
};

export default HomePage;
