import { createElement } from "../../utils/elements";

export function createList() {
  const coffeeType = ["Espresso", "Cappucino", "Macchiato", "Mocha", "Latte"];
  const list = createElement("ul");

  coffeeType.forEach((coffees) => {
    const listItem = createElement("li", { innerText: coffees });
    list.append(listItem);
  });

  return list;
}
