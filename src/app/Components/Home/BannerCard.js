import Image from "next/image";
import React from "react";
import styled from "styled-components";

const BannerCard = ({ data }) => {
  return (
    <div className="overflow-hidden relative">
      <Image
        className="w-full h-[850px] object-cover"
        src={data.img}
        alt=""
        height={850}
        width={1440}
        objectFit="cover"
      />

      <DetailsSection className="absolute bottom-[15%] left-[170px]">
        <Heading className="uppercase">{data.heading}</Heading>
        <SubHeading className="mt-5 lowercase">
          {data.subHeading}
          <span className="ml-5">
            <button className="capitalize py-[13px] px-6 border rounded-[35px] tracking-wider font-light">
              EXPLORE
            </button>
          </span>
        </SubHeading>
      </DetailsSection>
    </div>
  );
};

export default BannerCard;

const DetailsSection = styled.div``;
const Heading = styled.div`
  color: #fff;
  font-size: 70px;
  font-weight: 800;
  max-width: 400px;
  line-height: 63px;
  text-transform: uppercase;
`;
const SubHeading = styled.div`
  color: #fff;
`;
