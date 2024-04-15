import React from "react";

const CartCard = ({
  item,
  handleRemoveItem,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  return (
    <div className="max-w-xs mx-auto mb-4">
      <div key={item.id} className="bg-white p-4 rounded-lg shadow-md">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-32 object-cover mb-2"
        />
        <div>
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">Price: ${item.price}</p>
          <p className="text-gray-600">Quantity: {item.quantity}</p>
          <div className="flex items-center mt-2">
            <button
              onClick={() => handleDecrementQuantity(item.id)}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg mr-2"
            >
              -
            </button>
            <button
              onClick={() => handleIncrementQuantity(item.id)}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg mr-2"
            >
              +
            </button>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
