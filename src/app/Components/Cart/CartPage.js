import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RemoveFromCart from "../ProductPage/RemoveFromCart";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/lib/Features/Cart/cartSlice";
import CartCard from "./CartCard";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity({ id: itemId }));
  };

  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity({ id: itemId }));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Cart Items</h1>

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <CartCard
              item={item}
              handleRemoveItem={handleRemoveItem}
              handleIncrementQuantity={handleIncrementQuantity}
              handleDecrementQuantity={handleDecrementQuantity}
            />
          ))}
        </div>
      ) : (
        <div>There are no items added in your cart</div>
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 border-t pt-4">
          <h2 className="text-xl font-semibold">Summary</h2>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
