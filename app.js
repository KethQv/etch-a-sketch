// let colorsPalette1 = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];

const pixelGrid = document.querySelector('.pixel-grid');
const clearBtn = document.querySelector('.menu__button');
const flipCheckBox = document.querySelector('.menu__checkbox-flip');
let hasListener = false;
function randColor() {
    return Math.floor(Math.random() * 256);
}

function flip() {
    let pixelsContainers = document.querySelectorAll('.pixel-container');
    let pixels = document.querySelectorAll('.pixel');

    if (flipCheckBox.checked) {
        for (let i = 0; i < pixels.length; i++) {
            pixelsContainers[i].onmouseenter = () => { pixels[i].classList.toggle('pixel--flip'); };
        }
    } else {
        for (let i = 0; i < pixels.length; i++) {
            pixelsContainers[i].onmouseenter = () => { };
        }
    }
}

flipCheckBox.onclick = flip;

clearBtn.addEventListener('click', (e) => {
    let pixelPerSide = prompt('Pixels per side:');
    return createPixelGrid(pixelPerSide);
});

function createPixelGrid(pixelsPerSide) {

    pixelGrid.innerHTML = '';

    pixelGrid.style.gridTemplateColumns = `repeat(${pixelsPerSide}, ${pixelsPerSide}fr)`;
    pixelGrid.style.gridTemplateRows = `repeat(${pixelsPerSide}, ${pixelsPerSide}fr)`;

    for (let i = 0; i < pixelsPerSide * pixelsPerSide; i++) {
        let pixelContainer = document.createElement('div');
        pixelContainer.classList = 'pixel-container';
        let pixel = document.createElement('div');
        pixel.classList = 'pixel';
        pixelGrid.appendChild(pixelContainer);
        pixelContainer.appendChild(pixel);
    }

    let pixelsContainers = document.querySelectorAll('.pixel-container');
    let pixels = document.querySelectorAll('.pixel');


    for (let i = 0; i < pixels.length; i++) {
        pixelsContainers[i].addEventListener('mouseenter', (e) => {
            pixels[i].style.backgroundColor = `rgba(${randColor()}, ${randColor()}, ${randColor()}, 1)`;
        });
    }

    flip();
}

window.addEventListener('load', createPixelGrid(10));