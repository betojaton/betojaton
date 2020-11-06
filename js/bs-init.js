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

    // Cambiar la opacidad de la imagen  al scrollar
    /*$(window).scroll(function(){ 
        $('.bg-foto').css("opacity", .5- $(window).scrollTop() / 700) 
    }) */

    //Plugin Fullpage.js
    var myFullpage = new fullpage('#fullpage', {
            // DESPLAZAMIENTO
            autoScrolling: true, // Determina si usar desplazamiento "automático" o "a saltos" o usar el desplazamiento tradicional de cualquier página.
            scrollHorizontally: true, // Determina si las diapositivas horizontales volverán a la primera o última diapositiva al llegar a la última o primera respectivamente.
            fitToSection: false, // Determina si "encajar" las secciones en el navegador o no.
            css3: true, // Usar CSS3 y no javascript.
            easingcss3: 'easeInOutCubic', // Curva de velocidad del efecto.
            scrollBar: true, //Determina si se utiliza la barra de desplazamiento del navegador o no para las secciones verticales. 
            scrollOverflow: true, // Crear o no una barra de desplazamiento para las secciones/diapositivas es mayor que la altura de la ventana del navegador. 
            normalScrollElements: '#scroll-timeline',// Evitar el auto desplazamiento al hacer scroll encima de ciertos elementos, ésta es la opción a usar. (Útil para mapas, divs con scroll etc.). 
            fitToSectionDelay: 1000, // Delay antes de acomodar la seccion automaticamente.

            // NAVEGACION
            menu: '#menu-ppal', // Menu de navegación.
            lockAnchors: false,
            anchors: ['page1', 'page2', 'page3', 'page4'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
            nnavigation: false, // Oculta o muestra la navegacion de puntos.
            navigationPosition: 'right',
            navigationTooltips: ['Inicio', 'Portfolio', 'Sobre Mi', 'Servicios'],
            showActiveTooltip: false,
            slidesNavigation: true,
            slidesNavPosition: 'top',

            // ACCESIBILIDAD
            keyboardScrolling: true, //Navega con las flechas
            animateAnchor: true,
            recordHistory: true,

            // DISEÑO
            verticalCentered: false, // No se alinearan vertical los contenidos de cada seccion.
            paddingBottom: '10em', // Determina el "padding" inferior para cada sección.
            //fixedElements: '.bg-foto', // elemento/s serán extraídos de la estructura de fullPage.js. 

            
        });

    //Tooltip
    $(function () {
    	$('[data-toggle="tooltip"]').tooltip()
    });

    //Lightbox de Portfolio
    $('.gallery a').simpleLightbox({
    	overlay: true,
    });
    
    //Oculta el Sidebar despues de hacer click en algun item.
    $('a.nav-link').click(function(){
    	$('.off-canvas').attr('data-open-drawer','0').removeClass('open');

    });
});



