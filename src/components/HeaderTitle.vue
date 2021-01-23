<template>
  <!-- ======= Hero Section ======= -->
  <section id="header-title">

    <div class="container">
      <div class="row">
        <div class="col-lg-12 pt-8 pt-lg-5 order-2 order-lg-1 d-flex flex-column align-items-center text-center" data-aos="zoom-out">
          <h1 class="title_header-title">{{ title }}</h1>
          <h2 class="desc_header-title">{{ description }}</h2>
        </div>
      </div>
    </div>

    <svg class="animation_header-title" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
      <defs>
        <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use>
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use>
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="#fff"></use>
      </g>
    </svg>

  </section><!-- End Hero -->
</template>

<script>

export default {
  name: "HeaderTitle",
  props: ["title", "description"],

  components: {},
  methods: {}
};
</script>

<style scoped></style>
