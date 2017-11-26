<template>
  <main class="container">
    <div class="container__inside">
      <h1>Contact</h1>
      <ul>
        <li v-for="item in contactLinks">
          <a :href="item.link" v-html="item.linkText"></a>
        </li>
      </ul>
    </div>
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
      contactLinks: [
        {
          linkText: 'Github',
          link: 'https://github.com/mowf02'
        },
        {
          linkText: 'LinkedIn',
          link: 'https://www.linkedin.com/profile/view?id=AAIAAAv6G1MB34PcAuG-BWnzNgv3v4RK7d5tuS0&trk=nav_responsive_tab_profile_pic'
        },
        {
          linkText: 'Email',
          link: 'mailto:hello@lizmowforth.com?Subject=Hello'
        }
      ]
    }
  }
}
</script>
