import minusSrc from "../../assets/minusPlusSVG/mnius.svg";
import plusSrc from "../../assets/minusPlusSVG/plus.svg";
import { createElement } from "../../utils/elements";

export const createQuantitySelector = () => {
  // Ganerate outerDiv
  const quantitySelector = createElement("div", {
    className: "quantitySelector",
  });
  // Ganerate minus Button
  const minusButton = createElement("button", {
    className: "btn__minus",
    disabled: true,
  });
  // Generate Minus img
  const minusImage = createElement("img", {
    src: minusSrc,
    als: "Minus",
  });

  // lode minus img in minusButton

  minusButton.append(minusImage);

  // Generate Result output

  const quantityResult = createElement("div", {
    className: "quantity",
    innerText: "0",
  });

  // Generate PlusButton

  const plusButton = createElement("button", {
    className: "btn__plus",
  });

  // Generate Plus img

  const plusImg = createElement("img", {
    src: plusSrc,
    alt: "Plus",
  });

  // Load Plus img in PlusButton
  plusButton.append(plusImg);

  // Load PlusButton, MinusButton and quantityResult in quantitySelector

  quantitySelector.append(minusButton);
  quantitySelector.append(quantityResult);
  quantitySelector.append(plusButton);

  // Add effentListener

  minusButton.addEventListener("click", () => {
    const oldQuantity = Number(quantityResult.innerHTML);
    if (oldQuantity === 1) {
      minusButton.disabled = true;
    }
    quantityResult.innerHTML = oldQuantity - 1;
  });

  plusButton.addEventListener("click", () => {
    const oldQuantity = Number(quantityResult.innerHTML);
    if (oldQuantity >= 0) {
      minusButton.disabled = false;
    }
    quantityResult.innerHTML = oldQuantity + 1;
  });

  return quantitySelector;
};
