const textElement = document.querySelector(".text");
const text = textElement.textContent.trim();


setTimeout(() => {
    // textElement.textContent = '';
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const span = document.createElement("span");
        span.classList.add("letter");
        span.textContent = letter;
        span.style.animation = `slideLetter 2s ease-in-out ${i * 100}ms forwards`;
        textElement.appendChild(span);
      }
}, 5000)

setTimeout(() => {
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const span = document.createElement("span");
        span.classList.add("letter-disappear");
        span.textContent = letter;
        span.style.animationDelay = `${i * 100}ms`;
        textElement.appendChild(span);
        // textElement.textContent = ''
        // textElement.style.display = "flex";
        // textElement.style.textAlign = "center";
    }
}, 5000)

// setTimeout(() => {
//     textElement.textContent = ''
// }, 5000)




