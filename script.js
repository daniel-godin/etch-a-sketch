const gridContainer = document.getElementById('gridContainer');


// Trying Out CSS Grid
for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
    div.classList.add('grid-item');
}




function hover(element, className) {
    element.addEventListener('mouseenter', e => element.classList.add(className));
    // element.addEventListener('mouseleave', e => element.classList.remove(className));
}


const gridItem = document.getElementsByClassName('grid-item');

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseenter', e => gridItem[i].classList.add('grid-item-hovered'));

    // hover(gridItem[i], 'grid-item-hovered');
}


function resizeGrid() {
    let num = prompt("How Many Squares Per Side? (Max: 100)");
    num = Number(num);

    removeChildNodes(gridContainer);




    for (let i = 0; i < (num * num); i++) {
        const div = document.createElement('div');
        gridContainer.appendChild(div);
        div.classList.add('grid-item');
        gridContainer.style.cssText = `grid-template-rows: repeat(${num}, minmax(1px, 1fr)); grid-template-columns: repeat(${num}, minmax(1px, 1fr));`


    }

    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseenter', e => gridItem[i].classList.add('grid-item-hovered'));
    }
}

function removeChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}