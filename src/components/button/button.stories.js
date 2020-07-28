import "./button.css";

export default { title: "Button" };

function createButton(buttonText) {
  const button = document.createElement("button");
  button.classList.add("btn");
  const text = document.createTextNode(buttonText);
  button.append(text);
  return button;
}

export const addToCart = () => {
  const addToCartButton = createButton("Add to cart");
  return addToCartButton;
};
