//Creo una funcion validar para que me sirva para darle check in a los diferentes campos.
function validar0(){
    var usuario, contrasena;
    const RED = document.querySelector("#ID");
    const RED2 = document.querySelector("#Pasword");
    usuario = document.getElementById("ID").value;
    contrasena = document.getElementById("Pasword").value;
    var patron = /^[0-9]+$/;
    var pasw = /^([a-z]+[0-9]+[#,$,-,_,&,%])|([#,$,-,_,&,%]+[0-9]+[a-z]+)|([#,$,-,_,&,%]+[a-z]+[0-9]+)|([a-z]+[#,$,-,_,&,%]+[0-9]+)|([0-9]+[a-z]+[#,$,-,_,&,%]+)|([0-9]+[#,$,-,_,&,%]+[a-z]+)/i;
    var r = /^([a-zA-ZñÑáéíóúÁÉIÓÚ\]+[0-9])|([0-9]+a-zA-ZñÑáéíóúÁÉIÓÚ\])+$/;
    
    //Creo una condicional tomando el valor de cada variable y suponiendo que se deja vacio todos los campos para que sea una condicion que se tenga que cumplir.
    if(usuario == "" || contrasena == "" ){
        //Emito un mensaje de advertencia que todos los campos tienen que ser llenados
       
       $("#respuesta").html("Todos los campos son obligatorios");
       $("#respuesta2").html("Todos los campos son obligatorios");
    //Para que no acceda a psesar de la condicional regresamos a la pagina dandole un valor booleano falso que retorne la operacion.
       return false;
    }
    
    else if(!patron.test(usuario)){
        
        $("#respuesta").html("Usuario Incorrecto");
        $("#respuesta2").html("Contraseña Incorrecta");
        RED.style.border = "2px red solid";
        RED2.style.border = "2px red solid";
        //Para que no acceda a psesar de la condicional regresamos a la pagina dandole un valor booleano falso que retorne la operacion.
        return false;
    
    }
    else if(!r.test(contrasena)){
        $("#respuesta").html("Usuario Incorrecto");
        $("#respuesta2").html("Contraseña Incorrecta");
        RED.style.border = "2px red solid";
        RED2.style.border = "2px red solid";
        //Para que no acceda a psesar de la condicional regresamos a la pagina dandole un valor booleano falso que retorne la operacion.
        return false;
    
    }
    else if(r.length>10){
        $("#respuesta").html("Usuario Incorrecto");
        $("#respuesta2").html("Contraseña Incorrecta");
        RED.style.border = "2px red solid";
        RED2.style.border = "2px red solid";
        //Para que no acceda a psesar de la condicional regresamos a la pagina dandole un valor booleano falso que retorne la operacion.
        return false;
    
    }
    else if(usuario.length>10){
        
        $("#respuesta").html("Usuario Incorrecto");
        $("#respuesta2").html("Contraseña Incorrecta");
        RED.style.border = "2px red solid";
        RED2.style.border = "2px red solid";
        //Para que no acceda a psesar de la condicional regresamos a la pagina dandole un valor booleano falso que retorne la operacion.
        return false;
    
    }
    
    else{
       
      
    
    }
    
    
    
    }