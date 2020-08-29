
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<!-- BOOTSTRAP -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js"></script>

<script type="text/javascript" src="js/bs-init.min.js"></script>

<!-- PLUGINS -->
<script type="text/javascript" src="js/jquery.liquid-slider.min.js"></script>
<script type="text/javascript" src="js/animated-type-heading.min.js"></script>
<script type="text/javascript" src="js/off-canvas-sidebar-drawer-navbar.min.js"></script>
<script type="text/javascript" src="js/filterable-gallery.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<!-- <script type="text/javascript" src="js/simple-lightbox.jquery.min.js"></script> -->
<!-- CUSTOM JS -->
<script type="text/javascript" src="js/script.js"></script>

<script>
    //Modal
    $('#modal-1').modal({
        show: true,
    })

    // Sliders Secciones
    $('#slider-content').liquidSlider({
        //hashLinking:true,
        autoHeight: true,
        crossLinks:true,
        firstPanelToLoad:1,

        dynamicTabs: false,
    });

    //Habilita los links del sidebar
    var api2 = $.data( $('#slider-content')[0], 'liquidSlider');
    $('.enable-hash').on('click', function(e){
        e.preventDefault();
        api2.options.hashLinking = true;
        api2.buildHashTags();
        $(this).fadeOut();
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
  });

    //Lightbox de Portfolio
    $('.gallery a').simpleLightbox({
      overlay: true,
  });
</script>
</body>
</html>