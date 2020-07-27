// import { document } from "global";
import { useEffect } from "@storybook/client-api";

export default {
  title: "Pages/Details",
};

export const basic = () => {
  useEffect(() => {
    // Storybook und React spezifisch
    const button = document.querySelector(".btn"); // Einlesen des button durch querySelector und speichern in der const button
    button.addEventListener("click", () => {
      // Hinzufügen eines Events (addEventListener("click"...)) wenn geklickt wir, () => {} ruft funktion auf
      alert(button.innerHTML); // button.innerHTML liest den Content des <> ... </> aus und gibt ihn aus.
      button.innerHTML = "Test";
    });
  });
  return "<button class='btn'>Hallo Fische</button>";
};

// Calls internal alert function
/* auch ein Kommentar, kann aber ueber mehrer zeilen gehen */
// let message = "Hallo Fische";

// alert(message);

// alert("Hallo World");

// const numberOfStudents = 15;
// const massage = `Hallo ${numberOfStudents} fishes`;

// alert(massage);
