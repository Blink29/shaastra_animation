const textElement = document.querySelector(".text");
const text = textElement.textContent;

// setTimeout(() => {
//   // textElement.textContent = '';
//   for (let i = 0; i < text.length; i++) {
//     const letter = text[i];
//     const span = document.createElement("span");
//     span.classList.add("letter");
//     span.textContent = letter;
//     span.style.animation = `slideLetter 2s ease-in-out ${i * 100}ms forwards`;
//     textElement.appendChild(span);
//   }
// }, 5000);

// setTimeout(() => {
//   textElement.textContent = "";
//   for (let i = 0; i < text.length; i++) {
//     const letter = text[i];
//     const span = document.createElement("span");
//     span.classList.add("letter-disappear");
//     span.textContent = letter;
//     span.style.animationDelay = `${i * 100}ms`;
//     textElement.appendChild(span);
//     // textElement.textContent = ''
//     // textElement.style.display = "flex";
//     // textElement.style.textAlign = "center";
//   }
// }, 5000);

// setTimeout(() => {
//     textElement.textContent = ''
// }, 5000)

let letterSpans = [];

function convertToSpan() {
  textElement.textContent = "";
  for (index in text) {
    const letter = text[index];
    const span = document.createElement("span");
    span.textContent = letter;
    textElement.appendChild(span);
    letterSpans.push(span);
  }
}

function animateText() {
  for (index in letterSpans) {
    span = letterSpans[index];
    span.classList.add("letter-disappear");
    span.style.animationDelay = `${index * 100}ms`;
  }
}

convertToSpan();
animateText();
