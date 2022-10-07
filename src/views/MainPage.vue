<template>
   <div class="main">
      <main-app />
   </div>
</template>

<script>
   import MainApp from "@/components/MainApp.vue";
   export default {
      name: "main-page",
      components: {
         MainApp,
      },
   };
</script>

<style lang="scss" scoped>
   .main {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100%;
   }
</style>
