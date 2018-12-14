<template>
    <div class="home main-content img1">
        <br>
        <div class="mainPage-content">
            <div>
                DJ-Musictrunk
                <br>
                <router-link to="/musictrunk"><img src="../assets/bannerMusictrunk.jpg" class="logoImageSmall button"></router-link>
            </div>
            <div>
                Portfolio
                <br>
                <img src="../assets/bannerGoetz.jpg" class="logoImageSmall button">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'homeMain'
    };
</script>

<style scoped>
    .img1 {
        display: block;
        max-height: 80vh;
        max-width: 100vh;
        margin: 100px auto auto auto;
        background: url('../assets/welcomePage.jpg');
        background-repeat: no-repeat;
        background-size: contain;
    }
</style>
