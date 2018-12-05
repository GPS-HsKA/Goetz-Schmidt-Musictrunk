<template>
  <div id="app">
    <div class="container">
      <div class="inner">

        <nav>
          <router-link to="/" id="logo"><img src="./assets/logo.png" id="logoImage"></router-link>
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/uebermich">Über mich</router-link>
            </li>
            <li>
              <router-link to="/referenzen">Referenzen</router-link>
            </li>
            <li>
              <router-link to="/pakete">Pakete</router-link>
            </li>
            <li>
              <router-link to="/anreise">Anreise</router-link>
            </li>
            <li>
              <router-link to="/terminkalender">Terminkalender</router-link>
            </li>
          </ul>
        </nav>

        <transition name="fade" mode="out-in">
          <router-view />
        </transition>

      </div>
    </div>

    <div class="footer">
      <router-link to="/impressum" id="impressum">Impressum</router-link> |
      <router-link to="/datenschutz" id="datenschutz">Datenschutz</router-link><br>
      &copy; musictrunk.de | goetz-schmidt.de <br> v.1.0.2018
    </div>
  </div>
</template>

<style lang="scss" src="./global.scss">
</style>
