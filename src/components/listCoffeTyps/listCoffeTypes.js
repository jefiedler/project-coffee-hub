import { createElement } from "../../utils/elements";
import esspressoSrc from "../../assets/espresso.svg";
import cappuccinoSrc from "../../assets/cappuccino.svg";
import macchiatoSrc from "../../assets/macciato.svg";
import mochaSrc from "../../assets/mocha.svg";
import latteSrc from "../../assets/latte.svg";
import arrow from "../../assets/arrowright.svg";
import listCoffeTypsStories from "./listCoffeTyps.stories";

export function createList() {
  const coffeeType = [
    {
      name: "Espresso",
      imgSrc: esspressoSrc,
      imgClass: "img-coffesymbols",
      arrowSrc: arrow,
      arrowClass: "img-arrow",
    },
    {
      name: "Cappucino",
      imgSrc: cappuccinoSrc,
      imgClass: "img-coffesymbols",
      arrowSrc: arrow,
      arrowClass: "img-arrow",
    },
    {
      name: "Macchiato",
      imgSrc: macchiatoSrc,
      imgClass: "img-coffesymbols",
      arrowSrc: arrow,
      arrowClass: "img-arrow",
    },
    {
      name: "Mocha",
      imgSrc: mochaSrc,
      imgClass: "img-coffesymbols",
      arrowSrc: arrow,
      arrowClass: "img-arrow",
    },
    {
      name: "Latte",
      imgSrc: latteSrc,
      imgClass: "img-coffesymbols",
      arrowSrc: arrow,
      arrowClass: "img-arrow",
    },
  ];
  const list = createElement("ul");
  list.className = "list";

  coffeeType.forEach((coffees) => {
    const listItem = createElement("li");
    const coffeeImg = createElement("img", {
      src: coffees.imgSrc,
    });
    listItem.append(coffeeImg);
    coffeeImg.className = coffees.imgClass;

    const spanText = createElement("span", { innerText: coffees.name });
    listItem.append(spanText);

    const arrowIcon = createElement("img", { src: coffees.arrowSrc });
    arrowIcon.className = coffees.arrowClass;
    listItem.append(arrowIcon);

    list.append(listItem);
  });

  return list;
}
