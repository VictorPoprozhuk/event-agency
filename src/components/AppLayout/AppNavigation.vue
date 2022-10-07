<template>
   <div class="links">
      <app-link class="link-left link">Who?</app-link>
      <app-link class="link-bot link">What?</app-link>
      <app-link class="link-right link">Where?</app-link>
   </div>
</template>

<script>
   import AppLink from '../App/AppLink'

   export default {
      name: "links-app",
      components: {
         AppLink
      }
   };
</script>

<style lang="scss" scoped>
   .link {
      position: absolute;
      z-index: 40;
   }
   .link-left {
      left: 10px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      @media screen and (max-width: 1024px) {
         left: -5px;
      }
   }
   .link-bot {
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      @media screen and (max-width: 1024px) {
         bottom: 10px;
      }
   }
   .link-right {
      right: 10px;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      @media screen and (max-width: 1024px) {
         right: -10px;
      }
   }
</style>
