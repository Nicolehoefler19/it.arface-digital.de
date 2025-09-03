<template>
    <nav 
        :class="{'fixed-top': fixed}"
        class="header_cmpnt navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" aria-current="page" href="/">
                <img class="artfaceLogo" src="../../assets/images/ITLogo_white.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutMe">About Me</a>
                    </li>
                    <li class="nav-item contactButton">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const fixed = ref<boolean>(false);

onMounted(() => {
    fixed.value = window.innerWidth > 768
})
</script>
<style lang="scss">
.header_cmpnt {
    background: rgba(26, 0, 26, 0);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    
    .artfaceLogo {
        height: 66px;
        width: auto;   
        margin-left: 100px; 
        
        @media screen and (max-width: 768px) {
            margin-left: 10px;
        }
    }

    .collapse {
        font-family: 'Poppins', sans-serif;
        font-size: 1rem;
        margin-right: 100px;
        .nav-item {
            margin-left: 40px;
            margin-right: 40px;
            
            .nav-link {
                color: #FFFFFF;
                background-image: linear-gradient(to right, #ffffff 0%, #ffffff 100%);
                background-repeat: no-repeat;
                background-size: 0% 2px; /* Höhe der Linie */
                background-position: 0 100%;
                transition: background-size 0.3s ease-in-out;

                &:hover {
                    background-size: 100% 2px;
                }
            }

            .contactButton {
                font-family: 'Satisfy', sans-serif;
                border-radius: 20px;
                border: 2px solid #FF00BF;
                background: rgba(255, 0, 191, 0.2);
                padding: 10px 40px;
                font-size: 1.4rem;
            }
        }
    }
}
</style>
