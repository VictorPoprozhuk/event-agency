<template>
   <div class="main_text">
      <h1 :style="moveText">FULL-CYCLE <br />EVENT AGENCY</h1>
      <div class="circle_container">
         <div class="circle"></div>
         <circle-text class="circle_text_container" />
      </div>
   </div>
</template>
<script>
   import CircleText from "./CircleText.vue";

   export default {
      name: "main-app",
      components: {
         CircleText,
      },
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
            if (window.innerWidth > 768) {
               this.transformText = {
                  x: (window.innerWidth + e.x * 3) / 200 + "px",
                  y: (window.innerWidth + e.y * 3) / 200 + "px",
               };
            } else {
               this.transformText = {
                  x: "0",
                  y: "0",
               };
            }
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
   .main_text {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: fit-content;
      z-index: 5;

      .circle_container {
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
         @media screen and (max-width: 950px) and (max-height: 500px) {
            width: 350px;
            height: 350px;
         }

         @media screen and (max-width: 700px) and (max-height: 500px) {
            width: 280px;
            height: 280px;
         }

         @media screen and (max-width: 576px) {
            width: 350px;
            height: 350px;
         }
         @media screen and (max-width: 350px) {
            width: 250px;
            height: 250px;
         }
         .circle {
            width: 100%;
            height: 100%;
            background: #ffcb46;
            filter: blur(38px);
            border-radius: 50%;
            z-index: 5;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
         }
         .circle_text_container {
            @media screen and (max-width: 576px) {
               margin-right: 20px;
            }
         }
      }

      h1 {
         font-weight: 800;
         font-size: 70px;
         line-height: 90px;
         text-align: center;
         text-transform: uppercase;
         z-index: 10;
         color: #373737;
         cursor: default;
         @media screen and (max-width: 1024px) {
            font-size: 55px;
         }

         @media screen and (max-width: 768px) {
            width: 490px;
            font-size: 50px;
         }
         @media screen and (max-width: 576px) {
            font-size: 34px;
            line-height: 40px;
            width: 350px;
         }
         @media screen and (max-width: 950px) and (max-height: 500px) {
            font-size: 34px;
            line-height: 40px;
            width: 550px;
         }
         @media screen and (max-width: 700px) and (max-height: 500px) {
            font-size: 34px;
            line-height: 40px;
            width: 550px;
         }
         @media screen and (max-width: 350px) {
            font-size: 24px;
            line-height: 37px;
            width: 250px;
         }
      }
   }
</style>
