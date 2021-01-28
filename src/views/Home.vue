<template>
  <div id="home" class="page-app page-home">
    <div class="container">
      <h2>Última Noticia | Directo</h2>
      <div id="noticia-portada"
           v-for="(article,index) in newsPortada" :key="article.id"
           :body="article.body"
           :image="article.img"
           :publisher="article.publisher"
           imagenotfound="https://grupoesneca.com/wp-content/uploads/2018/02/logo-vector-el-pais-e1561531331339.jpg"
           :if="index <= 5"
      >
        <h1>{{article.title}}</h1>
        <a :href="article.source" class="btn_noticia-portada principal" target="_blank">Ver Noticia</a>
        <a href="/ultimas-noticias" class="btn_noticia-portada secondary">Últimas Noticia</a>
      </div>
    </div>
  </div>
</template>

<script>
import newsPortada from "../services/news_portada.json";

export default {
  name: 'Home',
  props: {
    msg: String
  },

  data () {
    return {
      newsPortada: newsPortada
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
