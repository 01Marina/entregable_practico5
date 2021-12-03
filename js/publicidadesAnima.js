document.addEventListener("DOMContentLoaded", ()=>{
    let divP1 = document.getElementById("div_publicidad_1");
    let divP2 = document.getElementById("div_publicidad_2");

    let div1Activo = true;

    setInterval(()=>{
        if(div1Activo){
            div1Activo = false;
            divP1.classList.toggle("hiden");
            divP2.classList.toggle("hiden");
            divP2.classList.add("animarEntradaPublicidad");
            setTimeout(()=>{ divP2.classList.remove("animarEntradaPublicidad");},400);
        }else{
            div1Activo = true;
            divP1.classList.toggle("hiden");
            divP2.classList.toggle("hiden");
            divP1.classList.add("animarEntradaPublicidad");
            setTimeout(()=>{ divP1.classList.remove("animarEntradaPublicidad");},400);
        }
    },10000);
});