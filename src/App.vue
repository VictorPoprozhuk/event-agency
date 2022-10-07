<template>
    <bg-text-run/>
    <header-app/>
    <router-view v-slot="{ Component }">
        <transition :name="animationName" mode="out-in">
            <component :is="Component"/>
        </transition>
    </router-view>
</template>

<script>
  import HeaderApp from '@/components/HeaderApp.vue'

  export default {
    components: {
      HeaderApp
    },
    data () {
      return {
        animationName: 'false'
      }
    },
    mounted () {
      setTimeout(() => {
        this.animationName = 'fade'
      }, 0)
    }
  }
</script>

<style lang="scss">
    @font-face {
        font-family: 'Rubik';
        src: url('./fonts/Rubik-Bold.ttf');
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #app {
        font-family: "Rubik", sans-serif;
        text-align: center;
        color: #2c3e50;
        width: 100vw;
        height: 100vh;
        background: #bebebe;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: 0.5s ease;
    }

    .fade-enter-active:after,
    .fade-leave-active:after {
        position: fixed;
        content: "";
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        transition: 0.5s ease;
        z-index: 99;
    }

    .fade-enter-from:after {
        left: 0;
    }

    .fade-enter-to:after {
        left: 100%;
    }

    .fade-leave-from:after {
        left: -100%;
    }

    .fade-leave-to:after {
        left: 0;
    }
</style>
