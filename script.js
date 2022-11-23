const gridContainer = document.getElementById('gridContainer');

// const divRow = document.getElementsByClassName('grid-item-row');

// Trying Out CSS Grid
for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div');
    gridContainer.appendChild(div);
    div.classList.add('grid-item');
}






// // Loop to create 16 divs.
// for (let i = 0; i < 16; i++) {
//     const divRow = document.createElement('div');
//     gridContainer.appendChild(divRow);
//     divRow.classList.toggle('grid-item-row');
//     createCols(i);

// }

// function createCols(rowNum) {
//     for (let j = 1; j <= 16; j++) {
//         const divCol = document.createElement('div');
//         const rowArray = document.querySelectorAll('.grid-item-row');
//         rowArray[rowNum].appendChild(divCol);
//         divCol.classList.add('grid-item-column');
//     }
    
// }