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
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const CardText = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 800;
  &:hover::before {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
  }
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
