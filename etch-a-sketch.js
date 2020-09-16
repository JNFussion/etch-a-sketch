const canvas = document.querySelector("#canvas");
const button = document.getElementById("btn");


function main(){
    let gridSize = prompt("How many square per side do you want?");
    createGrid(gridSize);
    button.addEventListener('click', reset);

}
function createGrid(size){
    
    for(let i = 0; i < size**2; i++){
        let div = document.createElement('div');
        canvas.appendChild(div);
        div.setAttribute('id', i);
        div.classList.add('cell');
        div.addEventListener('mouseover',draw);
        
    }
    canvas.style.gridTemplateRows = `repeat(${size}, ${1/size*100}%)`;
    canvas.style.gridTemplateColumns = `repeat(${size}, ${1/size*100}%)`;
}

function draw(e){
    e.target.style.backgroundColor = randomColor();  
}

function reset(){
    location.reload();
}

function randomColor(){
    return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

main();