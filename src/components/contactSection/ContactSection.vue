<template>
    <div class="contactsection_cmpnt">
        <div class="row">
            <img src="../../assets/images/finishDecor.png" alt="" class="headlineDecor">
        </div>
        <div class="row">
            <div class="col-xl-6">
                <h2 id="contact" tabindex="0">Let's do some <span class="textHighlight">MAGIC!</span></h2>
                <br>
                <p>Together we will build something amazing!</p>
                <img src="../../assets/images/headlineDecor.png" alt="" class="headlineDecor">
            </div>
            <div class="col-xl-6">
                <div class="contactForm text-center d-flex flex-column justify-content-center align-items-center">
                    <div class="row"></div>
                    <p class="formHeadline">What would you like to do next?</p>
                    <a aria-label="Send Email to Nicole Höfler" href="mailto:n.hoefler@artface-digital.de">Send me directly a message <i class="bi bi-arrow-right"></i></a>
                    <a aria-label="Redirect to google calendar booking page for booking consultation call for free" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ23dcNTnS4tvxTeDvJu61AvCnB426Bf0qX5jLoSvZFNaJpLgOporns6X7xTxJFxAI0HsHnLuyD1" target="_blank">Book a free consultation call <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </div>        
    </div>

</template>

<style lang="scss">
.contactsection_cmpnt {
    margin-bottom: 40px;
    .contactForm {
        background: #ff00bf3d;
        border: 2px solid #FF00BF;
        border-radius: 10px;
        padding: 10px;
        height: 100%;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

        .formHeadline {
           text-decoration: underline; 
           
            @media screen and (max-width: 768px) {
                font-size: 1rem;
            }
        }

        a {
            color: #FFFFFF;
            border-radius: 20px;
            border: 2px solid #FF00BF;
            background: rgba(255, 0, 191, 0.2);
            padding: 10px 60px;
            font-size: 1.4rem;
            margin: 10px;
            transition: all 0.4s ease-in-out;

            @media screen and (max-width: 768px) {
                font-size: 1rem;
                padding: 10px 40px;
            }

            &:hover {
                border: none;
                box-shadow:
                    inset 0 0 30px #fff,
                    inset 20px 0 60px #f0f,
                    inset -20px 0 60px #0ff,
                    inset 20px 0 200px #f0f,
                    inset -20px 0 200px #0ff,
                    0 0 30px #fff,
                    -10px 0 50px #f0f,
                    10px 0 50px #0ff;
                padding: 15px 90px;
                color: #1A001A;
            }
        }

        a {
            text-decoration: none;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }
    }
    i {
        margin-right: 15px;
    }

    .headlineDecor {
        @media screen and (max-width: 768px) {
            margin-bottom: 20px;
        }
    }
}
</style>