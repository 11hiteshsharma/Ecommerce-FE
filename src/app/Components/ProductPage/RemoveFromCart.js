import React from "react";

const RemoveFromCart = ({ onClick }) => {
  return (
    <div className="flex items-center justify-start mt-5">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default RemoveFromCart;
