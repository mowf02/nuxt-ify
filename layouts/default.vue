<template>
  <div>
    <Navigation />
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'

export default {
  components: {
    Navigation
  }
  // data () {
  //   return {
  //     isMobile: null
  //   }
  // },
  // mounted () {
  //   var mq = window.matchMedia('(min-width: 900px)')
  //   mq.addListener(this.WidthChange)
  //   this.WidthChange(mq)
  // },
  // methods: {
  //   WidthChange (mq) {
  //     if (mq.matches) {
  //       this.isMobile = false
  //     } else {
  //       this.isMobile = true
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import '~susy/sass/susy';
@import '~breakpoint-sass/stylesheets/breakpoint';
@import '~assets/styles/utils/all.scss';
@import '~assets/styles/global/all.scss';
@import '~assets/styles/layout/all.scss';

body {
  background: $color-brand--soft-red;
}
</style>
