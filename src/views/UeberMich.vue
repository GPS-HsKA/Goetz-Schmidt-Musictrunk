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
        <div class="ueberMich main-content">
            <div class="left-content slideUp">
                <h1>Über mich ...</h1>

                <router-link to="/"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

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

                <router-link to="/referenzen"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
            </div>

            <div class="right-content">
                <img class="imgReferenzen1" src="../assets/ueberMich.jpg">
                <img class="imgReferenzen2" src="../assets/ueberMich2.jpg">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'uebermich'
    };
</script>

<style scoped>
    .imgReferenzen1 {
        width: 300px;
        height: auto;
        padding-top: 30px;
    }

    .imgReferenzen2 {
        width: 350px;
        height: auto;
        padding-bottom: 20px;
    }
</style>
