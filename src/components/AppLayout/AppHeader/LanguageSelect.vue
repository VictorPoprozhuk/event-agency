<template>
   <div class="lang-select">
      <div class="selec-container" @mouseleave="isVisible = false">
         <div
              @mouseenter="isVisible = true"
              class="icon"
            >
            <span> 👅 </span>
         </div>
         <div class="secects" :style="{ pointerEvents: isVisible ? 'auto' : 'none' }">
            <span
               @click="isVisible = false"
               v-for="(lang, index) in langs"
               :style="{
                  transitionDelay: `${index}` * 0.2 + 's',
                  opacity: isVisible ? 1 : 0,
               }"
               :key="lang"
               >{{ lang }}</span
            >
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "lang-select",
      data() {
         return {
            isVisible: false,
            langs: ["UA", "EN", "PL"],
         };
      },
   };
</script>

<style lang="scss">
   .lang-select {
      position: absolute;
      top: 27px;
      left: 26px;
      .selec-container {
         display: flex;
         justify-content: center;
         align-items: center;
         transition-delay: 1s;
         .icon {
            background: transparent;
            border: 1px solid rgb(109, 109, 109);
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            cursor: pointer;
            span {
               padding: 10px;
            }
         }
         .secects {
            display: flex;
            gap: 10px;
            margin-left: 20px;
            cursor: pointer;
            span {
               color: #373737;
               cursor: pointer;
               opacity: 0;
               transition: opacity 0.4s;

               &:hover {
                  transition: 0.3s;
                  transition-delay: 0s !important;
                  color: #a19d85;
               }
            }
         }
      }
   }
</style>
