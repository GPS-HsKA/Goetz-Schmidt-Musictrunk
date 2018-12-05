<template>
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
      <img class="img1" src="../assets/ueberMich.jpg">
      <img class="img2" src="../assets/ueberMich2.jpg">
    </div>
  </div>
</template>

<script>
    export default {
        name: 'uebermich'
    }
</script>

<style scoped>
  .img1 {
    width: 400px;
    height: auto;
    padding: 100px 50px 0px 50px;
  }
  .img2 {
    width: 400px;
    height: auto;
    padding: 0px 50px 0px 50px;
  }
</style>
