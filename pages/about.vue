<template>
  <main class="container">
    <section class="container__inside">
      <h1>About</h1>
      <article v-html="biography"></article>
    </section>
  </main>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  data () {
    return {
      biography: "My name's Liz and I'm a front-end/ UX engineer based in London. Building on a background in both the creative and public affairs industries, I prototype, test, and develop innovative UI/UX solutions that blend design, technology, and strategy. With experience in small companies and startups, my favourite projects encompass agile methodologies, rapid prototyping, and lively, diverse teams."
    }
  }
}
</script>
