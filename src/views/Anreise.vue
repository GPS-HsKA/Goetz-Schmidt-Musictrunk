<template>
    <div class="anreise main-content">
        <div class="left-content slideUp">
            <h1>Anreise ...</h1>

            <router-link to="/pakete"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

            <p class="subtxt">Wie komme ich zu dir?</p>

            <router-link to="/terminkalender"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>
        </div>

        <div class="right-content">
            <div>
            <img class="img1" src="../assets/kompass.jpg">
            </div>
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
                Zusätzlich berechne ich dir eine Transportpauschale von 40-80€ für den Transport meines Equipments. Je nach Größe der Veranstaltung variiert das Ladevolumen, weshalb ein größerer PKW notwendig wird.
                <br>
                <br>
                Schreib mich einfach über den <router-link to="/terminkalender">Terminkalender</router-link> an, dann kann ich dir ein individuelles Angebot zukommen lassen oder dir weitere Informationen senden.
            </div>
            <div class="anreise">
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
    .img1 {
        width: 400px;
        height: auto;
        padding: 100px 50px 0px 50px;
    }
</style>
