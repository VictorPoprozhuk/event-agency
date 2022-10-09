<template>
   <div class="lang-select">
      <div
         class="selec-container"
         @mouseleave="isVisible = false">
         <div
            @mouseenter="isVisible = !isVisible"
            class="icon">
            <span>👅</span>
         </div>
         <div
            class="secects"
            :style="{ pointerEvents: isVisible ? 'auto' : 'none' }">
            <span
               v-for="(lang, index) in langs"
               @click="activeLang(lang.lang)"
               :style="{
                  transitionDelay: `${index}` * 0.2 + 's',
                  opacity: isVisible ? 1 : 0,
                  borderBottom: lang.active ? '2px solid white' : '',
               }"
               :key="lang"
               >{{ lang.lang }}</span
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
            langs: [
               { lang: "UA", active: false },
               { lang: "EN", active: false },
               { lang: "PL", active: false },
            ],
         };
      },
      methods: {
         activeLang(langName) {
            this.isVisible = false;
            this.langs = this.langs.map((lang) => {
               langName === lang.lang
                  ? (lang.active = true)
                  : (lang.active = false);
               return lang;
            });
         },
      },
   };
</script>

<style lang="scss">
   .lang-select {
      position: absolute;

      .selec-container {
         display: flex;
         justify-content: center;
         align-items: center;
         transition-delay: 1s;
         @media screen and (max-width: 576px) {
            flex-direction: column;
         }
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
            @media screen and (max-width: 576px) {
               flex-direction: column;
               margin: 20px 0 0;
            }
            span {
               font-size: 16px;
               color: #373737;
               cursor: pointer;
               opacity: 0;
               transition: opacity 0.4s;
               padding-bottom: 2px;

               &:hover {
                  transition: 0.4s;
                  transition-delay: 0s !important;
                  color: #fdfdfd;
               }
            }
         }
      }
   }
</style>
