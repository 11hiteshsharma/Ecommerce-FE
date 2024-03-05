import React from "react";
import BannerSlider from "./Banner";
import CategoriesCards from "./CategorySection";
import VideoContainer from "./VideoContainer";

const HomePage = () => {
  return (
    <div>
      <div className="">
        <BannerSlider />
      </div>

      <div className="p-[90px] relative">
        <CategoriesCards />
      </div>

      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default HomePage;
