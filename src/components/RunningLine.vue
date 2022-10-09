<template>
   <div class="running_text">
      <div class="text_container">
         <div class="line_1 line">
            <div>
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
            </div>
            <div>
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
            </div>
         </div>
         <div class="line_2 line">
            <div>
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
            </div>
            <div>
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
               <span
                  >FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT
                  AGENCY</span
               >
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "running-line",
   };
</script>

<style lang="scss">
   .running_text {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      pointer-events: none;

      .text_container {
         display: flex;
         flex-direction: column;
         gap: 10px;
         transform: rotate(-30deg);
         z-index: 0;
         @media screen and (max-width: 1024px) {
            transform: rotate(140deg);
         }
         @media screen and (max-width: 768px) {
            transform: rotate(120deg);
         }
         @media screen and (max-width: 576px) {
            transform: rotate(123deg);
         }
      }
      .line_1 {
         transform-origin: center center;
         transform: rotate(180deg) translateX(2000px);
      }
      .line_2 {
         transform-origin: center center;
         transform: translateX(2000px);
      }

      .line {
         display: flex;
         white-space: nowrap;

         div {
            opacity: 0.2;
            animation: background_text_animation 700s infinite linear;
            animation-delay: -400s;
         }

         span {
            -webkit-text-stroke: 1px #000;
            color: transparent;
            font-size: 52px;
            font-style: italic;
         }
      }
   }
   @keyframes background_text_animation {
      0% {
         transform: transalteX(100%);
      }
      100% {
         transform: translateX(-100%);
      }
   }
</style>
