document.addEventListener("DOMContentLoaded", ()=>{
    let divResultUsuarios = document.getElementById("resutado_usuario");
    let divResultPublicaciones = document.getElementById("resutado_Publicaciones");
    let contResultBusqueda = document.getElementById("cont_result_busqueda");
    let divEspera = document.getElementById("div_espera");
    //BUSCA USUSARIOS
    document.getElementById("btn_buscar_usuarios").addEventListener("click", ()=>{
        contResultBusqueda.classList.toggle("ocultar_resultados");
        divEspera.classList.remove("hiden");
        setTimeout(()=>{
            divEspera.classList.add("hiden");
            divResultUsuarios.classList.toggle("hiden");
            contResultBusqueda.classList.toggle("animar_resultado");
        }, 3000);
    });
    //BUSCA PUBLICACIONES
    document.getElementById("btn_buscar_publicacion").addEventListener("click", ()=>{
        contResultBusqueda.classList.toggle("ocultar_resultados");
        divEspera.classList.remove("hiden");
        setTimeout(()=>{
            divEspera.classList.add("hiden");
            divResultPublicaciones.classList.toggle("hiden");
            contResultBusqueda.classList.toggle("animar_resultado");
        },3000);
    });

    let formUsuario = document.getElementById("form_usuarios");
    let formPublicacion = document.getElementById("form_publicaciones");
    let btnUsuarios = document.getElementById("btn_usuario");
    let btnPublicaciones = document.getElementById("btn_publicacion");
    //SELECCIONA FORMULARIO PARA BUSCAR USUARIOS
    btnUsuarios.addEventListener("click", ()=>{
        formPublicacion.classList.add("hiden");
        formUsuario.classList.remove("hiden");
        btnUsuarios.classList.add("btn_en_uso");
        btnUsuarios.classList.remove("btn_en_desuso");
        btnPublicaciones.classList.add("btn_en_desuso");
        btnPublicaciones.classList.remove("btn_en_uso");

        divResultPublicaciones.classList.add("hiden");
        divResultUsuarios.classList.add("hiden");
        contResultBusqueda.classList.add("ocultar_resultados");
        contResultBusqueda.classList.remove("animar_resultado");
    });
    //SELECCIONA FORMULARIO PARA BUSCAR PUBLICACIONES
    btnPublicaciones.addEventListener("click", ()=>{
        formUsuario.classList.add("hiden");
        formPublicacion.classList.remove("hiden");
        btnPublicaciones.classList.add("btn_en_uso");
        btnPublicaciones.classList.remove("btn_en_desuso");
        btnUsuarios.classList.add("btn_en_desuso");
        btnUsuarios.classList.remove("btn_en_uso");

        divResultUsuarios.classList.add("hiden");
        divResultPublicaciones.classList.add("hiden");
        contResultBusqueda.classList.add("ocultar_resultados");
        contResultBusqueda.classList.remove("animar_resultado");
    });

});