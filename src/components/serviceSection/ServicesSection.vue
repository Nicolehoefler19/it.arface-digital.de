<template>
    <div class="servicesection_cmpnt">
        <div class="row">
            <div class="col-xl-6 decoCol">
                <img class="headlineDecoLine" alt="" src="../../assets/images/headlineDecor.png">
            </div>
            <div class="col-xl-6 headline justify-content-end">
                <h2 
                    tabindex="0"
                    :class="typingEffectActive ? 'animatedHeadline' : ''"
                    id="services" 
                    ref="headline">Digital <span class="textHighlight">Services</span></h2>
            </div>
        </div>
        <div class="row">
            <div class="col-xl-6">
                <h3>
                    <span>Web </span><span class="textHighlight">Design</span>
                </h3>
                <p>
                    From fancy to minimalism, I’m offering any type of design. I’m working with Figma as a design tool along with own design with AI as an additional assistant.
                </p>
                <p>
                    Get your desired website with some <span class="textHighlight">magic!</span> 
                </p>
            </div>
            <div class="col-xl-6"></div>
        </div>  
        <hr class="d-xl-none"/>
        <div class="row">
            <div class="col-xl-6"></div>
            <div class="col-xl-6">
                <h3>
                    <span>Web </span><span class="textHighlight">Development</span>
                </h3>
                <p>
                    Vue.js, Typescript, Next.js and many more, I will create you modern and accessible websites along with your desired design.
                </p>
                <p>
                    Together we will create something <span class="textHighlight">unique!</span> 
                </p>
            </div>
        </div>              
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const headline = ref<Element | null>(null);
const typingEffectActive = ref<boolean>(false);

const observer = new IntersectionObserver(([entry]) => {
    if(entry.isIntersecting) {
        if(entry.boundingClientRect.top > 0) {
            typingEffectActive.value = true
        }

        observer.unobserve(headline.value as Element)
    }
})

onMounted(() => {
    observer.observe(headline.value as Element);
});

onUnmounted(() => {
    observer.unobserve(headline.value as Element);
});
</script>

<style lang="scss">

.servicesection_cmpnt {
    height: 100%;
    .headline {
        z-index: 4;
    }

    .decoCol {
        width: 40vw;
        max-height: 300px;
        overflow: hidden;

        @media screen and (max-width: 1280px) {
            width: 100%;
        }
    }

    .headlineDecoLine {
        width: 100%;
        margin-top: 10px;
    }    

    h3 {
        @media screen and (max-width: 768px) {
            margin-top: 10px;
        }
    }
}

</style>