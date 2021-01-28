<template>
  <div id="app" :class="router.currentRoute.name">
    <Header />
    <router-view />
    <div class="mensaje-mobile">
      No me ha dado tiempo a hacer el responsive
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import router from './router';

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      router: router
    }
  }
}
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
