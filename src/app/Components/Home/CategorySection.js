// CategoriesCards.jsx
import React from "react";
import CategoryCard from "./CategoryCard";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoriesCards = () => {
  function slugify(text) {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[\s\W-]+/g, "-") // Replace spaces, non-word characters and dashes with a single dash (-)
      .replace(/-$/, ""); // Remove trailing dashes
  }

  const productCategories = [
    {
      name: "T-Shirt",
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/category/" + slugify("T-Shirt"),
    },
    {
      name: "Jeans",
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/9775479/pexels-photo-9775479.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/category/" + slugify("Jeans"),
    },
    {
      name: "Shirt",
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/4925720/pexels-photo-4925720.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/category/" + slugify("Shirt"),
    },
    {
      name: "Caps",
      id: 4,
      imageUrl:
        "https://images.pexels.com/photos/4061670/pexels-photo-4061670.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/category/" + slugify("Caps"),
    },
    {
      name: "Dresses",
      id: 5,
      imageUrl:
        "https://images.pexels.com/photos/10545235/pexels-photo-10545235.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/category/" + slugify("Dresses"),
    },
    {
      name: "Sweaters",
      id: 6,
      imageUrl:
        "https://images.pexels.com/photos/6328569/pexels-photo-6328569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      url: "/category/" + slugify("Sweaters"),
    },
    {
      name: "Shorts",
      id: 7,
      imageUrl:
        "https://images.pexels.com/photos/9741904/pexels-photo-9741904.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/category/" + slugify("Shorts"),
    },
    {
      name: "Jackets",
      id: 8,
      imageUrl:
        "https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/category/" + slugify("Jackets"),
    },
  ];

  return (
    <Container className>
      {productCategories.map((card) => (
        <CategoryCard data={card} key={card.id} />
      ))}
    </Container>
  );
};

export default CategoriesCards;
