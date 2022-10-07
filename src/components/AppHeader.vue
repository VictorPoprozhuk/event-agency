<template>
   <header>
      <links-main />
      <div class="header__container">
         <lang-select />
         <logo />
      </div>
   </header>
</template>

<script>
   import LangSelect from "@/components/LanguageSelect.vue";
   import LinksMain from "@/components/LinksMain.vue";

   export default {
      components: {
         LangSelect,
         LinksMain,
      },
      name: "header-app",
   };
</script>

<style lang="scss" scoped></style>
