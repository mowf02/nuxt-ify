<template>
  <header class="navigation" :class="{ '-is-active': activeMobileNav && isMobile }">
    <ul class="navigation__items">
      <li v-for="item in menuItems" @click="toggleMenu()">
        <nuxt-link :to="item.link" rel="home">{{item.linkText}}</nuxt-link>
      </li>
    </ul>
    <div class="navigation__mobile">
      <a class="navigation__burger" @click="toggleMenu()">
        <span></span>
        <span></span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isMobile: null,
      activeMobileNav: '',
      menuItems: [
        {
          linkText: 'Liz Mowforth',
          link: '/'
        },
        {
          linkText: 'About',
          link: '/about'
        },
        {
          linkText: 'Skills',
          link: '/skills'
        },
        {
          linkText: 'Contact',
          link: '/contact'
        }
      ]
    }
  },
  mounted () {
    if (this.$route.query.s) {
      this.activeMobileNav = true
    }
    var mq = window.matchMedia('(min-width: 900px)')
    mq.addListener(this.WidthChange)
    this.WidthChange(mq)
  },
  methods: {
    toggleMenu () {
      if (this.isMobile) {
        this.activeMobileNav = !this.activeMobileNav
        this.scrollLock()
        document.addEventListener('touchmove', function (e) {
          if (this.activeMobileNav) {
            e.preventDefault()
          }
        }, false)
      }
    },
    scrollLock () {
      document.documentElement.classList.toggle('is-disabled')
    },
    WidthChange (mq) {
      if (mq.matches) {
        this.isMobile = false
      } else {
        this.isMobile = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~susy/sass/susy';
@import '~breakpoint-sass/stylesheets/breakpoint';
@import '~assets/styles/utils/all.scss';
@import '~assets/styles/global/all.scss';

.navigation {
  background: $color-brand--soft-red;
  font-family: $font-family--base;
  height: 100vh;
  position: fixed;
  top: calc( -100vh + 60px );
  transition: $transition--default;
  width: 100%;
  z-index: $z-index--first;

  @include breakpoint($breakpoint--tablet--large) {
    height: 100vh;
    left: 0;
    top: 0;
    transition: none;
    width: 9em;
  }

  ul {
    display: none;

    @include breakpoint($breakpoint--tablet--large) {
      display: block;
    }
  }

  &.-is-active {
    padding: 40px 0;
    top: 0;

    @include breakpoint($breakpoint--tablet--large) {
      padding: 0;
    }

    ul {
      display: block;
    }

    span {
      &:first-child {
        transform: rotate(-45deg);
        top: .3em;
      }

      &:last-child {
        transform: rotate(45deg);
        top: .3em;
      }
    }
  }

  &__mobile {
    position: fixed;
    display: block;
    top: 1.6em;
    right: 1.25em;
    width: 1.25em;
    height: 1.25em;

    @include breakpoint($breakpoint--tablet--large) {
      display: none;
    }

    a {
      display: block;
      opacity: 1;
      width: 1.25em;
      height: 1.25em;

      &:hover {
        opacity: 1;
      }
    }

    span {
      background: $color-shade--black;
      display: block;
      height: 0.125em;
      position: absolute;
      width: 1.25em;

      &:first-child {
        top: .1em;
      }

      &:last-child {
        top: .7em;
      }
    }

    &__burger {
      transition: $transition--default;
    }
  }

  ul {
    margin-top: 4em;

    @include breakpoint($breakpoint--tablet--large) {
      margin: 0;
    }

    li {
      display: block;
      padding: 1.6em 0 0 2em;
      position: relative;

      @include breakpoint($breakpoint--tablet--large) {
        padding: .5em 0 0 1.8em;
      }

      &:first-child {
        left: 2em;
        line-height: normal;
        opacity: 1;
        padding: 0;
        position: absolute;
        top: 1.7em;

        @include breakpoint($breakpoint--tablet--large) {
          left: 0;
          padding: 3em 1.8em;
          position: relative;
        }

        a:hover {
          opacity: 1;
        }
      }

      a {
        opacity: .4;
        transition: $transition--default;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .nuxt-link-active {
    opacity: 1;
  }
}
</style>
