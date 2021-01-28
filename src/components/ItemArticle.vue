<template>
  <article class="item-article col-12 col-md-3 col-lg-4 d-inline-flex">
    <div class="content-article">
      <div class="image-article">
        <a :href="source" target="_blank">
          <img v-if="image" :src="image" class="leaderimg" :alt="title">
          <img v-else :src="imagenotfound" class="leaderimg" :alt="title">
        </a>
      </div>
      <div class="info-article">
        <h3 class="title-article"><a :href="source" target="_blank">{{title}}</a></h3>
        <div class="desc-article">{{body}}</div>
        <span class="publisher-article">{{publisher}}</span>
      </div>
    </div>
  </article>
</template>

<script>

export default {
  name: "ItemArticle",
  props: ["title", "body", "image", "source", "publisher", "imagenotfound"],
}
</script>
