import "./quantitySelector.css";
import { createQuantitySelector } from "./quantitySelector.js";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  const quantetySelector = createQuantitySelector();

  return quantetySelector;
};
