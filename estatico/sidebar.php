<aside class="sidebar">
	<nav class="navbar fixed-top off-canvas" >
		<div class="bg-skew shadow-lg"></div>
		<div class="container-fluid flex-column flex-wrap justify-content-between align-items-start align-content-start">
                  <!--=============================
                  =            BUTTONs            =
                  ==============================-->
                  <button class="btn btn-open drawer-knob bg-secondary rounded-circle" type="button" data-open="drawer">
                  	<i class="fas fa-bars text-white"></i>
                  </button>
                  <div class="text-center d-flex justify-content-between brand-line mb-auto"></div>
                  <a href="#" onclick="api2.setNextPanel(0);api2.updateClass($(this))" title="Volver al Inicio" class="navbar-brand my-lg-4 mb-2"><h1 class="sr-only">betojaton</h1></a>
                  <button class="btn btn-close bg-secondary rounded-circle" type="button" data-dismiss="drawer">
                  	<span class="sr-only">Toggle Navigation </span><i class="fas fa-long-arrow-alt-left text-white"></i>
                  </button>
                  <!--====  End of BUTTONs  ====-->

                  <!--=================================
                  =            NAVBAR PPAL            =
                  ==================================-->
                  <ul class="nav navbar-ppal navbar-nav drawer-menu my-auto pl-sm-3 pl-lg-5">
                  	<li role="presentation" class="nav-item overflow-hidden">
                  		<a href="#" onclick="api2.setNextPanel(1);api2.updateClass($(this))" title="Seccion Portfolio" class="nav-link active rounded-lg">Portfolio</a>
                  	</li>
                  	<li role="presentation" class="nav-item">
                  		<a href="#" onclick="api2.setNextPanel(2);api2.updateClass($(this))" title="Seccion Sobre Mi" class="nav-link rounded-lg">Sobre Mi</a>
                  	</li>
                  	<li role="presentation" class="nav-item">
                  		<a href="#" onclick="api2.setNextPanel(3);api2.updateClass($(this))" title="Seccion Servicios" class="nav-link rounded-lg">Servicios</a>
                  	</li>
                  	<li role="presentation" class="nav-item">
                  		<a href="#" onclick="api2.setNextPanel(4);api2.updateClass($(this))" title="Seccion Blog" class="nav-link rounded-lg">Blog</a>
                  	</li>
                  </ul>
                  <!--====  End of NAVBAR PPAL  ====-->

                  <!--===================================
                  =            NAVBAR SOCIAL            =
                  ====================================-->
                  <ul class="nav navbar-nav navbar-social pl-sm-3 pl-lg-5 mb-md-3 overflow-hidden w-75">
                  	<li role="presentation" class="nav-item mb-md-2">    
                  		<a href="https://www.behance.net/betojaton" target="_blank" rel="noopener" title="Portfolio Behance" data-toggle="tooltip" data-placement="right"><i class="fab fa-behance-square"></i></a>
                  	</li>
                  	<li role="presentation" class="nav-item mb-md-2">
                  		<a href="https://www.instagram.com/beto.jaton/" target="_blank" rel="noopener" title="Instagram"  data-toggle="tooltip" data-placement="right"><!-- <i class="fab fa-instagram"></i> --> <i data-feather="instagram"></i></a>
                  	</li>
                  	<li role="presentation" class="nav-item mb-md-2">
                  		<a href="https://api.whatsapp.com/send?phone=3548595637" target="_blank" rel="noopener" title="Contact&aacute;me por Whatsapp"  data-toggle="tooltip" data-placement="right"><i class="fab fa-whatsapp"></i></a>
                  	</li>
                  	<li role="presentation" class="nav-item mb-md-2">
                  		<a href="https://ar.linkedin.com/in/betojaton/" target="_blank" rel="noopener" title="Perfil LinkedIn"  data-toggle="tooltip" data-placement="right"><i class="fab fa-linkedin"></i></a>
                  	</li>
                  	<li role="presentation" class="nav-item mb-md-2">
                  		<a href="https://t.me/betojaton" title="Telegram" target="_blank" rel="noopener" data-toggle="tooltip" data-placement="right"><i class="fab fa-telegram-plane"></i></a>
                  	</li>
                  </ul>
                  <!--====  End of NAVBAR SOCIAL  ====-->
                  <footer class="small pt-2">
                        <p class="text-primary"><span>© 2020</span><br>Todos Derechos Reservados</p>
                  </footer>
            </div>
      </nav>
</aside>