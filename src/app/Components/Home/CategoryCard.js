// CategoryCard.jsx
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  max-width: 275px;
  height: 275px;
  border-radius: 30px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardText = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 800;
`;

const CategoryCard = ({ data }) => {
  return (
    <CardContainer>
      <Link href={data.url}>
        <Image src={data.imageUrl} alt={data.name} />
        <CardText>{data.name}</CardText>
      </Link>
    </CardContainer>
  );
};

export default CategoryCard;
