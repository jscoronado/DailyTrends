<template>
  <main id="news" class="page-app page-news">
    <HeaderTitle
      title="Mis Noticias"
      description="Infórmate sobre las últimas noticias"
    />
    <div class="container-news">
      <div class="container">
        <div class="row list-news">
          <ItemArticle
            v-for="article in Articles"
            :key="article.key"
            :title="article.title"
            :body="article.body"
            :image="article.image"
            :source="article.source"
            :publisher="article.publisher"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { db } from '../services/firebase';
import HeaderTitle from "../components/HeaderTitle";
import ItemArticle from "../components/ItemArticle";

export default {
  name: 'News',
  props: {
    msg: String
  },
  components: {
    HeaderTitle,
    ItemArticle
  },

  data() {
    return {
      Articles: []
    }
  },
  created() {
    db.collection('news').orderBy("date", "asc").onSnapshot((snapshotChange) => {
      this.Articles = [];
      snapshotChange.forEach((doc) => {
        this.Articles.push({
          key: doc.id,
          title: doc.data().title,
          body: doc.data().body,
          image: doc.data().image,
          source: doc.data().source,
          publisher: doc.data().publisher
        })
      });
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
