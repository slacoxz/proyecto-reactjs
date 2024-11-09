import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart /> <span>3</span> {/* Número de productos en el carrito */}
    </div>
  );
};

export default CartWidget;
