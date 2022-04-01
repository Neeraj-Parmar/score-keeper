let p1D = document.querySelector('#p1Display');
let p2D = document.querySelector('#p2Display');
let a=0, b=0;
const btn = document.querySelectorAll('button');
const p1 = btn[0], p2 = btn[1], reset = btn[2];
p1.addEventListener('click', ()=>{
    a++;
    p1D.innerText = a;
})
p2.addEventListener('click', ()=>{
    b++;
    p2D.innerText = b;
})
reset.addEventListener('click', ()=>{
    a=0; b=0;
    p1D.innerText = a;
    p2D.innerText = b;
    p1.disabled = false;
    p2.disabled = false;
    p1D.className = '';
    p2D.className = '';
})
const max = document.querySelector('#num');
document.querySelector('#btn').addEventListener('click', ()=>{
    if(a==max.value || b==max.value){
        p1.disabled = true;
        p2.disabled = true;
    }
    if(a==max.value){
        p1D.classList.add('win');
        p2D.classList.add('lose');
    }
    else if(b==max.value){
        p2D.classList.add('win');
        p1D.classList.add('lose');
    }
})