<template>
    <div class="banner_cmpnt">
        <div class="row">
            <div class="col-md-12 textContent">
                <div class="bannerHeadlines">
                    <h1>
                        <span class="d-none d-xl-inline">Digital </span><span class="d-none d-xl-inline textHighlight">Architect</span>
                        <br class="d-none d-xl-inline">
                        <span>Digital </span><span class="textHighlight">Artface</span>                              
                    </h1>
                </div>
                <div class="subline">
                    <span class="fw-bold d-md-none">Web Design &<br> Web Development</span>
                    <span class="fw-bold d-none d-md-block">Web Design | Web Development</span>
                </div>
                <div class="buzzWords">
                    <span>Creative.</span>
                    <br>
                    <span>Modern.</span>
                    <br>
                    <span>Accessible.</span>
                </div>
            </div>
            <div class="col-md-12">
            </div>
            <img class="fantasyFigure" src="../../assets/images/Banner.png" alt="" />
        </div>
        <div class="row d-md-none scrollDownButton">
            <a href="#services" aria-label="Scroll down to services section">
                <p>Scroll down</p>
                <i class="bi bi-arrow-down-circle"></i>              
            </a>
        </div>
    </div>
</template>

<style lang="scss">
.banner_cmpnt {
    height: 900px;

    @media screen and (max-width: 768px) {
        height: 700px;
    }

    .bannerHeadlines {
        font-size: 6rem;
        position: relative;
        margin-top: 20%;

        @media screen and (max-width: 768px) {
            margin-top: 0px;
            margin-bottom: 40px;
        }
    }

    .fantasyFigure {
        position: absolute;
        height: auto;
        width: 100vw;
        top: 50px;
        left: 0;

        @media screen and (max-width: 1280px) {
            min-width: 150vw;
            left: -25%;
            top: 0px;
            
        }

        @media screen and (max-width: 1024px) {
            min-width: 200vw;
            left: -50%;
            top: 0px;
        }

        @media screen and (max-width: 768px) {
            min-width: 300vw;
            left: -100%;
            top: 150px;
        }
    }

    .textContent {
        z-index: 4;
    }

    .subline, .buzzWords {
        font-size: 1.5rem;
        
        @media screen and (max-width: 768px) {
            font-size: 1.5rem;
            text-align: center;
            text-shadow: rgba(0, 0, 0, 0.9) 0px 0px 40px;
        }

    }

    .subline {
        @media screen and (max-width: 768px) {
            margin-top: 50px;
        }
    }

    .buzzWords {
        margin-top: 20px;
        letter-spacing: 5px;
    }

    .scrollDownButton a{
        position: relative;
        z-index: 20;
        margin-top: 100px;
        text-align: center;
        color: #FFFFFF; 
        text-decoration: none;

        p {
            font-weight: lighter;
            font-size: 1.2rem;
            margin-bottom: -10px;
        }

        i {
            font-size: 2.4rem;
            padding-top: 0;
        }
    }
}
</style>