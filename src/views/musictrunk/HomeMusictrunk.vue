<template>
    <div class="homeMusictrunk main-content backgroundMusictrunk">
        <div>
            <nav>
                <div>
                    <router-link to="/musictrunk"><img src="../../assets/logoMusictrunk.jpg" class="logoNavMusictrunk button"></router-link>
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
            <br>
            <br>
            <div class="textBackground">
                <div class="headertxtLight">
                    Du bist auf der Suche nach der passenden Stimmung auf deiner Feier und möchtest dafür die beste<br>
                    Preis/Leistung?
                    <br>
                    <br>
                    Ich biete dir eine individuelle Partyplanung mit einzelnen Kompnenten, die du dir selbst zusammenstellen
                    kannst. Somit bekommst du nur die Dinge die dir unbedingt wichtig sind für deine Feier.
                    <br>
                    <br>
                    Schau dich einfach hier auf meiner Webpräsenz um und vereinbare gleich einen
                    Termin mit mir um erstmal ganz unverbindlich über dein Vorhaben zu sprechen.
                    <br>
                    <br>
                    Ich freu mich auf deine Anfrage!
                    <br>
                    <br>
                    <router-link to="/terminkalender"><img class="button" src="../../assets/buttonTermin.jpg"></router-link>                </div>
            </div>
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
        background: url('../../assets/background.jpg');
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

    .headertxtLight {
        margin: 10px 300px 10px 300px;
        font-size: 16px;
        text-shadow: 0 0 10px white;
        color: black;
        text-align: center;
    }
</style>

