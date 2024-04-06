import React from "react";

const ProductDetails = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="">{description}</p>
    </div>
  );
};

export default ProductDetails;
