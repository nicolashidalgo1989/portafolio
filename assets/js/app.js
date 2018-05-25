//variables
const   btnMenu = document.querySelectorAll('.btn-menu')[0],
        btnSearch = document.querySelectorAll('.btn-search')[0], 
        inputSearch = document.querySelectorAll('.input-search')[0],
        header = document.querySelectorAll('header')[0],
        menu = document.querySelectorAll('.menu')[0],
        input = document.querySelectorAll('input'),
        textArea = document.querySelectorAll('textarea')[0];
//listeners
btnMenu.addEventListener('click', openMenu);
btnSearch.addEventListener('click', openSearch); 
inputSearch.addEventListener('click', clearSearch); 
for(i=0;input.length>i;i++){ 
    input[i].addEventListener('click', activeLabel);
    input[i].addEventListener('blur', outInput);
}
textArea.addEventListener('click', activeLabel);
textArea.addEventListener('blur', outInput);
//functions  
function openMenu(e){  
    btnMenu.children[0].classList.toggle('fa-bars');
    btnMenu.children[0].classList.toggle('fa-times'); 
    header.classList.toggle('open');
    menu.classList.toggle('hidden');
    document.querySelector('body').classList.toggle('overflow-hidden');
}
function openSearch(e){ 
    let clase = e.target.classList;
    if(!e.target.parentElement.classList.contains('open')){
        btnSearch.classList.add('open'); 
    }else if(clase.contains('clear-search')){
        btnSearch.classList.remove('open');  
    }
}  
function clearSearch(){ 
    let clear = document.querySelector('.clear-search');
    if(inputSearch.value.length > 0){
        clear.classList.add('show');
    }else{
        clear.classList.remove('show');
    }
}
function activeLabel(e){ 
    e.target.parentElement.children[1].classList.add('active');   
} 
function outInput(e){ 
    let errorMsg = e.target.parentElement.children[2];
    let id = e.target.id;
    if(e.target.value.length === 0){
        e.target.parentElement.children[1].classList.remove('active');
        errorMsg.innerHTML = `escribe un ${id} válido`;
        errorMsg.classList.add('show'); 
    }else{
        errorMsg.classList.remove('show'); 
    }
} 