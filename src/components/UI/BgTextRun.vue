<template>
   <div class="bg-text">
      <div class="bg-conteiner">
         <div class="text1 text">
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
         <div class="text2 text">
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
      name: "bg-text-run",
   };
</script>

<style lang="scss">
   .bg-text {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      pointer-events: none;

      .bg-conteiner {
         display: flex;
         flex-direction: column;
         gap: 10px;
         transform: rotate(-30deg);
         z-index: 3;
         @media screen and (max-width: 1024px) {
            transform: rotate(140deg);
         }
         @media screen and (max-width: 768px) {
            transform: rotate(120deg);
         }
         @media screen and (max-width: 700px) {
            transform: rotate(60deg);
         }
      }
      .text1 {
         transform-origin: center center;
         transform: rotate(180deg) translateX(2000px);
      }
      .text2 {
         transform-origin: center center;
         transform: translateX(2000px);
      }

      .text {
         display: flex;
         white-space: nowrap;

         div {
            opacity: 0.2;
            animation: animate1 300s infinite linear;
            animation-delay: -300s;
         }

         span {
            -webkit-text-stroke: 1px #000;
            color: transparent;
            font-size: 52px;
            font-style: italic;
         }
      }
   }
   @keyframes animate1 {
      0% {
         transform: transalteX(100%);
      }
      100% {
         transform: translateX(-100%);
      }
   }
</style>
