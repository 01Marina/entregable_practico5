document.addEventListener("DOMContentLoaded", ()=>{
    //descripción
    let ele = document.querySelectorAll(".flecha");

    ele.forEach(element =>{
        element.addEventListener("click",()=>{
            let id = element.attributes.for.value;
            let divs = document.querySelectorAll("#"+id);
            divs.forEach(div=>{
                div.classList.toggle("hiden");
            });
            if(element.classList.contains("fa-angle-down")){
                element.classList.replace("fa-angle-down", "fa-angle-up");
            }else{
                element.classList.replace("fa-angle-up", "fa-angle-down");
            }
        });
    });
    //comentarios
    let eleComent = document.querySelectorAll("#div_btn_coment");
    eleComent.forEach(element =>{
        element.addEventListener("click",()=>{
            let id = element.attributes.for.value;
            let divs = document.querySelectorAll("#"+id);
            divs.forEach(div=>{
                div.classList.toggle("hiden");
            });
            let divContenedor = document.getElementById("this_"+id);
            divContenedor.classList.toggle("hiden");
        });
    });
    //reaciones
    let btnReac = document.querySelectorAll("#reaccion");
    let idCopia = "";
    let restado = false;
    let reacionado = false;
    btnReac.forEach(element =>{
        element.addEventListener("click",()=>{
            let id = element.attributes.for.value;
            let p = document.getElementById(id);
            let pValue = p.innerText;
            let numero = 1;
            if(idCopia != id && !reacionado){
                idCopia = id;
                restado = false;
                element.classList.replace("far", "fa");
                element.classList.toggle("icono_resaltado");
                if(pValue != ""){
                    valor = parseInt(pValue);
                    numero += valor;
                    p.innerHTML = numero;
                }else{
                    p.innerHTML = numero;
                }
                reacionado = true;
            }else if(idCopia == id ){
                if(pValue != "" && !restado){
                    valor = parseInt(pValue);
                    if(valor-numero == 0){
                        p.innerHTML = "";
                    }else{
                          p.innerHTML = (valor-numero);
                    }
                    restado = true;
                    reacionado = false;
                    element.classList.replace("fa", "far");
                    element.classList.toggle("icono_resaltado");
                }else if(pValue != "" &&restado){
                    valor = parseInt(pValue);
                    p.innerHTML = (valor+numero);
                    restado =false;
                    reacionado = false;
                    element.classList.replace("far", "fa");
                    element.classList.toggle("icono_resaltado");
                }else if(pValue == ""){
                    p.innerHTML = numero;
                }
            }
        });
    });

    //ABRIR MENU PARA ADJUNTAR
   //SUB MENÚ SOBRE PUBLICACIONES
   let divSubMenu = document.getElementById("sub_menu_opciones");
   document.getElementById("btn_sub_menu").addEventListener("click",()=>{
      divSubMenu.classList.toggle("hiden");
   });
});