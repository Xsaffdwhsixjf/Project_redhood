let index_menu1 = document.querySelector('.index_menu1');
let index_menu2 = document.querySelector('.index_menu2');
let index_menu3 = document.querySelector('.index_menu3');
let index_menu4 = document.querySelector('.index_menu4');
let logo = document.querySelector('.logo');
let index_title = document.querySelector('.index_title');

function display(index) {
    index.classList.remove('d-none');
}
setTimeout ( "display(logo)" , 3550 ); 
setTimeout ( "display(index_title)" , 3550 ); 
setTimeout ( "display(index_menu1)" , 4550 ); 
setTimeout ( "display(index_menu2)" , 5050 ); 
setTimeout ( "display(index_menu3)" , 5550 ); 
setTimeout ( "display(index_menu4)" , 6050 ); 
index_menu1.addEventListener('mouseover', function () {
    index_menu4.classList.remove("open");
    index_menu3.classList.remove("open");
    index_menu2.classList.remove("open");
    index_menu1.classList.add("open");
})

index_menu2.addEventListener('mouseover', function () {
    index_menu4.classList.remove("open");
    index_menu3.classList.remove("open");
    index_menu1.classList.remove("open");
    index_menu2.classList.add("open");
})
index_menu3.addEventListener('mouseover', function () {
    index_menu4.classList.remove("open");
    index_menu2.classList.remove("open");
    index_menu1.classList.remove("open");
    index_menu3.classList.add("open");
})
index_menu4.addEventListener('mouseover', function () {
    index_menu3.classList.remove("open");
    index_menu2.classList.remove("open");
    index_menu1.classList.remove("open");
    index_menu4.classList.add("open");
})