<template>
  <main id="news" class="page-app page-news">
    <HeaderTitle
      title="Últimas Noticias"
      description="Infórmate sobre las últimas noticias de tus periódicos preferidos"
    />
    <div class="list-news">
      <div class="container">
        <h1>News</h1>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderTitle from "../components/HeaderTitle";

export default {
  name: 'News',
  props: {
    msg: String
  },
  components: {
    HeaderTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
