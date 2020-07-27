import "./quantitySelector.css";
import quantitySelector from "./quantitySelector.html";
import { useEffect } from "@storybook/client-api";

export default { title: "Quantity Selector" };

export const coffeeSelector = () => {
  useEffect(() => {
    const buttonPlus = document.querySelector(".btn__plus");
    const quantity = document.querySelector(".quantity");
    const buttonMinus = document.querySelector(".btn__minus");

    buttonPlus.addEventListener("click", () => {
      const oldQuantity = Number(quantity.innerHTML);
      if (oldQuantity >= 0) {
        buttonMinus.disabled = false;
      }
      quantity.innerHTML = oldQuantity + 1;
    });
    buttonMinus.addEventListener("click", () => {
      const oldQuantity = Number(quantity.innerHTML);
      if (oldQuantity === 1) {
        buttonMinus.disabled = true;
      }
      quantity.innerHTML = oldQuantity - 1;
    });
  });

  return quantitySelector;
};
