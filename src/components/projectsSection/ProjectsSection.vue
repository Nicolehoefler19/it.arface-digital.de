<template>
    <div class="projectsection_cmpnt">
        <div class="row">
            <div class="col-xl-6 justify-content-end d-xl-none">
                <img class="headlineDecor" alt="" src="../../assets/images/headlineDecor.png">
            </div>
            <div class="col-xl-6 headline">
                <h2 
                    tabindex="0"
                    :class="typingEffectActive ? 'animatedHeadline' : ''"
                    ref="headline"
                    id="projects"
                >Digital <span class="textHighlight">Projects</span></h2>
            </div>
            <div class="col-xl-6 justify-content-end d-none d-xl-block">
                <img class="headlineDecor" alt="" src="../../assets/images/headlineDecor.png">
            </div>
        </div>
        <div class="row text-center textHighlight">
            <h3>Coming Soon!</h3>
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
.projectsection_cmpnt {
    margin-top: 40px;
    .headline {
        z-index: 4;
    }

    .headlineDecor {
        width: 100%;
        margin-top: 10px;
    }    

    h3 {
       padding: 200px;
       text-decoration: underline;

       @media screen and (max-width: 768px) {
        padding: 20px;
        margin: 100px auto;
    
       }
    }
}

</style>