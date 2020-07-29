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
    type: "button",
  });
  // Generate Minus img
  const minusImage = createElement("img", {
    src: minusSrc,
    als: "Minus",
  });

  // lode minus img in minusButton

  minusButton.append(minusImage);

  // Generate Result output

  const quantityResult = createElement("input", {
    className: "quantitySelector__input",
    value: "1",
    type: "number",
    min: 0,
    max: 10,
    name: "quantity",
  });

  // Generate PlusButton

  const plusButton = createElement("button", {
    className: "btn__plus",
    type: "button",
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
    const oldQuantity = Number(quantityResult.value);
    if (oldQuantity === 1) {
      minusButton.disabled = true;
    }
    if (oldQuantity === 10) {
      plusButton.disabled = false;
    }
    quantityResult.value = oldQuantity - 1;
  });

  plusButton.addEventListener("click", () => {
    const oldQuantity = Number(quantityResult.value);
    if (oldQuantity >= 0) {
      minusButton.disabled = false;
    }
    if (oldQuantity === 9) {
      plusButton.disabled = true;
    }
    quantityResult.value = oldQuantity + 1;
  });

  return quantitySelector;
};
