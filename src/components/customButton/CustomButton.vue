<template>
    <a
        :href="buttonLink"
        :aria-label="'Redirect to external page ' + buttonText"
        class="customButton"
    >{{ buttonText }}</a>
</template>
<script lang="ts" setup>
defineProps<{
    buttonText: string;
    buttonLink: string;
}>();
</script>

<style lang="scss">
    .customButton {
        margin-left: 40px;
        margin-right: 40px;
        color: #FFFFFF;
        font-family: 'Satisfy', sans-serif;
        border-radius: 20px;
        border: 2px solid #FF00BF;
        background: rgba(255, 0, 191, 0.2);
        padding: 10px 60px;
        font-size: 3rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    
        transition: all 0.4s ease-in-out;

        @media screen and (max-width: 1200px) {
            font-size: 2rem;
            margin: 10px;
            padding: 10px 30px;
        }

        @media screen and (max-width: 768px) {
            max-width: 100%;
            font-size: 2rem;
        }

        &:hover {
            border: none;
            box-shadow:
                inset 0 0 50px #fff,
                inset 20px 0 80px #f0f,
                inset -20px 0 80px #0ff,
                inset 20px 0 300px #f0f,
                inset -20px 0 300px #0ff,
                0 0 50px #fff,
                -10px 0 80px #f0f,
                10px 0 80px #0ff;
            padding: 15px 70px;
            color: #1A001A;
        }
    }
</style>
