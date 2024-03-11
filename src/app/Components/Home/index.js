import React from "react";
import BannerSlider from "./Banner";
import CategoriesCards from "./CategorySection";
import VideoContainer from "./VideoContainer";
import ProductSection from "./ProductSection";

const HomePage = () => {
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

      <div className="p-[90px]">
        <ProductSection />
      </div>
    </div>
  );
};

export default HomePage;
