/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const randomValue = arr => Math.floor(Math.random() * arr.length);
const cardValue = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const suit = ["♦", "♥", "♠", "♣"];
window.onload = function() {
  //write your code here
  let valueElement = document.querySelector("#cardValue");
  valueElement.innerHTML = cardValue[randomValue(cardValue)];
  let suitElement = document.querySelectorAll(".suit");
  let selectedSuit = suit[randomValue(suit)];
  if (selectedSuit == "♦" || selectedSuit == "♥") {
    suitElement.forEach(element => {
      element.classList.add("text-danger");
    });
  }
  suitElement.forEach(element => {
    element.innerHTML = selectedSuit;
  });
};
