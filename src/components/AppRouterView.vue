<template>
   <router-view v-slot="{ Component }">
      <transition
         :name="animationName"
         mode="out-in">
         <component :is="Component" />
      </transition>
   </router-view>
</template>

<script>
   export default {
      data() {
         return {
            animationName: "false",
         };
      },
      mounted() {
         setTimeout(() => {
            this.animationName = "fade";
         }, 0);
      },
   };
</script>

<style lang="scss">
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
      background: #ffcb46;
      background: -webkit-linear-gradient(to right, #bebebe, #ffcb46);
      background: linear-gradient(to right, #bebebe, #ffcb46);
      transition: 0.5s ease;
      z-index: 100;
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
