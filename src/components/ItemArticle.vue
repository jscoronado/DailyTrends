<template>
  <article class="item-article col-12 col-md-3 col-lg-4">
    <div class="content-article">
      <a :href="source" target="_blank"><img :src="image" class="image-article"></a>
      <span class="publisher-article">{{publisher}}</span>
      <h3 class="title-article"><a :href="source" target="_blank">{{title}}</a></h3>
      <div class="desc-article">{{body}}</div>
    </div>
  </article>
</template>

<script>

export default {
  name: "ItemArticle",
  props: ["title", "body", "image", "source", "publisher"],
}
</script>
