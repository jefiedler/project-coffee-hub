import "./button.css";
import { createButton } from "./button";

export default { title: "Button" };

export const addToCart = () => {
  const addToCartButton = createButton("Add to cart");
  addToCartButton.addEventListener("click", () => {
    alert("Add one Coffe to the cart!");
  });
  return addToCartButton;
};
