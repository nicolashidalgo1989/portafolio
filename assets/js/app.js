//variables
const   btnMenu = document.querySelectorAll('.btn-menu')[0],
        btnSearch = document.querySelectorAll('.btn-search')[0];      
//listeners
btnMenu.addEventListener('click', openMenu);
btnSearch.addEventListener('click', openSearch);
//functions  
function openMenu(e){  
    btnMenu.children[0].classList.toggle('fa-bars');
    btnMenu.children[0].classList.toggle('fa-times'); 
    btnMenu.parentElement.parentElement.parentElement.parentElement.classList.toggle('open');
    btnMenu.children[1].classList.toggle('hidden');
}
function openSearch(e){
    btnSearch.classList.toggle('open');
}