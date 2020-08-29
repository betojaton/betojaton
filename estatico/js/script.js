$(document).ready(function(){
//Preload 
$("body").css({"overflow-y":"hidden"});
var cargarImg = $("img");
var cargarScript = $("script");
var cargarCSS = $("link");
var cargarVideos = $("video");
var cargarAudios = $("audio");
var totalObjetos = [];
var numItem = 0;
var valorPorcentaje = 0;
var incremento = 0;
var numCarga = 0;
totalObjetos.push(cargarImg, cargarScript, cargarCSS, cargarVideos, cargarAudios);
totalObjetos.forEach(funcionForEach);
function funcionForEach(item, index){
  for(var i = 0; i < item.length; i++){
    numItem++;
    valorPorcentaje = 100/numItem;
  }
  for(var i = 0; i < item.length; i++){
    preload(i, item); 
  }
}
function preload(i, item){
  setTimeout(function(){
    $(item[i]).ready(function(){
      numCarga++
      incremento = Math.floor(numCarga * valorPorcentaje);
      $("#porcentajeCarga").html(incremento+"%");
      $("#rellenoCarga").css({"width":incremento+"%"})
      if(incremento >= 100){
        $("#preload").delay(350).fadeOut("slow");
        $("body").delay(350).css({"overflow-y":"scroll"})
      }
    })
  },i*100)
}

  // Añadir desplazamiento suave a todos los enlaces
  $("a").on('click', function(event) {

    // Asegúrate que this.hash has tiene un valor antes de anular el comportamiento por defecto
    if (this.hash !== "") {
      // Evitar el comportamiento del clic anchor por defecto
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Usando el método animate() de jQuery para añadir un desplazamiento de página suave
      // El número opcional (800) especifica el número de milisegundos que tarda en desplazarse al área especificada
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        //  Añade el hash (#) a la URL cuando termines de desplazarte (comportamiento de clic por defecto)
        window.location.hash = hash;
      });
    } // Fin del if
  });
  
});