<template>
   <div
      class="links"
      :class="{ open: menuIsOpen, close: !menuIsOpen }">
      <div
         class="links-container"
         @click="changeMenu">
         <app-link class="link-left link">Who?</app-link>
         <app-link class="link-bot link">What?</app-link>
         <app-link class="link-right link">Where?</app-link>
      </div>
   </div>
   <button-menu-link
      class="menu-bnt"
      :class="{ active: menuIsOpen }"
      v-if="menuLinks"
      @click="changeMenu" />
</template>

<script>
   import AppLink from "../App/AppLink";
   import ButtonMenuLink from "@/components/App/ButtonMenuLink.vue";
   export default {
      name: "links-app",
      components: {
         AppLink,
         ButtonMenuLink,
      },
      data() {
         return {
            isVisibleMenu: false,
            width: window.innerWidth,
            menuIsOpen: false,
         };
      },
      computed: {
         menuLinks() {
            return this.width < 768;
         },
      },
      methods: {
         updateWidth(e) {
            this.width = e.target.innerWidth;
            console.log(e);
         },
         changeMenu() {
            this.menuIsOpen = !this.menuIsOpen;
         },
      },
      mounted() {
         window.addEventListener("resize", (e) =>
            this.updateWidth(e)
         );
      },
      unmounted() {
         window.removeEventListener("resize", (e) =>
            this.updateWidth(e)
         );
      },
   };
</script>

<style lang="scss" scoped>
   @media screen and (max-width: 768px) {
      .links {
         position: absolute;
         width: 100vw;
         height: 100vh;
         background: rgb(250, 221, 146);
         z-index: 120;
         transition: 1s linear;
         display: flex;
         align-items: center;
         justify-content: center;
      }
      .links-container {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         gap: 20px;

         .link {
            position: static;
            transform: rotate(0);
         }
      }
      .links.close {
         transform: translateY(-1000px);
      }
      .links.open {
         transform: transalteY(0);
      }
   }

   .link {
      position: absolute;
      z-index: 40;
   }
   .link-left {
      left: 0;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      @media screen and (max-width: 1024px) {
         left: -15px;
      }
   }
   .link-bot {
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      @media screen and (max-width: 1024px) {
         bottom: 10px;
      }
   }
   .link-right {
      right: -15px;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      @media screen and (max-width: 1024px) {
         right: -30px;
      }
   }
   .menu-bnt {
      position: absolute;
      right: 16px;
      top: 16px;
      z-index: 120;
   }
</style>
