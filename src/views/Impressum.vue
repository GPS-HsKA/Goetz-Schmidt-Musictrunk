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
        <div class="impressum main-content">
            <div class="left-content slideUp">
                <h1>Impressum</h1>
            </div>

            <div class="right-content">
                <div>
      <span class="header">
      VERANTWORTLICHER
      </span>
                    <br>
                    <br>
                    <p class="centered">Götz Schmidt <br>
                        Münchener Str. 8
                        <br>
                        <br>
                        85435 Erding
                        <br>
                        <br>
                        E-Mail: <a href="mailto:info@goetz-schmidt.de">Senden</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'impressum'
    };
</script>

<style scoped>
</style>
