// CategoriesCards.jsx
import React from 'react';
import CategoryCard from './CategoryCard';
import styled from 'styled-components';

const Container = styled.div`
position:relative;
  display: flex;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
  justify-content:center;
`;

const CategoriesCards = () => {
  function slugify(text) {
    return text.toString().toLowerCase().trim()
      .replace(/&/g, '-and-')         // Replace & with 'and'
      .replace(/[\s\W-]+/g, '-')      // Replace spaces, non-word characters and dashes with a single dash (-)
      .replace(/-$/, '');             // Remove trailing dashes
  }

  const imageUrl = 'https://images.pexels.com/photos/5102908/pexels-photo-5102908.jpeg?auto=compress&cs=tinysrgb&w=600';

  const productCategories = [
    { name: 'T-Shirt', id: 1, imageUrl, url: '/category/' + slugify('T-Shirt') },
    { name: 'Jeans', id: 2, imageUrl, url: '/category/' + slugify('Jeans') },
    { name: 'Shirt', id: 3, imageUrl, url: '/category/' + slugify('Shirt') },
    { name: 'Caps', id: 4, imageUrl, url: '/category/' + slugify('Caps') },
    { name: 'Dresses', id: 5, imageUrl, url: '/category/' + slugify('Dresses') },
    { name: 'Sweaters', id: 6, imageUrl, url: '/category/' + slugify('Sweaters') },
    { name: 'Shorts', id: 7, imageUrl, url: '/category/' + slugify('Shorts') },
    { name: 'Jackets', id: 8, imageUrl, url: '/category/' + slugify('Jackets') }
  ];

  return (
    <Container>
      {productCategories.map((card) => (
        <CategoryCard data={card} key={card.id} />
      ))}
    </Container>
  );
}

export default CategoriesCards;
