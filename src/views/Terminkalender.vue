<template>
  <div class="terminkalender main-content">
    <div class="left-content slideUp">
      <h2>Wann willst du feiern? ...</h2>

      <router-link to="/anreise"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

      <p class="subtxt">Ich biete dir hier die Möglichkeit einen Termin zu finden, an welchem ich
      für deine Feier verfügbar sein kann.</p>
      <p class="subtxt">Auf der rechten Seite findest du alle meine kommenden Termine und kannst
      bequem einen passenden Zeitpunkt auswählen.</p>


      <!--<router-link to="/uberMich"><img src="../assets/arrow-down.svg" class="arrow arrow-down"></router-link>-->
    </div>


      <div class="right-content">
          <calendar-view
                  :show-date="showDate"
                  class="calendar theme-default holiday-us-traditional holiday-us-official"
                  :disable-past="true"
                  :events="events"
                  locale="de"
                  @click-date="dateClicked">
            <calendar-view-header
                    slot="header"
                    slot-scope="t"
                    :header-props="t.headerProps"
                    @input="setShowDate">
            </calendar-view-header>
          </calendar-view>
        <br>
        <!--: is a shortcut for v-bind here-->
        <Kontaktformular class="kontakt" :selected-date="selectedDate"></Kontaktformular>
      </div>
  </div>
</template>

<script>
    import {CalendarView, CalendarViewHeader} from '../../node_modules/vue-simple-calendar';
    import Kontaktformular from '../components/Kontaktformular';


    require("../../node_modules/vue-simple-calendar/static/css/default.css");
    require("../../node_modules/vue-simple-calendar/static/css/holidays-us.css");

    export default {
        name: 'terminkalender',
        components: {
            //ES6 context with which you can specify the component direct
            Kontaktformular,
            CalendarView,
            CalendarViewHeader
        },
        data() {
            return {
                showDate: new Date(),
                events: [
                    {startDate: '2018-11-16', title: 'Gebucht'},
                    {startDate: '2018-11-22', title: 'Gebucht'},
                    {startDate: '2019-02-16', title: 'Gebucht'}],
                selectedDate: this.showDate
            }
        },
        methods: {
            setShowDate (day) {
                this.showDate = day;
            },
            dateClicked(date) {
                this.selectedDate = date;
            }
        }
    }
</script>

<!--scope will have the style only inside this vue file/template ... this will be in the shadow DOM-->
<style scoped>
  .calendar {
    color: #2c3e50;
    height: 350px;
    width: 500px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
