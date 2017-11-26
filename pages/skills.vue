<template>
  <main class="container">
    <section class="container__inside">
      <div v-for="skill in skills">
        <h3>{{skill.sectionTitle}}</h3>
        <ul>
          <li v-for="item in skill.skillsList">{{item}}</li>
        </ul>
      </div>
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
      skills: [
        {
          sectionTitle: 'Development',
          skillsList: [
            'JavaScript (ES6)',
            'HTML5, CSS3 (SASS, LESS)',
            'Vue + Nuxt, ReactJS, RiotJS, JQuery',
            'Wordpress, PHP',
            'REST APIs',
            'Webpack, NPM',
            'Git + command line'
          ]
        },
        {
          sectionTitle: 'UX/Design',
          skillsList: [
            'NNG UX Certified',
            'Wireframing, prototyping, user-flows + user research',
            'Sketch, Adobe Creative Suite, InVision'
          ]
        },
        {
          sectionTitle: 'Other',
          skillsList: [
            'Agile + JIRA',
            'Copywriting',
            'Consulting + Client management'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~breakpoint-sass/stylesheets/breakpoint';
@import '~assets/styles/utils/all.scss';

  ul {
    line-height: $line-height--small;
  }

</style>
