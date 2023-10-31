function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const container = document.querySelector(".container");

    body.style.backgroundColor = getRandomColor();

    container.addEventListener("click", function () {
        body.style.backgroundColor = getRandomColor();
    });
});
