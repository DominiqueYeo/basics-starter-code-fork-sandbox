var colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var colourCounter = 0;

var colourChanger = function () {
  var container = document.getElementById("container");
  container.style.backgroundColor = colours[colourCounter % 7];
  colourCounter += 1;
  console.log(colourCounter);
};

var importantFunction = function () {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var yesButton = document.getElementById("yes");
  var noButton = document.getElementById("no");

  var noFlag = 0;
  yesButton.addEventListener("click", () => {
    var message = document.getElementById("message");
    message.innerText = "You are right!";

    var span = document.getElementsByClassName("close")[0];
    span.addEventListener("click", () => {
      modal.style.display = "none";
    });

    noButton.style.display = "none";
    yesButton.style.display = "none";
  });

  noButton.addEventListener("click", () => {
    noFlag += 1;
    noButton.style.left = `${50.27 + (noFlag % 2) * 100}px`;
  });
};

var main = function () {
  var buttonContainer = document.getElementById("buttonContainer");

  var colourButton = document.createElement("button");
  colourButton.innerText = "Colour Me";
  colourButton.addEventListener("click", colourChanger);

  var hoverButton = document.createElement("button");
  hoverButton.innerText = "Hover me";

  hoverButton.addEventListener("mouseover", () => {
    hoverButton.innerText = "Got you";
  });

  hoverButton.addEventListener("mouseout", () => {
    hoverButton.innerText = "Hover me";
  });

  var importantButton = document.createElement("button");
  importantButton.innerText = "Important";
  importantButton.addEventListener("click", importantFunction);

  buttonContainer.appendChild(colourButton);
  buttonContainer.appendChild(hoverButton);
  buttonContainer.appendChild(importantButton);
};
