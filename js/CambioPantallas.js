document.addEventListener("DOMContentLoaded", ()=>{
   let fondoEditar = document.getElementById("fondo_editar_perfil");
   let divConfiguaraciones = document.getElementById("div_configuraciones");

   document.getElementById("btn_configuracion").addEventListener("click", ()=>{
      fondoEditar.classList.toggle("hiden");
      divConfiguaraciones.classList.toggle("hiden");
      divConfiguaraciones.classList.remove("animarEntradaConfigReverse");
      divConfiguaraciones.classList.remove("animarEntradaConfig");
      divConfiguaraciones.classList.add("animarEntradaConfig");
   });

   document.getElementById("btn_cerrar_config").addEventListener("click",()=>{
      divConfiguaraciones.classList.remove("animarEntradaConfigReverse");
      divConfiguaraciones.classList.add("animarEntradaConfigReverse");
      setTimeout(()=>{
         fondoEditar.classList.toggle("hiden");
         divConfiguaraciones.classList.toggle("hiden");
      }, 300);
   });

   document.getElementById("btn_salir").addEventListener("click", ()=>{
      let a = document.createElement("a");
      a.setAttribute("href", "index.html");
      a.click();
   });
   //PANTALLA EDITAR DATOS DEL USUARIO

   /**
   let divEditar = document.getElementById("div_editar");

   document.getElementById("btn_editar_perfil").addEventListener("click", ()=>{
      fondoEditar.classList.toggle("hiden");
      divEditar.classList.toggle("hiden");
      divEditar.classList.remove("animarEntradaEditarReverse");
      divEditar.classList.remove("animarEntradaEditar");
      divEditar.classList.add("animarEntradaEditar");
   });

   document.getElementById("btn_cerrar_editar").addEventListener("click", ()=>{
      divEditar.classList.remove("animarEntradaEditarReverse");
      divEditar.classList.add("animarEntradaEditarReverse");
      setTimeout(()=>{
         fondoEditar.classList.toggle("hiden");
         divEditar.classList.toggle("hiden");
      }, 300);
   });*/

   //ABRIR MENU PARA ADJUNTAR
   let divAdjunto = document.getElementById("cont_adjunto");
   document.getElementById("btn_adjuntar").addEventListener("click",()=>{
      divAdjunto.classList.toggle("hiden_2");
   });
});