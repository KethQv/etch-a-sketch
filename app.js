const grid = document.querySelector('.grid');

for (let i = 0; i < 16; i++) {
    let div = document.createElement('div');
    div.classList = 'pixel';
    div.style.width  = '100px';
    div.style.height = '100px';
    div.style.outline = 'solid black 1px';
    grid.appendChild(div);
}

let colors = ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'];
let pixels = document.querySelectorAll('.pixel');

for (let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener('mouseenter', (e) => {
        pixels[i].style.background = colors[Math.floor(Math.random() * 5)];
    });
}
