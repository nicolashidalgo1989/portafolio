//variables
const   btnMenu = document.querySelectorAll('.btn-menu')[0],
        btnSearch = document.querySelectorAll('.btn-search')[0],
        btnScrollDown = document.querySelectorAll('.btn-scroll-down')[0],
        header = document.querySelectorAll('header')[0],
        menu = document.querySelectorAll('.menu')[0];
//listeners
btnMenu.addEventListener('click', openMenu);
btnSearch.addEventListener('click', openSearch);
btnScrollDown.addEventListener('click', scrollDown); 
//functions  
function openMenu(e){  
    btnMenu.children[0].classList.toggle('fa-bars');
    btnMenu.children[0].classList.toggle('fa-times'); 
    header.classList.toggle('open');
    menu.classList.toggle('hidden');
    document.querySelector('body').classList.toggle('overflow-hidden');
}
function openSearch(e){
    btnSearch.classList.toggle('open');
} 
function scrollDown(){
    console.log('hola')
}