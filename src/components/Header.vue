<template>
  <header id="header" class="fixed-top d-flex align-items-center header-opacity">
    <div class="container d-flex align-items-center">

      <div class="logo mr-auto">
        <a href="/"><span>DailyTrends</span></a>
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="/">Inicio</a></li>
          <li><a href="/ultimas-noticias">Últimas Noticias</a></li>
          <li><a href="/noticias">Nuestras Noticias</a></li>
          <li><a href="#">COVID</a></li>
          <li><a href="#">Contacto</a></li>

          <li class="drop-down"><a href="/listado-noticias"><i class="fas fa-user-circle"></i></a>
            <ul>
              <li><a href="/listado-noticias">Listado Noticias</a></li>
              <li><a href="/noticia/add">Añadir Noticia</a></li>
            </ul>
          </li>
        </ul>
      </nav><!-- .nav-menu -->

    </div>
  </header><!-- End Header -->
</template>

<script>

export default {
  name: "Header",

  components: {},

  methods: {}
};
</script>

<style scoped></style>
