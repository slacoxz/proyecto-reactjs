import React from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onChange }) => {
  const [quantity, setQuantity] = React.useState(initial);

  const handleIncrease = () => {
    if (quantity < stock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onChange(newQuantity); // Llamamos a la función pasada por props
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChange(newQuantity); // Llamamos a la función pasada por props
    }
  };

  return (
    <div className="item-count">
      <button onClick={handleDecrease} className="count-button">-</button>
      <span className="count-display">{quantity}</span>
      <button onClick={handleIncrease} className="count-button">+</button>
    </div>
  );
};

export default ItemCount;
