import Image from "next/image";
import React from "react";
import styled from "styled-components";

const BannerCard = ({ data }) => {
  return (
    <CardContainer className="overflow-hidden relative">
      <Image
        src={data.img}
        alt=""
        height={850}
        width={1440}
        objectFit="cover"
        className="sm:w-full h-[580px] md:h-[450px] lg:h-[850px] object-cover"
      />
      <DetailsSection className="sm: absolute left-[20px] md:left-[80px] bottom-[15%] lg:left-[170px]">
        <Heading className="sm:text-[60px] uppercase md:text-[70px]">{data.heading}</Heading>
        <SubHeading className="sm:flex flex-col gap-3 mt-5 lowercase md:block">
          {data.subHeading}
          <span className="sm:ml-3 md:ml-5 ">
            <button className="capitalize py-[13px] px-6 border rounded-[35px] tracking-wider font-light text-color">
              EXPLORE
            </button>
          </span>
        </SubHeading>
      </DetailsSection>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const DetailsSection = styled.div`
  position: absolute;
  bottom: 15%;
 @media(max-width > 768px){
  left : 40px;
 }
`;

const Heading = styled.div`
  color: #fff;
  font-weight: 800;
  max-width: 400px;
  line-height: 63px;
  text-transform: uppercase;

    @media (max-width: 640px) {
    font-size: 50px;
  }
`;


const SubHeading = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    margin-left: 3px;
  }

  @media (min-width: 768px) {
    margin-left: 5px;
  }

  span {
    margin-left: 3px;
    @media (min-width: 768px) {
      margin-left: 5px;
    }
  }

  button {
    text-transform: capitalize;
    padding: 10px 15px;
    border: 1px solid #fff;
    border-radius: 35px;
    font-weight: lighter;
    color: #fff;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

export default BannerCard;
