<template>
      <router-link to="/test">
         <span>
            <slot></slot>
         </span>
      </router-link>
</template>

<script>
   export default {
      name: "app-link",
   };
</script>

<style scoped lang="scss">
   a {
      text-decoration: none;
   }
   span {
      color: #373737;
      position: relative;
      z-index: 40;

      &:after {
         content: "";
         position: absolute;
         left: 0;
         bottom: -1px;
         transform: scaleX(0);
         transform-origin: bottom right;
         transition: transform 0.65s ease-out;
         height: 2px;
         width: 100%;
         background-color: #fff;
      }
      &:hover {
         transition: 0.4s;
         color: white;

         &:after {
            transform: scaleX(1);
            transform-origin: bottom left;
         }
      }
   }
</style>
