const container = document.querySelector('#container');
const uicontainer = document.querySelector('#uicontainer');
const ogcontainer =  document.querySelector('#ogcontainer');
const inp = document.createElement('input');
const btn = document.createElement('button');
const clear = document.createElement('button');
const grid = document.createElement('button');
grid.textContent = 'grid';
clear.textContent = 'clear';
btn.textContent = 'select';
inp.placeholder = 'enter';
uicontainer.appendChild(inp);
uicontainer.appendChild(btn);
uicontainer.appendChild(clear);
uicontainer.appendChild(grid);
const colors = ['red','yellow','black','blue','purple','green'];
container.classList.add('bordercontainer');


btn.addEventListener('click',() =>{
    const w = inp.value;
    createGrid(w);
    inp.value = '';
    container.classList.remove('bordercontainer');
})
function createGrid(numberofsquares){
    const w = inp.value;
    container.innerHTML = "";
    if(w>64){
        container.textContent = 'ERROR! too big!'
    }else{
    for (let i = 0; i< numberofsquares;i++){
        const columnDiv = document.createElement('div');
        container.appendChild(columnDiv);
        for(let j = 0; j< numberofsquares;j++){
            const box = document.createElement('div');
            box.classList.add('box');
            box.classList.add('grid');
            columnDiv.appendChild(box);
            box.style.width = `${480/w}px`
            box.style.height = `${480/w}px`
            box.addEventListener('mouseenter',() =>{
                box.classList.add('hover'); 
                const randomElement = colors[Math.floor(Math.random() * colors.length)];
                box.style.backgroundColor = randomElement;  
            })
            clear.addEventListener('click',()=>{
                box.style.backgroundColor = 'white';
            })
            grid.addEventListener('click',()=>{
                box.classList.remove('grid');
            })
        }
    }
    }
      
}





