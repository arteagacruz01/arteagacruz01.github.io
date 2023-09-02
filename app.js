(function(){

const listElements = document.querySelectorAll('.menu_item_show');
const list = document.querySelector('.menu_links');
const menu = document.querySelector('.menu_hamburger');

const addClick = ()=>{
    listElements.forEach(Element =>{
Element.addEventListener('click', ()=>{

let subMenu = Element.children[1];
let height = 0;
Element.classList.toggle('.menu_item_active');

if(subMenu.clientHeight === 0){
    height = subMenu.scrollHeight;
}

subMenu.style.height = `${height}px`;
});
    });
}

const deleteStyleHeight = ()=>{
    listElements.forEach(Element=>{

        if(Element.children[1].getAttribute('style')){
            Element.children[1].removeAttribute('style');
            Element.classList.remove('.menu_item_active');
        }
    });
}

window.addEventListener('resize', ()=>{
    if(window.innerWidth > 800){
 deleteStyleHeight();
 

 if(list.classList.contains('menu_links_show'))
    list.classList.remove('menu_links_show');
 }else{
        addClick();
    }
});

if(window.innerWidth <= 800){
    addClick();
}
//const slider = document.querySelector(".menu_links");
menu.addEventListener('click', ()=> list.classList.toggle('menu_links_show'));
/*menu.addEventListener('click', ()=>{
    slider.style.position = "absolute";
   
    });*/
})();