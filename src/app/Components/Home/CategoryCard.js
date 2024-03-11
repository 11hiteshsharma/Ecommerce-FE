import Link from "next/link";
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const CardContainer = styled(motion.div)`
  position: relative;
  width: 275px !important;
  height: 275px !important;
  border-radius: 30px;
  overflow: hidden;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s ease;
  &:hover {
    scale: 1.1;
  }
`;

const CardText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: max-content;
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
  const { scrollYProgress } = useViewportScroll();

  // Define animation values based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1.2]);
  // const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <CardContainer style={{ opacity }}>
      <Link href={data.url}>
        <Image
          src={data.imageUrl}
          alt={data.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <CardText>{data.name}</CardText>
      </Link>
    </CardContainer>
  );
};

export default CategoryCard;
