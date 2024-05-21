"use strict";

// Array con oggetti
const fontAwesomeImages = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animal",
    family: "fas",
    color: "blue",
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "vegetable",
    family: "fas",
    color: "green",
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "orange",
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "orange",
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "orange",
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas",
    color: "orange",
  },
];

// Funzioni di utility
function elementCreation(element) {
  const elementCreated = document.createElement(element);
  return elementCreated;
}

// Elemento HTML e aggiungo classe
let col = document.querySelector(".col");
col.classList.add("d-flex");

/* Ciclo su array, creo elementi HTMl e aggiungo classi, proprietà e value,
  e appendo in pagina */
for (let i = 0; i < fontAwesomeImages.length; i++) {
  const iconsFamily = fontAwesomeImages[i].family;
  const iconsPrefix = fontAwesomeImages[i].prefix;
  const iconsName = fontAwesomeImages[i].name;
  const span = elementCreation("span");
  span.innerText = fontAwesomeImages[i].name.toUpperCase();
  let div = elementCreation("div");
  div.classList.add("col-20");
  if (fontAwesomeImages[i].color === "blue") {
    div.setAttribute("value", "blue");
  } else if (fontAwesomeImages[i].color === "green") {
    div.setAttribute("value", "green");
  } else {
    div.setAttribute("value", "orange");
  }
  let iContainer = elementCreation("div");
  let fontAwesomeI = elementCreation("i");
  fontAwesomeI.style.color = fontAwesomeImages[i].color;
  fontAwesomeI.classList.add(iconsFamily, `${iconsPrefix}${iconsName}`);
  iContainer.append(fontAwesomeI);
  div.append(iContainer, span);
  col.append(div);
}

// Creazione elementi options in elemento section
let selectContainer = document.getElementById("colors");
for (let i = 0; i <= 3; i++) {
  let option = elementCreation("option");
  selectContainer.append(option);
  if (i === 0) {
    option.setAttribute("value", "all");
    option.innerText = "All";
  } else if (i === 1) {
    option.setAttribute("value", "blue");
    option.innerText = "Blue";
  } else if (i === 2) {
    option.setAttribute("value", "green");
    option.innerText = "Green";
  } else {
    option.setAttribute("value", "orange");
    option.innerText = "Orange";
  }
}

// Evento click su options
const iconsDiv = document.getElementsByClassName("col-20");

let options = document.getElementById("colors");
options.addEventListener("click", function () {
  let iconsValue = iconsDiv.getAttribute("value");
  console.log(iconsValue);
  switch (options.value) {
    case "blue":
      if (iconsValue !== "blue") {
        console.log("blue");
        iconsDiv.classList.add("d-none");
      }
      break;

    case "green":
      console.log("green");
      break;

    case "orange":
      console.log("orange");
      break;

    case "all":
      console.log("all");
      break;
  }
});
