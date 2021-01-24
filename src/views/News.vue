<template>
  <main id="news" class="page-app page-news">
    <HeaderTitle
      title="Últimas Noticias"
      description="Infórmate sobre las últimas noticias de tus periódicos preferidos"
    />
    <div class="container-news">
      <div class="container">
        <h4>News</h4>
        <div class="row list-news">
          <ItemArticle
            title="Artículo 1"
            body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            image="https://comercializadora.electricadecadiz.es/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
            source="https://www.google.es"
            publisher="El País"
          />
          <ItemArticle
                  title="Artículo 2"
                  body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  image="https://comercializadora.electricadecadiz.es/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                  source="https://www.google.es"
                  publisher="El Mundo"
          />
          <ItemArticle
                  title="Artículo 3"
                  body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                  image="https://comercializadora.electricadecadiz.es/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
                  source="https://www.google.es"
                  publisher="Diario .es"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
