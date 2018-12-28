<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/" class="button">Home</router-link>
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
