<template>
   <div class="menu-btn">
      <span></span>
      <span></span>
      <span></span>
   </div>
</template>

<script>
   export default {};
</script>

<style scoped lang="scss">
   .menu-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 40px;
      height: 40px;
      position: absolute;
      transition: transform 0.9s linear;
      cursor: pointer;
      span {
         position: absolute;
         height: 3px;
         width: 100%;
         background: black;
         transition: 0.5s;
      }
      span:nth-child(1) {
         top: 8px;
      }
      span:nth-child(3) {
         bottom: 8px;
      }
   }

   .active {
      transition: 0.9s linear;
      z-index: 100;
      span {
         transition: 0.3s linear;
      }
      span:nth-child(1) {
         //     transform-origin: center center;
         transition-delay: 0.2s;
         top: 18.5px;
         transform: rotate(45deg);
      }
      span:nth-child(2) {
         transform: translateX(-20px);
         width: 0;
      }
      span:nth-child(3) {
         transition-delay: 0.2s;
         bottom: 18.5px;
         transform: rotate(-45deg);
         //     transform-origin: center center;
      }
   }
</style>
