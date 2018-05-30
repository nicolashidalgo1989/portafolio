//variables
const   btnMenu = document.querySelector('.btn-menu'),
        btnSearch = document.querySelectorAll('.btn-search')[0], 
        inputSearch = document.querySelectorAll('.input-search')[0],
        header = document.querySelectorAll('header')[0], 
        input = document.querySelectorAll('input'),
        textArea = document.querySelectorAll('textarea')[0],
        body = document.querySelector('body'), 
        linksMenu = document.querySelectorAll('.menu a'),
        elHeader = document.querySelector('.header .container .row'),
        elFooter = document.querySelector('.footer .container .row'), 
        menu = document.createElement('nav'),
        uList = document.createElement('ul');

const line = document.createElement('span');
line.className = 'line';
btnMenu.appendChild(line);

//listeners 
document.addEventListener('DOMContentLoaded', createMenuHeader);
btnMenu.addEventListener('click', openMenu);
btnSearch.addEventListener('click', openSearch); 
inputSearch.addEventListener('click', clearSearch); 
for(i=0;input.length>i;i++){ 
    input[i].addEventListener('click', activeLabel);
    input[i].addEventListener('blur', outInput);
}
//textArea.addEventListener('click', activeLabel);
//textArea.addEventListener('blur', outInput);
//functions  
function createMenuHeader(){ 
    menu.className = 'col-md-4 offset-md-4 col-12 menu hidden text-center'; 
    menu.appendChild(uList); 
    elHeader.appendChild(menu);  
}
function openMenu(e){   
    e.preventDefault(); 
    if(e.target.classList.contains('line')){
        e.target.parentElement.classList.toggle('close-btn');
    }else{
        e.target.classList.toggle('close-btn');
    }
    header.classList.toggle('open');
    menu.classList.toggle('hidden');
    document.querySelector('body').classList.toggle('overflow-hidden');
}
function openSearch(e){ 
    e.preventDefault();
    let clase = e.target.classList;
    if(!e.target.parentElement.classList.contains('open')){
        btnSearch.classList.add('open'); 
    }else if(clase.contains('clear-search')){
        btnSearch.classList.remove('open');  
    }else if(inputSearch.value.length > 0 && clase.contains('fa-search')){
        window.location.href = '/search.html'
    }
    console.log(inputSearch.value.length);
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
let linksHeader = [{
    name: 'Home',
    href: '/index.html',
    target: '_self',
},
{
    name: 'Servicios',
    href: '/index.html#services',
    target: '_self'
},
{
    name: 'Portfolio',
    href: '/portfolio.html',
    target: '_self'
},
{
    name: 'Blog',
    href: '/blog.html',
    target: '_self'
},
{
    name: 'Acerca',
    href: '/index.html#about',
    target: '_self'
},
{
    name: 'Contact',
    href: '/contact.html',
    target: '_self'
}
];
linksHeader.forEach(function(items) {
    let list = document.createElement('li');
    let link = document.createElement('a');
    uList.appendChild(list);
    list.appendChild(link);
    link.innerHTML = items.name;
    link.setAttribute('href', items.href);
    link.setAttribute('target', items.target); 
});
/*
linksFooter.forEach(function(items){
let list = document.createElement('li');
let link = document.createElement('a');
});
*/
 