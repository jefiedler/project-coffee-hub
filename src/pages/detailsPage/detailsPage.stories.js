import "./detailsPage.css";
import { createButton } from "../../components/button/button";

export default { title: "Pages/Details" };

export const addToCart = () => {
  const addToCartButton = createButton("Add to cart");
  addToCartButton.addEventListener("click", () => {
    alert("Add one Coffe to the cart!");
  });
  return addToCartButton;
};
