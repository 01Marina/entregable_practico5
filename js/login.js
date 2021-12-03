document.addEventListener("DOMContentLoaded", ()=>{
    //console.log(window.innerWidth);
    //PRESENTACIÓN
    let divsSlide = document.querySelectorAll("#slide");
    let animacionSlides = setInterval(()=>{
        divsSlide.forEach(element=>{
            element.classList.remove("animarTexto");
        });
        setTimeout(()=>{
            divsSlide.forEach(element=>{
                element.classList.add("animarTexto");
            });
        },1);
    }, 25000);

    //CAMBIO DE FORMULARIOS
    let formIngresar = document.getElementById("form_ingresar");
    let formRegistrar = document.getElementById("form_registrar");

    document.getElementById("link_registrarse").addEventListener("click",()=>{
        if(window.innerWidth < 1000){
            clearInterval(animacionSlides);
            divsSlide.forEach(element=>{
                element.classList.remove("animarTexto");
            });
        }
        formIngresar.classList.add("hiden");
        formRegistrar.classList.remove("hiden");
        formRegistrar.classList.remove("animarEntradaRegistro");
        formRegistrar.classList.add("animarEntradaRegistro");
    });

    document.getElementById("logo").addEventListener("click", ()=>{
        if(window.innerWidth < 1000){
            animacionSlides;
        }
        formIngresar.classList.remove("hiden");
        formRegistrar.classList.add("hiden");
        formIngresar.classList.remove("animar_entrada_ingresar");
        formIngresar.classList.add("animar_entrada_ingresar");
    });
    
    //VISTA DE ERRORES
    let errorUsuario = document.getElementById("error_usuario");
    let errorContrasena = document.getElementById("error_contraseña");
    let inputUsuario = document.getElementById("usuario");
    let inputContrasena = document.getElementById("contrasena");

    inputUsuario.addEventListener("click", ()=>{
        errorUsuario.classList.toggle("hiden");
        inputUsuario.classList.toggle("resaltado_error");
    });

    inputContrasena.addEventListener("click", ()=>{
        errorContrasena.classList.toggle("hiden");
        inputContrasena.classList.toggle("resaltado_error");
    });

    //validacion de contraseñas
    let divErrorContra = document.getElementById("div_p_error_contra");
    let inputContraRegist = document.getElementById("contraseña_registrar");
    let pErrorContraRegist = document.getElementById("p_contrasena");

    inputContraRegist.addEventListener("click", ()=>{
        divErrorContra.classList.toggle("hiden_c");
        inputContraRegist.classList.add("resaltado_danger");
        divErrorContra.classList.remove("tamano_error_caracters");
        pErrorContraRegist.innerHTML = "La contraseña debe tener letras y números";
    });

    inputContraRegist.addEventListener("keyup", ()=>{
        if(inputContraRegist.value.length < 8){
            divErrorContra.classList.remove("hiden_c");
            inputContraRegist.classList.remove("resaltado_ok");
            inputContraRegist.classList.add("resaltado_danger");
            divErrorContra.classList.add("tamano_error_caracters");
            pErrorContraRegist.innerHTML = "Debe tener mínimo 8 caracters";
        }else if(inputContraRegist.value.length  == 0){
            pErrorContraRegist.innerHTML = "La contraseña debe tener letras y números";
            divErrorContra.classList.add("resaltado_danger");
        }else{
            inputContraRegist.classList.remove("resaltado_danger");
            inputContraRegist.classList.add("resaltado_ok");
            divErrorContra.classList.add("hiden_c");
        }
    });

    //REPITE CONTRASEÑA
    let divErrorContraRepit = document.getElementById("div_p_error_contra_repite");
    let inputContraRegistRepit = document.getElementById("input_contrasena_repite");

    inputContraRegistRepit.addEventListener("keyup", ()=>{
        if(inputContraRegistRepit.value.length < 8){
            divErrorContraRepit.classList.remove("hiden_c");
            inputContraRegistRepit.classList.remove("resaltado_ok");
            inputContraRegistRepit.classList.add("resaltado_danger");
        }else{
            inputContraRegistRepit.classList.remove("resaltado_danger");
            inputContraRegistRepit.classList.add("resaltado_ok");
            divErrorContraRepit.classList.add("hiden_c");
        }
    });

});
