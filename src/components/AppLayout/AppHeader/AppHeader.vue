<template>
   <header>
      <app-navigation />
      <div class="header__container">
         <lang-select />
         <logo />
      </div>
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
         Logo
      },
      name: "header-app",
   };
</script>

<style lang="scss" scoped></style>
