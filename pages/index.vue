<template>
  <main class="container -mobile-expand">
    <section class="excerpt">
      <h1>Hi, I'm Liz - a front-end/ UX developer based in London.</h1>
      <span>built with nuxt & vue</span>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass/stylesheets/breakpoint';
@import '~assets/styles/utils/all.scss';

main {
  margin-left: 9em;
  position: relative;

  span {
    font-size: $font-size--very-small;
  }

  .excerpt {
    position: relative;
    padding: 8em 2em 1em;

    @include breakpoint($breakpoint--tablet--large) {
      padding: 10em 5.5em 7.5em;
    }
  }
}
</style>
