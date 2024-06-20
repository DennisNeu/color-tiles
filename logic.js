const container = document.querySelector(".main-container");

function getRandomColor() {
    const colors =  ["blue", "red", "green", "yellow", "white", "pink", "black", "purple", "brown"];
    const randomNumber = Math.round(Math.random() * (colors.length - 1));
    console.log(randomNumber);
    return colors[randomNumber];
}

for (i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.classList.add("tile");
    div.style.backgroundColor = getRandomColor();

    container.appendChild(div);
}