import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerCard from "./BannerCard";
import styled from "styled-components";

function BannerSlider() {
  const bannerData = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Wardrobe Essentials",
      subHeading: "must have solids",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Wardrobe Essentials",
      subHeading: "must have solids",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/10679171/pexels-photo-10679171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      heading: "Wardrobe Essentials",
      subHeading: "must have solids",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    // cssEase: "linear",
  };
  return (
    <SliderContainer className="slider-container h-[850px]">
      <Slider {...settings}>
        {bannerData.map((data) => (
          <BannerCard key={data.id} data={data} />
        ))}
      </Slider>
    </SliderContainer>
  );
}

export default BannerSlider;

const SliderContainer = styled.div`
  .slick-track {
    height: 100%;
  }
  .slick-dots {
    bottom: 20px;
    li {
      margin: 0;
    }
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
    font-size: 10px;
  }
`;
