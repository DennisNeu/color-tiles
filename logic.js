const container = document.querySelector(".main-container");
const button = document.querySelector("#regen");
const input = document.querySelector("#tiles-number");

button.addEventListener("click", function() {
    const tilesNumber = input.value;
    deleteTiles();
    generateTiles(tilesNumber);
});

function getRandomColor() {
    const colors = [
        "blue", "red", "green", "yellow", "tomato", "pink", "black", "purple", "blueviolet",
        "chartreuse", "cyan", "crimson", "darkblue", "darkmagenta", "darkred", "deeppink", "aquamarine",
        "darkorchid", "fuchsia", "gold", "coral", "khaki", "lavender", "lightcoral", "lightcyan", 
        "lightgreen", "lightsalmon", "lightseagreen", "lightskyblue", "lightpink", "lime", "magenta", 
        "mediumblue", "mediumorchid", "mediumseagreen", "mediumslateblue", "mediumspringgreen", 
        "mediumturquoise", "midnightblue", "navy", "orange", "orangered", "orchid", "palevioletred", 
        "peachpuff", "powderblue", "royalblue", "salmon", "skyblue", "slateblue", "springgreen", 
        "steelblue", "teal", "thistle", "turquoise", "violet", "yellowgreen"
    ];
    
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

function deleteTiles() {
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
        container.removeChild(tile);
    });
}

generateTiles(12);