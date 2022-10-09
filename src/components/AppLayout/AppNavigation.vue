<template>
   <div
      class="links"
      :class="{ open: menuIsOpen }">
      <div
         class="links_container"
         @click="changeMenu">
         <app-link class="link_left link">Who?</app-link>
         <app-link class="link_bot link">What?</app-link>
         <app-link class="link_right link">Where?</app-link>
      </div>
   </div>
   <button-menu-link
      class="menu_bnt"
      :class="{ active: menuIsOpen }"
      v-if="menuLinks"
      @click="changeMenu" />
</template>

<script>
   import AppLink from "../App/AppLink.vue";
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
            return this.width <= 768;
         },
      },

      methods: {
         updateWidth(e) {
            this.width = e.target.innerWidth;
            this.menuIsOpen = false;
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
         position: fixed;
         top: 0;
         right: -100%;
         bottom: 0;
         z-index: 85;

         display: flex;
         justify-content: center;
         align-items: center;
         flex-direction: column;

         transition: 0.5s linear;

         height: 100%;
         width: 100%;

         background: #c2c2c2;

         .links_container {
            z-index: 120;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 20px;

            .link {
               position: static;
               transform: none;
            }
         }
      }

      .links.open {
         right: 0;

         .links_container {
            .link {
               position: static;
               transform: none;
            }
         }
      }
   }

   .links {
      .link {
         position: absolute;
         z-index: 40;
      }

      .link_left {
         left: 0;
         top: 50%;
         transform: translateY(-50%) rotate(-90deg);

         @media screen and (max-width: 1024px) {
            left: -15px;
         }
      }

      .link_bot {
         bottom: 20px;
         left: 50%;
         transform: translateX(-50%);

         @media screen and (max-width: 1024px) {
            bottom: 10px;
         }
      }

      .link_right {
         right: -15px;
         top: 50%;
         transform: translateY(-50%) rotate(90deg);

         @media screen and (max-width: 1024px) {
            right: -30px;
         }
      }
   }

   .menu_bnt {
      position: absolute;
      right: 16px;
      top: 16px;
      z-index: 85;
   }
</style>
