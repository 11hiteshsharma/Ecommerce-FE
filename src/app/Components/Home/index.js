import React from "react";
import BannerSlider from "./Banner";
import CategoriesCards from "./CategorySection";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <BannerSlider />
      </div>

      <div className="px-20 relative">
        <CategoriesCards/>
      </div>
    </div>
  );
};

export default HomePage;
