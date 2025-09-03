<template>
    <div class="mesection_cmpnt">
        <div class="row">
            <div class="col-xl-6">
                <img class="headlineDecor" alt="" src="../../assets/images/headlineDecor.png">
            </div>
            <div class="col-xl-6 headline justify-content-end">
                <h2
                    tabindex="0"   
                    :class="typingEffectActive ? 'animatedHeadline' : ''"
                    ref="headline"
                    id="aboutMe">Digital <span class="textHighlight">Me</span></h2>
            </div>            
        </div>
        <div class="row">
            <div class="col-lg-6 imageContainer">
                <img src="../../assets/images/me.jpg" alt="">
            </div>
            <div class="col-xl-6">
                <p>Hi, my name is Nicole! </p>
                <br class="d-none d-sm-block">
                <p>I love <span class="textHighlight">programming</span>, but also <span class="textHighlight">designing
                </span> stuff. 
                <br>I believe that every idea can be made into something magical and unique.
                <br>Besides, I really enjoy gaming and fantasy based 3D styles.
                <br>Sometimes I’m doing some writing.</p>
                <br>
                <h3 class="text-center textHighlight">Check out!</h3>
                <div class="row buttonRow justify-content-center">
                    <div class="col-xl-6 col-md-6 text-center">
                        <CustomButton buttonText="GitHub" buttonLink="https://github.com/Nicolehoefler19"></CustomButton>
                    </div>
                    <div class="col-xl-6 col-md-6 text-center">
                        <CustomButton buttonText="Medium" buttonLink="https://nicolehoefler.medium.com/"></CustomButton>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CustomButton from '../customButton/customButton.vue';

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
.mesection_cmpnt {
    h3 {
        margin-bottom: 30px;
    }

    .headlineDecor {
        width: 100%;
        margin-top: 10px;
    }    

    .imageContainer img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;  
    
        @media screen and (max-width: 768px) {
            margin: 20px auto;
        }
    }

    .buttonRow {
        margin-bottom: 30px;
        
        .col-md-6 {
            margin: 20px auto;
        }
    } 
}
</style>