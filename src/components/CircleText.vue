<template>
   <div class="circle-text-container">
      <div class="circle-text">
         <div class="center"></div>
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
   </div>
</template>

<script>
   export default {
      name: "circle-text",
   };
</script>

<style lang="scss" scoped>
   .circle-text {
      width: 115px;
      height: 115px;
      position: relative;
      animation: transform 5s;
      z-index: 25;
      &:hover {
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
      }
      svg {
         padding: 16px;
         display: block;
         overflow: visible;
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
   @keyframes circle {
      0% {
         transfrom: rotate(0deg);
      }
      100% {
         transform: rotate(-360deg);
      }
   }
</style>
