const textElement = document.querySelector(".text");
const text = textElement.textContent;

let letterSpans = [];
let overlapLetterSpans = [];

function convertToSpan() {
  textElement.textContent = "";
  for (index in text) {
    const letter = text[index];
    const span = document.createElement("span");
    span.textContent = letter;
    textElement.appendChild(span);
    letterSpans.push(span);
  }
  const overlapContainer = document.createElement("div");
  overlapContainer.style = "position: absolute; top: 0px;";
  for (index in text) {
    const letter = text[index];
    const span = document.createElement("span");
    span.textContent = letter;
    overlapContainer.appendChild(span);
    overlapLetterSpans.push(span);
  }
  textElement.appendChild(overlapContainer);
}

function animateText() {
  for (index in letterSpans) {
    span = letterSpans[index];
    span.classList.add("letter-disappear");
    span.style.animationDelay = `${index * 100}ms`;
  }
  for (index in overlapLetterSpans) {
    overlapSpan = overlapLetterSpans[index];
    overlapSpan.classList.add("letter");
    overlapSpan.style.animation = `slideLetter 2s ease-in-out ${
      index * 100
    }ms forwards`;
  }
}

function animateLogo() {
  const logo = document.querySelector(".logo");
  logo.style.animation = "logoAnimation 3s forwards";
}

function showBackground() {
  const backgroundElem = document.querySelector(".backgroundElem");
  backgroundElem.style.opacity = "1";
}

function bounceDice() {
  const dice = document.querySelector(".dice");
  dice.style.animation = "bounce 5s ease-in-out";
}

function dropDice() {
  const dice = document.querySelector(".dice");
  dice.style.animation = "diceDrop 1s ease-in-out";
}

function hideDice() {
  const dice = document.querySelector(".dice");
  dice.style.display = "none";
}

convertToSpan();
setTimeout(animateText, 5000);
setTimeout(animateLogo, 10000);
setTimeout(showBackground, 10000);
setTimeout(dropDice, 4000);
setTimeout(bounceDice, 5000);
setTimeout(hideDice, 10000);
