import "./detailsPage.css";
import { createButton } from "../../components/button/button";
import { createElement } from "../../utils/elements";
import { createQuantitySelector } from "../../components/quantitySelector/quantitySelector";
import macchiatoSrc from "../../assets/detailsPage/macciato.svg";

export default { title: "Pages/Details" };

export const detailesPage = () => {
  // Generate main-Tag
  const main = createElement("main", { className: "details" });

  // Generate header-Tag in main-Tag
  const header = createElement("header", { className: "details__header" });

  // Generate titel and append header-Tag
  const titel = createElement("h2", { innerText: "Macchiato" });
  header.append(titel);

  // Generate img for header-Tag and append in header-Tag
  const macchiatoImg = createElement("img", {
    src: macchiatoSrc,
    alt: "Macchiato",
  });
  header.append(macchiatoImg);

  // Form-Section of main-Tag

  // Generate form-Tag for main-Tag
  const form = createElement("form", { className: "details__form" });

  // Generate Price of coffeeType
  const coffeeType = createElement("div", {
    className: "details__form-coffeeType",
    innerText: "Macchiato",
  });
  const coffeePrice = createElement("div", {
    className: "details__form-coffeePrice",
    innerText: "$ 2.80",
  });
  coffeeType.append(coffeePrice);
  form.append(coffeeType);

  // Generate quantiySelector for form-Tag and append to form-tag
  const divQuantitySelector = createElement("div", {
    className: "details__form-quantitySelector",
  });
  const quantitySelector = createQuantitySelector();
  divQuantitySelector.append(quantitySelector);
  form.append(divQuantitySelector);

  // Generate coffe size
  const coffeeSize = createElement("label", {
    className: "details__form-coffeeSizeLabel",
    innerText: "Size",
  });
  const size = createElement("input");
  coffeeSize.append(size);
  form.append(coffeeSize);

  //Generate suggar value
  const coffeeSugar = createElement("label", {
    className: "details__form-coffeeSugarLabel",
    innerText: "Sugar",
  });
  const sugar = createElement("input");
  coffeeSugar.append(sugar);
  form.append(coffeeSugar);

  // Generate add to cart button for form-Tag and append to form-tag
  const divAddToCartButton = createElement("div", {
    className: "details__form-addToCartButton",
  });
  const addToCartButton = createButton("Add to cart");
  divAddToCartButton.append(addToCartButton);
  form.append(divAddToCartButton);

  main.append(header);
  main.append(form);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    // List key/value pairs https://javascript.info/formdata
    for (let [name, value] of formData) {
      console.log(`${name} = ${value}`); // key1=value1, then key2=value2
    }
    alert("form submitted. see console for values");
  });

  return main;
};
