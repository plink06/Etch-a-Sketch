const container = document.querySelector('#container');
const uicontainer = document.querySelector('#uicontainer');
const ogcontainer =  document.querySelector('#ogcontainer');
const inp = document.createElement('input');
const btn = document.createElement('button');
btn.textContent = 'select';
uicontainer.appendChild(inp);
uicontainer.appendChild(btn);
inp.placeholder = 'enter';
btn.addEventListener('click',() =>{
    const w = inp.value;
    createGrid(w);
})
function createGrid(numberofsquares){
    const w = inp.value;
    container.innerHTML = "";
    if(w>64){
        container.textContent = 'ERROR! too big!'
    }else{
    for (let i = 0; i< numberofsquares;i++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add('grid');
        rowDiv.style.width = `${480/w}px`
        rowDiv.style.height = `${480/w}px`
        container.appendChild(rowDiv);
        
        for(let j = 0; j< numberofsquares;j++){
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid');
            gridBox.classList.add('gridbox')
            rowDiv.appendChild(gridBox);
            gridBox.style.width = `${480/w}px`
            gridBox.style.height = `${480/w}px`
        }
    }
    }
    
}
container.addEventListener('mouseenter',(e) =>{
    e.currentTarget.style.backgroundColor = 'red';
    console.log('mouse has enterd');
})



