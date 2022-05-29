let menu1 = document.querySelector('.index_menu1');
let menu2 = document.querySelector('.index_menu2');
let menu3 = document.querySelector('.index_menu3');
let menu4 = document.querySelector('.index_menu4');
let title = document.querySelector('.index_title');
let M1_title = document.querySelector('.menu_title1');
let M2_title = document.querySelector('.menu_title2');
let M3_title = document.querySelector('.menu_title3');
let M4_title = document.querySelector('.menu_title4');

setTimeout("display(title)", 3550);
setTimeout("display(menu1)", 4550);
setTimeout("display(menu2)", 5050);
setTimeout("display(menu3)", 5550);
setTimeout("display(menu4)", 6050);

menu1.addEventListener('mouseover', function () {
    open(menu1, menu2, menu3, menu4);
    display(M1_title);
    none(M2_title);
    none(M3_title);
    none(M4_title);
})
menu2.addEventListener('mouseover', function () {
    open(menu2, menu3, menu4, menu1);
    display(M2_title);
    none(M3_title);
    none(M4_title);
    none(M1_title);
})
menu3.addEventListener('mouseover', function () {
    open(menu3, menu4, menu1, menu2);
    display(M3_title);
    none(M4_title);
    none(M1_title);
    none(M2_title);
})
menu4.addEventListener('mouseover', function () {
    open(menu4, menu1, menu2, menu3);
    display(M4_title);
    none(M1_title);
    none(M2_title);
    none(M3_title);
})

function open(box1, box2, box3, box4) {
    box1.classList.add("open");
    box2.classList.remove("open");
    box3.classList.remove("open");
    box4.classList.remove("open");   
}

function display(i) {
    i.classList.remove("d-none");
}

function none(index) {
    index.classList.add("d-none")

}