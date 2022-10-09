<template>
   <div class="lang_select">
      <div
         class="selec_container"
         @mouseleave="isVisible = false">
         <div
            @mouseenter="isVisible = !isVisible"
            class="icon"
            @touchstart="isVisible = !isVisible">
            <span>👅</span>
         </div>
         <div
            class="selects"
            :style="{ pointerEvents: isVisible ? 'auto' : 'none' }">
            <span
               v-for="(lang, index) in langs"
               @click="activeLang(lang.lang)"
               @touchstart="activeLang(lang.lang)"
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
      name: "lang_select",
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
               lang.active = langName === lang.lang;
               return lang;
            });
         },
      },
   };
</script>

<style lang="scss">
   .lang_select {
      position: absolute;
      z-index: 50;
      .selec_container {
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
         .selects {
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
               border-bottom: 2px solid transparent;

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
