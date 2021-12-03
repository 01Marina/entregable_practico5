document.addEventListener("DOMContentLoaded", ()=>{
    let banner = document.getElementById("cont_banner_mensajes");
    let contConversacion = document.getElementById("cont_conversacion");
    let divConversacion = document.getElementById("div_conversacion");

    let mensajeReciente = document.getElementById("mensaje_reciente");
    mensajeReciente.addEventListener("click", ()=>{
        banner.classList.add("hiden");
        contConversacion.classList.remove("hiden");
        divConversacion.classList.remove("hiden");
        mensajeReciente.classList.remove("mensaje_sin_leer");
    });

});