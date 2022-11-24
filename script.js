const gridContainer = document.getElementById('gridContainer');
const gridItem = document.getElementsByClassName('grid-item');

// For loop that creates a 16x16 grid until user changes it using resizeGrid() function by clicking on button.
for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
    div.classList.add('grid-item');
}

// Original for loop for black/white.  New for loop uses randomized colors.
// for (let i = 0; i < gridItem.length; i++) {
//     gridItem[i].addEventListener('mouseenter', e => gridItem[i].classList.add('grid-item-hovered')); // Works
// }

// Randomizes the color each time user hovers over a box.
for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseenter', (event) => {
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        gridItem[i].style.cssText = `background-color: rgb(${red}, ${green}, ${blue});`
    });
};

function resizeGrid() {
    let num;
    do {
        num = prompt("How Many Squares Per Side? (Max: 100)");
    } while (num > 100 && num);
    num = Number(num);

    removeChildNodes(gridContainer); // Function to remove all children of gridContainer before adding in a new set of children (divs)

    // for loop that takes user prompted number (num) and creates a CSS grid.
    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        div.classList.add('grid-item');
        gridContainer.style.cssText = `grid-template-rows: repeat(${num}, minmax(1px, 1fr)); grid-template-columns: repeat(${num}, minmax(1px, 1fr));`
    }

    // Black and white version.
    // for (let i = 0; i < gridItem.length; i++) {
    //     gridItem[i].addEventListener('mouseenter', e => gridItem[i].classList.add('grid-item-hovered'));
    // }

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseenter', (event) => {
            let red = Math.floor(Math.random()*256);
            let green = Math.floor(Math.random()*256);
            let blue = Math.floor(Math.random()*256);
            gridItem[i].style.cssText = `background-color: rgb(${red}, ${green}, ${blue});`
        });
    };
    
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}