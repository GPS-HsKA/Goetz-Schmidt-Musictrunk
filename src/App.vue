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
            &copy; <router-link to="/musictrunk">musictrunk.de</router-link> | <router-link to="/goetz">goetz-schmidt.de</router-link>
            <br>
            v.1.2.2019
        </div>
    </div>
</template>

<style lang="scss" src="./global.scss">
</style>
