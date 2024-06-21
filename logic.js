const container = document.querySelector(".main-container");
const button = document.querySelector("#regen");
const input = document.querySelector("#tiles-number");

button.addEventListener("click", function() {
    const tilesNumber = input.value;
    generateTiles(tilesNumber);
});

function getRandomColor() {
    const colors =  ["blue", "red", "green", "yellow", "tomato", "pink", "black", "purple", "brown", "blueviolet", "chartreuse", "cyan", "crimson", "darkblue", "darkmagenta", "darkred", "deeppink", "aquamarine", "darkorchid", "fuchsia", "gold"];
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

function generateTiles(tilesNumber) {
    if (isNaN(tilesNumber)) {
        alert("Please enter a postive number!");
        return;
    }
    if (tilesNumber < 0) {
        alert("Please enter a postive number!");
        return;
    }

    for (i = 0; i < tilesNumber; i++) {
        const div = document.createElement("div");
        div.classList.add("tile");
        div.style.backgroundColor = getRandomColor();
        div.addEventListener("click", changeColor);
    
        container.appendChild(div);
    } 
}

generateTiles(12);