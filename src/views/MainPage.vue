<template>
   <div class="main">
      <company-heading />
   </div>
</template>

<script>
   import CompanyHeading from "@/components/CompanyHeading.vue";
   export default {
      name: "main-page",
      components: {
         CompanyHeading,
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
