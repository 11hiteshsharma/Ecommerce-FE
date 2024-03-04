// CategoryCard.jsx
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  max-width: 275px;
  max-height: 275px;

`;

const CardText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 8px;
  width: 100%;
  text-align: center;
`;

const CategoryCard = ({ data }) => {
  return (
    <CardContainer>
      <Image src={data.imageUrl} alt={data.name} className='relative' width={275} height={275}/>
      <CardText>{data.name}</CardText>
    </CardContainer>
  );
};

export default CategoryCard;
