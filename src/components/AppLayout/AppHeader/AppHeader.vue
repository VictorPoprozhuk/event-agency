<template>
   <header>
      <lang-select class="lang_select" />
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
      z-index: 80;
   }
   .lang_select {
      top: 16px;
      left: 16px;
   }
</style>
