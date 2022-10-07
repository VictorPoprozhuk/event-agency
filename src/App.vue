<template>
   <bg-text-run />
   <header-app />
   <!-- <animation-pages /> -->
   <router-view v-slot="{ Component }">
      <transition name="fade">
         <component :is="Component" />
      </transition>
   </router-view>
</template>

<script>
   import HeaderApp from "@/components/HeaderApp.vue";

   export default {
      components: {
         HeaderApp,
      },
      data() {
         return {
            animationPages: false,
         };
      },
      methods: {
         animation() {
            this.animationPages = true;
            setTimeout(() => {
               this.animationPages = false;
            }, 2000);
         },
      },
      // watch: {
      //    $route: function () {
      //       this.animation();
      //    },
      // },
   };
</script>

<style lang="scss">
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@700&display=swap");
   #app {
      font-family: "Rubik", sans-serif;
      text-align: center;
      color: #2c3e50;
      width: 100vw;
      height: 100vh;
      background: #bebebe;
   }

   .fade::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 0;
      background: #b43434;
      animation: anim 1s ease-in-out;
      z-index: 50;
   }
   @keyframes anim {
      0% {
         top: 0;
         left: 0;
      }
      50% {
         width: 100%;
      }
      100% {
         right: 0;
         width: 0;
      }
   }

   .fade-enter-active,
   .fade-leave-active {
      // transition: opacity 4s ease;
   }

   .fade-enter-from,
   .fade-leave-to {
      opacity: 0;
   }
</style>
