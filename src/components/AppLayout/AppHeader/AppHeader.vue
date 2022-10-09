<template>
   <header>
      <lang-select class="lang-select" />
      <logo class="logo" />
      <app-navigation />
   </header>
</template>

<script>
   import LangSelect from "./LanguageSelect.vue";
   import AppNavigation from "@/components/AppLayout/AppNavigation.vue";
   import Logo from "./Logo.vue";

   export default {
      components: {
         LangSelect,
         AppNavigation,
         Logo,
      },
      name: "header-app",
   };
</script>

<style lang="scss" scoped>
   .logo {
      position: absolute;
      top: 16px;
      left: 50%;
      transform: translateX(-50%);
   }
   .lang-select {
      top: 16px;
      left: 16px;
   }
</style>
