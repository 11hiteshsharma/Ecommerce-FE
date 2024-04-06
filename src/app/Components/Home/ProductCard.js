import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ title, image, price, id }) => {
  return (
    <Link href={`/products/${id}`}>
      <CardContainer className="h-full w-full max-w-[380px] max-h-[621px]">
        <ImageContainer className="relative w-full max-w-[380px] h-[532px] max-h-[532px]">
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="contain"
            className="h-full w-full aspect-[9/16]"
          />
        </ImageContainer>
        <BottomSection>
          <ProductName>{title}</ProductName>
          <Price>₹ {price}</Price>
        </BottomSection>
      </CardContainer>
    </Link>
  );
};

export default ProductCard;

const CardContainer = styled.div``;
const ImageContainer = styled.div``;
const Price = styled.div``;
const BottomSection = styled.div`
  text-align: center;
`;
const ProductName = styled.div``;
