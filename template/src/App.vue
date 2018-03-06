<template>
  <div id="app">
    <img src="~imageBase/logo.png" alt="vue" style="position: absolute; top: -500px; left: 0;">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  created () {
    this.adaptive(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      const fromDepth = from.path.split('/').length{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  },
  methods: {
    adaptive () {
      const BASENUM = 750
      document.documentElement.style.fontSize = 100 * document.documentElement.clientWidth / BASENUM + 'px'
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
    background-color: #fbf9fe;
    max-width: 750px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    font-size: 16px;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
// 横向切换
// .vux-pop-out-enter {
//   opacity: 0;
//   transform: translate3d(-100%, 0, 0);
// }
// .vux-pop-out-leave-active {
//   opacity: 0;
//   transform: translate3d(100%, 0, 0);
// }
// .vux-pop-in-enter {
//   opacity: 0;
//   transform: translate3d(100%, 0, 0);
// }
// .vux-pop-in-leave-active {
//   opacity: 0;
//   transform: translate3d(-100%, 0, 0);
// }

// 纵向切换
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(0, 100%, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
</style>
