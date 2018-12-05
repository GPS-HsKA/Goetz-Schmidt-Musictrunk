<template>
    <div class="pakete main-content">
        <div class="left-content slideUp">
            <h1>Pakete ...</h1>

            <router-link to="/referenzen"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

            <p class="subtxt">Gestatten, ... Götz Schmidt</p>
            <p class="subtxt">Seit nun fast zehn Jahren bin ich auf diversen Hochzeiten, Geburtstagen und
                Partys um für die musikalische Untermalung und eine unvergessliche Stimmung zu sorgen.
                Dabei reizt mich besonders die Herausforderung die unterschiedlichen Facetten einer Hochzeit
                für einen Abend einzufangen und dem Brautpaar, sowie den Gästen einen unvergesslichen Abend
                zu bescheren.</p>
            <p class="subtxt">Über die Jahre habe ich mir eine große Auswahl an bekannten Musiktiteln
                für die unterschiedlichsten Anlässe zusammengesucht. Angetrieben von der Professionalität
                hat sich im Laufe der Zeit die ein oder andere technische Verbesserung bezüglich meines
                Equipments ergeben, womit ich sowohl für kleine, als auch große Veranstaltungen bestens
                gerüstet bin.</p>
            <p class="subtxt">Du möchtest mehr Information oder hast bereits eine konkrete Vorstellung?
                Dann schreib mir doch einfach über das Kontaktformular oder ruf mich direkt zu einem
                unverbindlichen Gespräch an.</p>
            <p class="subtxt">Alle nötigen Kontaktinformationen findest du am Ende dieser Seite.</p>

            <router-link to="/anreise"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
        </div>

        <div class="right-content">
            <div class="hochzeit">
                <img class="img1" src="../assets/rings.png">
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
                <img class="img2" src="../assets/baloon.png">
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
</template>

<script>
    export default {
        name: 'pakete'
    };
</script>

<style scoped>
    .img1 {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 150px;
        height: auto;
        padding: 0px 50px 0px 50px;
    }

    .img2 {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 150px;
        height: auto;
        padding: 0px 50px 0px 50px;
    }
</style>
