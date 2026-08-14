const cont = document.querySelector(".container");

const sizeBtn = document.querySelector(".size");
const clearBtn = document.querySelector(".clear");
sizeBtn.onclick = changeGrid;

clearBtn.addEventListener('click', () => cont.replaceChildren());


// for (let i = 0; i < 16; i++){
//     const newDiv = document.createElement("div");
//     cont.appendChild(newDiv);
// }

function changeGrid(){
    cont.replaceChildren();

    let squares = parseInt(prompt("enter an int to change grid: "));
     while (squares < 16 || squares > 100){
        squares = parseInt(prompt("enter an int to change grid: "));
    }
    cont.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
    cont.style.gridTemplateRows = `repeat(${squares},1fr)`;
    const totalSquares = squares * squares;
    for (let i = 0; i < totalSquares;i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = '#333333'; // Draws black
    });

    cont.appendChild(cell);
  }
}



 