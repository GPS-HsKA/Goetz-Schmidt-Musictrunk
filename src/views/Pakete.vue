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
    <div class="pakete main-content">
        <div class="left-content slideUp">
            <h1>Pakete ...</h1>

            <router-link to="/referenzen"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

            <p class="subtxt">Was biete ich?</p>
            <p class="subtxt">Eine klare Transparenz der Leistungen und Kosten sind für mich ebenso
                ein Muss, wie die passende Stimmung auf der dazugehörigen Feier.</p>
            <p class="subtxt">Auf der rechten Seite findest du zwei individuelle Pakete, welche insgesamt
                auf unterschiedliche Veranstaltungen zugeschnitten sind. Zusätzlich hast du natürlich die
                Möglichkeit weitere Services jeweils in den Paketen hinzu zu buchen. Hierfür kannst du meinen
                Konfigurator verwenden.</p>
            <p class="subtxt">Sollte einmal nicht das Passende für dich dabei sein, kannst du mir immer gerne
                direkt eine E-Mail zukommen lassen oder mich telefonisch kontaktieren.</p>
            <p class="subtxt">Viel Spass bei der Auswahl!</p>
            <br>
            <br>
            <router-link to="/konfigurator"><img class="buttonTermin button" src="../assets/buttonKonfig.jpg"></router-link>
            <p>In Kürze verfügbar!</p>

            <router-link to="/anreise"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
        </div>

        <div class="right-content">
            <div class="hochzeit">
                <img class="imgRinge" src="../assets/rings.png">
                <p class="header centered">PAKET "HOCHZEIT"</p>
                <ul>
                    <li>persönliches Kennenlernen mit Planung und Besprechung der Hochzeit</li>
                    <li>Anfahrt am Vormittag der Hochzeit (siehe Abschnitt
                        <router-link to="/anreise">Anreise</router-link>
                        )
                    </li>
                    <li>Aufbau zeitnah vor Beginn der Veranstaltung</li>
                    <li>Bereitstellung des kompletten Equipments incl. Licht und Tonanlage</li>
                    <li>Individuelle Musikwünsche + Wunschliste für die Gäste bei Bedarf</li>
                    <li>Musikdarbietung bis 3 Uhr (individuelles Angebot für Zusatzzeiten möglich)</li>
                    <li>Abbau des Equipments nach der Veranstaltung</li>
                </ul>
                <p class="header centered">PAKETPREIS (OHNE ANFAHRT + TRANSPORT) <br> 650€</p>
            </div>
            <div class="geburtstag">
                <img class="imgBallon" src="../assets/baloon.png">
                <p class="header centered">PAKET "GEBURTSTAG/PARTY"</p>
                <ul>
                    <li>Anfahrt am Nachmittag der Veranstaltung (siehe Abschnitt
                        <router-link to="/anreise">Anreise</router-link>
                        )
                    </li>
                    <li>Aufbau zwei Stunden vor Beginn der Veranstaltung</li>
                    <li>Bereitstellung des kompletten Equipments incl. Licht und Tonanlage</li>
                    <li>Individuelle Musikwünsche</li>
                    <li>Musikdarbietung bis 3 Uhr (individuelles Angebot für Zusatzzeiten möglich)</li>
                    <li>Abbau des Equipments nach der Veranstaltung</li>
                </ul>
                <p class="header centered">PAKETPREIS (OHNE ANFAHRT + TRANSPORT) <br> 499€</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'pakete'
    };
</script>

<style scoped>
    .imgRinge {
        display: block;
        margin-top: -50px;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        height: auto;
    }

    .imgBallon {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100px;
        height: auto;
    }
</style>
