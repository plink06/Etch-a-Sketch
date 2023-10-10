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
        const columnDiv = document.createElement('div');
        container.appendChild(columnDiv);
        for(let j = 0; j< numberofsquares;j++){
            const box = document.createElement('div');
            box.classList.add('box');
            columnDiv.appendChild(box);
            box.style.width = `${480/w}px`
            box.style.height = `${480/w}px`
            box.addEventListener('mouseenter',() =>{
                box.classList.add('hover');   
            })
            //box.addEventListener('mouseleave',() =>{
                //box.classList.remove('hover');
            //})
        }
    }
    }
      
}
container.addEventListener('mouseenter',() =>{
})




