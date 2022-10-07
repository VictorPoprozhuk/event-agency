<template>
   <div class="backdrop"></div>
</template>

<script>
   export default {
      name: "animation-pages",
   };
</script>

<style lang="scss" scoped>
   .backdrop {
      position: absolute;
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
</style>
