<template>
    <div class="homeMusictrunk main-content backgroundMusictrunk">
        <div>
            <nav>
                <div>
                    <router-link to="/musictrunk"><img src="../assets/logoMusictrunk.jpg" class="logoNavMusictrunk button"></router-link>
                </div>
                <ul>
                    <li>
                        <router-link to="/uebermich" class="button">Über mich</router-link>
                    </li>
                    <li>
                        <router-link to="/referenzen" class="button">Referenzen</router-link>
                    </li>
                    <li>
                        <router-link to="/pakete" class="button">Pakete</router-link>
                    </li>
                    <li>
                        <router-link to="/anreise" class="button">Anreise</router-link>
                    </li>
                    <li>
                        <router-link to="/terminkalender" class="button">Terminkalender</router-link>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="left-content"></div>

        <div class="right-content-light">
            <p class="headertxtMedium">Willkommen auf deiner Feier !</p>
            <br>
            <br>
            <p class="headertxtLarge">DJ Musictrunk</p>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'homeMusictrunk'
    };
</script>

<style>
    .backgroundMusictrunk {
        display: block;
        background: url('../assets/background.jpg');
        background-repeat: no-repeat;
        background-size: cover;
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
</style>

