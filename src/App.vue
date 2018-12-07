<template>
    <div id="app">
        <div class="container">
            <div class="inner">
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </div>
        </div>

        <div class="footer">
            <router-link to="/impressum" id="impressum">Impressum</router-link>
            |
            <router-link to="/datenschutz" id="datenschutz">Datenschutz</router-link>
            <br>
            &copy; musictrunk.de | goetz-schmidt.de <br> v.1.0.2019
        </div>
    </div>
</template>

<style lang="scss" src="./global.scss">
</style>
