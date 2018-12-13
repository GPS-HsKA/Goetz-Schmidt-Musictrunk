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
        <div class="anreise main-content">
            <div class="left-content slideUp">
                <h1>Anreise ...</h1>

                <router-link to="/pakete"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

                <p class="subtxt">Wie komme ich zu dir?</p>

                <div class="anreise">
                    Du kommst nicht aus der Nähe?
                    <br>
                    <br>
                    Kein Problem!
                    <br>
                    Ich mache dir gern ein faires Angebot incl. Reise- und Transportkosten.
                    <br>
                    <br>
                    Bis zu einem Einzugsgebiet von 100 km kostet dich meine Anfahrt 0,30€ pro Kilometer.
                    <br>
                    <br>
                    Zusätzlich berechne ich dir eine Transportpauschale von 40-80€ für den Transport meines Equipments. Je nach Größe der
                    Veranstaltung variiert das Ladevolumen, weshalb ein größerer PKW notwendig wird.
                    <br>
                    <br>
                    Schreib mich einfach über den
                    <router-link to="/terminkalender">Terminkalender</router-link>
                    an, dann kann ich dir ein individuelles Angebot zukommen lassen oder dir weitere Informationen senden.
                </div>

                <router-link to="/terminkalender"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
            </div>

            <div class="right-content backgroundAnreise">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'anreise'
    };
</script>

<style scoped>
    .backgroundAnreise {
        display: block;
        background: url('../assets/anreiseBackground.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }
    .img1 {
        width: 400px;
        height: auto;
        padding: 100px 50px 0px 50px;
    }
</style>
