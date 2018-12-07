<template>
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
        <div class="referenzen main-content">
            <div class="left-content slideUp">
                <h1>Meine Referenzen ...</h1>

                <router-link to="/uebermich"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

                <p class="subtxt">Was erwartet dich?</p>

                <p>Welche Ausrüstung kann ich dir bieten?</p>

                <ul>
                    <li>LD Systems Dave 15 G3</li>
                    <p class="textSmall">Soundsystem für mittlegroße Räume bis zu 150 Personen</p>
                    <li>1x Akku Lautsprecher aktiv mit Mikrofon</li>
                    <p class="textSmall">Für Außenbereich</p>
                    <li>Mischpult mit zwei Kanälen</li>
                    <p class="textSmall">Externe Geräte wie CD-Player oder MP3-Player können ohne Probleme
                        angeschlossen werden</p>
                    <li>Traktor Control S2 Midi Controller</li>
                    <p class="textSmall">Zur Steuerung der digitalen Musik</p>
                    <li>LED Lichterorgel RGB incl. Stativ</li>
                    <p class="textSmall">Bietet die Möglichkeit für unterschiedliche Lichtszenarien innen</p>
                    <li>4x LED Spot RGB Scheinwerfer</li>
                    <p class="textSmall">Können beliebig im Raum aufgestellt werden und bieten wechselndes
                        oder statisches Licht in unterschiedlichen Farben</p>
                    <li>2x LED Effektlichter</li>
                    <p class="textSmall">Lichteffekte für die Tanzfläche</p>
                    <li>24 Kanal DMX Controller</li>
                    <li>Nebelmaschine</li>
                    <li>Funkmikrofon</li>
                </ul>

                <router-link to="/pakete"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
            </div>

            <div class="right-content">
                <vue-picture-swipe
                        class="pictureSwiper"
                        :items="items">
                </vue-picture-swipe>
            </div>
        </div>
    </div>
</template>

<script>
    import VuePictureSwipe from '../../node_modules/vue-picture-swipe';

    export default {
        name: 'referenzen',
        data () {
            return {
                items: [
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_6_1.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_6_1.jpg',
                        w: 400,
                        h: 600
                    },
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_4_1.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_4_1.jpg',
                        w: 400,
                        h: 600
                    },
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_1_1.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_1_1.jpg',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_2_1.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_2_1.jpg',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_2_2.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_2_2.jpg',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_2_3.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_2_3.jpg',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_3_1.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_3_1.jpg',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'http://www.goetz-schmidt.de/img/references/ref_5_1.jpg',
                        thumbnail: 'http://www.goetz-schmidt.de/img/references/thumbs/ref_5_1.jpg',
                        w: 600,
                        h: 400
                    }

                ]
            };
        },
        components: {
            VuePictureSwipe
        }
    };
</script>

<style scoped>
 .pictureSwiper {
     padding: 0px 50px 0px 50px;
 }
</style>
