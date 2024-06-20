const container = document.querySelector(".main-container");

function getRandomColor() {
    const colors =  ["blue", "red", "green", "yellow", "white", "pink", "black", "purple", "brown", "blueviolet", "chartreuse", "cyan", "crimson", "darkblue", "darkmagenta", "darkred", "deeppink"];
    const randomNumber = Math.round(Math.random() * (colors.length - 1));
    console.log(randomNumber);
    return colors[randomNumber];
}

function changeColor() {
    const currentColor = this.style.backgroundColor;
    let newColor = getRandomColor();
    while(newColor === currentColor) {
        newColor = getRandomColor();
    }
    this.style.backgroundColor = newColor;
}

for (i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.classList.add("tile");
    div.style.backgroundColor = getRandomColor();
    div.addEventListener("click", changeColor);

    container.appendChild(div);
}