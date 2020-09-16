const container = document.querySelector('#canvas');


for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.textContent = i;
    div.setAttribute('id', i)
    div.classList.add('cell');
    container.appendChild(div);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('mouseenter',draw));


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clearCanvas);



function clearCanvas(){
    cells.forEach( cell => cell.style.backgroundColor = 'white')

}

function draw(e){
    e.target.style.backgroundColor = 'black';
    
}