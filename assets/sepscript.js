//other pg. typewriter animation
const h1 = document.querySelector(".typewriter");
const text = "back";

function textTypingEffect(element, text, i = 0) {
    if(i === 0) {
        element.textContent = "";
    }

    element.textContent += text[i];

    if(i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 100);
}

textTypingEffect(h1, text);