const btnDepartamentos = document.getElementById('btn-departamentos'),
 grid = document.getElementById('grid');

 esDispositivoMovil = () => window.innerWidth <= 200;
    


 btnDepartamentos.addEventListener('mouseover', () => {
    if(!esDispositivoMovil()){
        grid.classList.add('activo');
    }
     
    });
    
    grid.addEventListener('mouseleave', () => {
        if(!esDispositivoMovil()){
           grid.classList.remove('activo');
        }
    });




document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
elemento.addEventListener('mouseenter', (e) => {
    document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
        categoria.classList.remove('activo');
       if(categoria.dataset.categoria == e.target.dataset.categoria){
           categoria.classList.add('activo');

       }
    });
});
});

document.querySelectorAll('#menu .enlaces-subcategoria a').forEach((elemento2) => {
    elemento2.addEventListener('mouseenter', (e) => {
        document.querySelectorAll('#menu .banner-subcategoria').forEach((categoria2) => {
            categoria2.classList.remove('activo');
           if(categoria2.dataset.categoria2 == e.target.dataset.categoria2){
               categoria2.classList.add('activo');
    
           }
        });
        document.querySelectorAll('#menu .galeria-subcategoria').forEach((categoria2) => {
            categoria2.classList.remove('activo');
           if(categoria2.dataset.categoria2 == e.target.dataset.categoria2){
               categoria2.classList.add('activo');
    
           }
        });
    });
    });