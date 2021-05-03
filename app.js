const grid = document.querySelector('.grid');

const gridLength = 40;

grid.style.gridTemplateColumns = `repeat(${gridLength}, ${gridLength}fr)`;
grid.style.gridTemplateRows = `repeat(${gridLength}, ${gridLength}fr)`;
for (let i = 0; i < gridLength * gridLength; i++) {
    let pixelContainer = document.createElement('div');
    pixelContainer.classList = 'pixel-container';
    let pixel = document.createElement('div');
    pixel.classList = 'pixel';
    grid.appendChild(pixelContainer);
    pixelContainer.appendChild(pixel);
}

let colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let pixels = document.querySelectorAll('.pixel');
let pixelsContainers = document.querySelectorAll('.pixel-container');

function randColor() {
    return Math.floor(Math.random() * 256);
}
for (let i = 0; i < pixels.length; i++) {
    pixelsContainers[i].addEventListener('mouseenter', (e) => {
        //pixels[i].style.backgroundColor = colors[Math.floor(Math.random() * 5)];
        pixels[i].style.backgroundColor = `rgba(${randColor()}, ${randColor()}, ${randColor()}, 1)`;
        pixels[i].classList.toggle('pixel--flip');
    });
}
