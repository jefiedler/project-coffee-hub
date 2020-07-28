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
  addToCartButton.addEventListener("click", () => {
    alert("Add one Coffe to the cart!");
  });
  return addToCartButton;
};
