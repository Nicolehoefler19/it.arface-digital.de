<template>
  <div class="appBody ">
    <Header></Header>
      <div class="content">
        <Banner></Banner>
        <ServiceSection></ServiceSection>
        <ProjectsSection></ProjectsSection>
        <MeSection></MeSection>
        <contactSection></contactSection>
      </div>      
    <FooterMenu></FooterMenu>
  </div>
</template>

<script setup>
import Header from './components/header/Header.vue';
import Banner from './components/banner/Banner.vue';
import ProjectsSection from './components/projectsSection/ProjectsSection.vue';
import MeSection from './components/meSection/MeSection.vue';
import ServiceSection from './components/serviceSection/ServicesSection.Vue';
import contactSection from './components/contactSection/contactSection.vue';
import FooterMenu from './components/Footer/footerMenu.vue';

</script>

<style lang="scss">
.appBody {
  background: repeating-linear-gradient(180deg, #AE00FF 0, #1A001A 100vh, #AE00FF 200vh);
  color: #FFFFFF;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  max-width: 100%;
  overflow: hidden;
  position: relative;

  .content {
    margin-right: 160px;
    margin-left: 160px;

    @media screen and (max-width: 768px) {
      margin-right: 40px;
      margin-left: 40px;
    }

    .headline {
      font-size: 7rem;

      span {
        width: auto;
      }
    }
  }

  .textHighlight {
    font-family: 'Satisfy', sans-serif;
  }

  .headlineDecor {
      width: 100%;
      margin-top: 10px;
  }   

  p {
    line-height: 60px;

    @media screen and (max-width: 1040px) {
      line-height: 50px;
      font-size: 1.5rem;
    }

    @media screen and (max-width: 768px) {
      line-height: 40px;
      font-size: 1.3rem;
    } 

    .textHighlight {
      font-size: 2.3rem;
    }
  }

  h1{
      font-size: 7rem;

      @media screen and (max-width: 768px) {
        font-size: 5rem;
        text-align: center;
      }
  }

  h3 {
      font-size: 5rem;

      @media screen and (max-width: 1040px) {
        font-size: 3rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 2rem;
      }
  }

  h2 {
      font-size: 7rem;

      @media screen and (max-width: 1280px) {
        font-size: 6rem;
        text-align: center; 
      }

      @media screen and (max-width: 1040px) {
        font-size: 5rem;
        text-align: center; 
      }

      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }
  }


  .animatedHeadline {
    @media screen and (min-width: 1280px) {
     overflow: hidden;
      border-right: .15em solid #FFFFFF;
      white-space: nowrap;
      margin: 0 auto;
      padding: 7px 0;
      animation: 
          typing 2s steps(30, end),
          blink-caret 1s step-end infinite, 
          stop-blink 3s 2s forwards;      
    }
 
 }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: #FFFFFF }
  }

  @keyframes stop-blink {
    0% {
      border-color: #FFFFFF  }
    10% {
      border-color: transparent  }
    100% {
      border-color: transparent
    }
  }
}
</style>
