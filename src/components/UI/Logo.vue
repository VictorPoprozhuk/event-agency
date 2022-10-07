<template>
    <router-link to="/">
        <div class="logo">
            M<span>O</span>ZGI
        </div>
    </router-link>
</template>

<script>
  export default {
    name: 'logo',
  }
</script>

<style lang="scss">
    .logo {
        display: flex;
        align-items: center;
        overflow: hidden;
        position: absolute;
        top: 24px;
        left: 50%;
        transform: translateX(-50%);

        span {
        }

        /*svg {*/
        /*   height: 46px;*/
        /*}*/
        /*path {*/
        /*   stroke: black;*/
        /*   animation: text 1s linear;*/
        /*}*/
    }

    @keyframes text {
        0% {
            fill: none;
        }
        100% {
            fill: black;
        }
    }
</style>
