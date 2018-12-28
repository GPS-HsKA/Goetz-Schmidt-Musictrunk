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
                <router-link to="/goetz"><img src="../assets/bannerGoetz.jpg" class="logoImageSmall button"></router-link>
            </div>
        </div>
        <div class="socialIcons">
            <img class="icon button" src="../assets/Instagram.svg"/>
            <img class="icon button" src="../assets/Youtube.svg"/>
            <img class="icon button" src="../assets/LinkedIn.svg"/>
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

    .socialIcons {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 600px;
        margin-right: auto;
        margin-left: auto;
    }

    .icon {
        width: 50px;
        height: 50px;
    }
</style>
