grupoTarjetas = ["🍕","🍑","💋","👀","🎁","🏈","🧿","🌷","👾","👽","👻","💪🏻","💅🏻","🎈","🎨"];

let totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  let resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  let mesa = document.querySelector("#mesa");
  let tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = " ";

  tarjetasBarajadas.forEach(function(elemento){
    let tarjeta = document.createElement("div");

    tarjeta.innerHTML =
        "<div class='tarjeta' data-valor= " + 
        elemento + ">" +
        "<div class='tarjeta__contenido'>" +
        elemento +
        "</div>" +
        "</div>";

    mesa.appendChild(tarjeta);
  })
}

function descubrir() {
    let descubiertas;
    let totalDecubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    
    if(totalDecubiertas.length > 1){
        return;
    }
    
    this.classList.add("descubierta");

    descubiertas = document.querySelectorAll(".descubierta:not(.acertada)")
    if(descubiertas.length < 2){
        return;
    }

    comparar(descubiertas) 

}

function comparar(tarjetasAComparar){
    if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
        acierto(tarjetasAComparar);
    }else{
        error(tarjetasAComparar);
    }
}

function acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("acertada");
    })
}

function error(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("error");
    })

    setTimeout(function(){
        lasTarjetas.forEach(function(elemento){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
        })
        }, 1000);    
}


reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(
    function(elemento) {
        elemento.addEventListener("click", descubrir);
});
