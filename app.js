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

convertToSpan();
setTimeout(animateText, 5000);
setTimeout(animateLogo, 10000);
