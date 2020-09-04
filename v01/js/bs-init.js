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

//Plugin AOS Animate	
AOS.init({ disable: 'mobile' });

//Hover Animate
$('[data-bs-hover-animate]')
.mouseenter( function(){ var elem = $(this); elem.addClass('animated ' + elem.attr('data-bs-hover-animate')) })
.mouseleave( function(){ var elem = $(this); elem.removeClass('animated ' + elem.attr('data-bs-hover-animate')) });

//Plugin Fullpage.js
var myFullpage = new fullpage('#fullpage', {
        // ──────────────────────────────────────────────────
        //   :::::: Opciones Basicas
        // ──────────────────────────────────────────────────
        autoScrolling: false, // Desactivo el auto scroll.
        fitToSection: false, // Desactivo el scroll automaticamente para que la seccion se muestre en pantalla.
        css3: true, // Usar CSS3 y no javascript.
        easingcss3: 'ease-out', // Curva de velocidad del efecto.
        scrollOverflow: true,
        scrollBar: false,
        slidesNavigation: false,
        fitToSectionDelay: 1000, // Delay antes de acomodar la seccion automaticamente.
        verticalCentered: false, // No se alinearan vertical los contenidos de cada seccion.
        //responsiveWidth: 321,
        // ──────────────────────────────────────────────────
        //   :::::: Navegación
        // ──────────────────────────────────────────────────
        //anchors: ['section1'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
        //lockAnchors: true,
        menu: '#menu-ppal', // Menu de navegación.
        keyboardScrolling: true, //Navega con las flechas.
    });

//Tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

//Oculta el Sidebar despues de hacer click en algun item.
$('a.nav-link').click(function(){
    $('.off-canvas').attr('data-open-drawer','0').removeClass('open');

});

//Lightbox de Portfolio
$('.gallery a').simpleLightbox({
	overlay: true,
});
});



