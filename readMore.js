function readMore(){
    var pontos=document.getElementById("arrow-down");
    var maisTexto=document.getElementById("more");
    var btnLeiaMais=document.getElementById("btnReadMore");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        btnLeiaMais.innerHTML="Leia Mais";
    }else{
        pontos.style.display="none";
        maisTexto.style.display="block";
        btnLeiaMais.innerHTML="Leia Menos";
    }
}