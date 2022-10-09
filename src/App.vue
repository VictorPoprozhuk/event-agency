<template>
   <running-line />
   <app-header />
   <app-router-view />
</template>

<script>
   import AppHeader from "./components/AppLayout/AppHeader/AppHeader.vue";
   import RunningLine from "./components/RunningLine.vue";
   import AppRouterView from "@/components/AppRouterView.vue";

   export default {
      components: {
         RunningLine,
         AppHeader,
         AppRouterView,
      },
   };
</script>

<style lang="scss">
   @font-face {
      font-family: "GrtskGiga";
      src: url("./assets/fonts/GrtskGiga-Medium.ttf");
   }

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   #app {
      font-family: "GrtskGiga", sans-serif;
      text-align: center;
      color: #2c3e50;
      width: 100vw;
      height: 100vh;
      background: #bebebe;
   }

</style>
