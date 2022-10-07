<template>
   <div>
      <div class="main-text">
         <h1 :style="moveText">FULL-CYCLE <br />EVENT AGENCY</h1>
         <div class="circle-container">
            <div class="circle"></div>
            <circle-text />
         </div>
      </div>
   </div>
</template>
<script>
   export default {
      name: "main-app",
      data() {
         return {
            transformText: {
               x: 0,
               y: 0,
            },
         };
      },
      computed: {
         moveText() {
            return {
               transform: `translate(${this.transformText.x}, ${this.transformText.y})`,
            };
         },
      },
      methods: {
         mouseMove(e) {
            this.transformText = {
               x: (window.innerWidth + e.x * 2) / 100 + "px",
               y: (window.innerWidth + e.y * 2) / 100 + "px",
            };
         },
      },
      mounted() {
         window.addEventListener("mousemove", (e) =>
            this.mouseMove(e)
         );
      },
      unmounted() {
         window.removeEventListener("mousemove", (e) =>
            this.mouseMove(e)
         );
      },
   };
</script>

<style lang="scss" scoped>
   .main-text {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      z-index: 5;

      .circle-container {
         display: flex;
         align-items: flex-end;
         justify-content: flex-end;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         width: 578px;
         height: 578px;
         @media screen and (max-width: 1024px) {
            width: 478px;
            height: 478px;
         }
         @media screen and (max-width: 768px) {
            width: 478px;
            height: 478px;
         }
         @media screen and (max-width: 700px) {
            width: 294px;
            height: 294px;
         }
      }

      .circle {
         width: 578px;
         height: 578px;
         background: #ffcb46;
         filter: blur(38px);
         border-radius: 50%;
         z-index: 5;
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         @media screen and (max-width: 1024px) {
            width: 478px;
            height: 478px;
         }
         @media screen and (max-width: 768px) {
            width: 478px;
            height: 478px;
         }
         @media screen and (max-width: 700px) {
            width: 294px;
            height: 294px;
         }
      }

      h1 {
         font-weight: 700;
         font-size: 82px;
         line-height: 90px;
         text-align: center;
         text-transform: uppercase;
         z-index: 10;
         color: #373737;
         letter-spacing: 15px;
         cursor: default;
         @media screen and (max-width: 1024px) {
            font-size: 58px;
         }

         @media screen and (max-width: 768px) {
            width: 550px;
         }
         @media screen and (max-width: 700px) {
            font-size: 34px;
         }
      }
   }
</style>
