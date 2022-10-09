<template>
   <div class="circle-text-container">
      <div class="circle-text">
         <svg viewBox="0 0 100 100">
            <path
               d="M 0,50 a 50,50 0 1,1 0,1 z"
               id="circle" />
            <text>
               <textPath xlink:href="#circle">
                  showreel showreel showreel
               </textPath>
            </text>
         </svg>
      </div>
      <div class="center"></div>
   </div>
</template>

<script>
   export default {
      name: "circle-text",
   };
</script>

<style lang="scss" scoped>
   .circle-text-container {
      position: relative;
      z-index: 25;
      &:hover,
      &:active {
         animation: circle 5s infinite linear;
      }
      .center {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 8px;
         height: 8px;
         border-radius: 50%;
         background: #000;
         z-index: 10;
         @media screen and (max-width: 576px) {
            width: 5px;
            height: 5px;
         }
      }
      .circle-text {
         width: 115px;
         height: 115px;

         @media screen and (max-width: 1024px) {
            width: 110px;
            height: 110px;
         }
         @media screen and (max-width: 768px) {
            width: 100px;
            height: 100px;
         }
         @media screen and (max-width: 576px) {
            width: 80px;
            height: 80px;
         }
         @media screen and (max-width: 350px) {
            width: 50px;
            height: 50px;
         }

         svg {
            padding: 10px;
            display: block;
            overflow: visible;
            width: 100%;
         }
         path {
            fill: none;
         }
         textPath {
            font-size: 14px;
            letter-spacing: 2px;
            fill: white;
         }
      }
   }

   @keyframes circle {
      0% {
         transform: rotate(0deg);
      }
      100% {
         transform: rotate(-360deg);
      }
   }
</style>
