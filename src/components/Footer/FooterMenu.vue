<template>
    <footer class="footer_cmpnt">
        <div class="row">
            <div class="col-md-4 col-sm-3">
                <nav class="navbar navbar-expand-sm align-items-center justify-content-center" aria-label="legal links menu">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="./imprint.html">Imprint</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./privacy-policy.html">Privacy Policy</a>
                            </li>
                        </ul>
                </nav>
            </div>
            <div class="col-md-4 col-sm-3">
                <p>Follow me:</p>
                <nav class="navbar navbar-expand-sm align-items-center justify-content-center" aria-label="social links menu">
                        <ul class="navbar-nav iconNavbar">
                            <li class="nav-item">
                                <a href="https://github.com/Nicolehoefler19" target="_blank" class="bi bi-github"></a>
                            </li>
                            <li class="nav-item">
                                <a href="https://nicolehoefler.medium.com/" target="_blank" class="bi bi-medium"></a>
                            </li>
                        </ul>
                </nav>
            </div>
            <div class="col-md-4 col-sm-5">
                <p>All rights reserved. © Nicole Höfler 2025</p>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.footer_cmpnt {
    background: #1A001A;
    padding: 40px;
    font-size: 1rem;

    ul {
        align-items: center;
    }

    .iconNavbar {
        flex-direction: row;

        a {
            font-size: 2rem;
        }

        margin-bottom: 10px;
    }

    li {
        margin: 10px 10px;
    }

    a {
        color: #FFFFFF;    
        text-decoration: none;
        
        &:hover, &:focus {
            color: #FF00BF;
        }
    }

    .col-sm-5 p {
        font-size: 0.8rem; 
        text-align: center; 
    }

    nav:nth-child(2) {
        padding-top: 0;
    }


    .col-sm-3 p {
        font-size: 0.8rem; 
        text-align: center; 
        margin-bottom: 0;
    }
}
</style>