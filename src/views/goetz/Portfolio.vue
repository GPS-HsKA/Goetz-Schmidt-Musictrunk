<template>
    <div class="portfolio main-content background">
        <div>
            <nav>
                <div>
                    <router-link to="/goetz"><img src="../../assets/logoGoetz.jpg" class="logoNavMusictrunk button"></router-link>
                </div>
                <ul>
                    <li>
                        <router-link to="/portfolio" class="button">Portfolio</router-link>
                    </li>
                    <li>
                        <router-link to="/Coding" class="button">Coding</router-link>
                    </li>
                    <li>
                        <router-link to="/reisen" class="button">Reisen</router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="left-content"></div>

        <div class="right-content-light">
            <p class="headertxtMedium">Willkommen</p>
            <br>
            <br>
            <p class="headertxtLarge">| Götz Phillipp Schmidt |</p>
            <br>
            <br>
            <div class="textBackground">
                <div class="headertxtLight">
                    Hier entsteht meine neue Webpräsenz!
                    <br>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'homeGoetz'
    };
</script>

<style>
    .background {
        display: block;
        background-repeat: no-repeat;
    }

    .headertxtLarge {
        font-size: 80px;
        text-shadow: 0 0 10px black;
        color: white;
    }

    .headertxtMedium {
        font-size: 40px;
        text-shadow: 2px 2px 5px white;
    }

    .headertxtLight {
        margin: 10px 300px 10px 300px;
        font-size: 16px;
        text-shadow: 0 0 10px white;
        color: black;
        text-align: center;
    }
</style>

