<template>
  <main id="last-news" class="page-app page-last-news">
    <HeaderTitle
      title="Últimas Noticias"
      description="Infórmate sobre las últimas noticias de tus periódicos preferidos"
    />
    <div class="container-news">
      <div class="container">
        <div class="row list-news" >
            <ItemArticle
                    v-for="(article,index) in newsElPais" :key="article.id"
                    :title="article.title"
                    :body="article.body"
                    :image="article.img"
                    :source="article.source"
                    :publisher="article.publisher"
                    imagenotfound="https://grupoesneca.com/wp-content/uploads/2018/02/logo-vector-el-pais-e1561531331339.jpg"
                    :if="index <= 5"
            />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle";
import ItemArticle from "../components/ItemArticle";
import newsElPais from "../services/news_ElPais.json";
//import scrap from "../services/index"

export default {
  name: 'LastNews',
  props: {
    msg: String,
  },
  components: {
    HeaderTitle,
    ItemArticle
  },

  data () {
    return {
      newsElPais: newsElPais
    }
  },

  computed: {
    newsLimited() {
      return this.users.slice(0, 3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
