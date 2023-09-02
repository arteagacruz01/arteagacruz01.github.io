let animado2 = document.querySelectorAll(".animado2");

function mostrarScroll(){
let scrolltop = document.documentElement.scrollTop;
for(var i=0; i<animado2.length; i++){
    let alturaAnimado = animado[i].offsetTop;
    if(alturaAnimado - 30< scrolltop){
        animado2[i].style.opacity = 1;
        animado2[i].classList.add("mostrar");
    }
}
}

window.addEventListener('scroll', mostrarScroll);