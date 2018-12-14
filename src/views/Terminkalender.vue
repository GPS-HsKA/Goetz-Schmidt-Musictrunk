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
        <div class="terminkalender main-content">
            <div class="left-content slideUp">
                <h2>Wann willst du feiern? ...</h2>

                <router-link to="/anreise"><img src="../assets/arrow-up.svg" class="arrow arrow-up"></router-link>

                <p class="subtxt">Ich biete dir hier die Möglichkeit einen Termin zu finden, an welchem ich
                    für deine Feier verfügbar sein kann.</p>
                <p class="subtxt">Auf der rechten Seite findest du alle meine kommenden Termine und kannst
                    bequem einen passenden Zeitpunkt auswählen.</p>

                <Kontaktformular class="kontakt" :selected-date="selectedDateValue"></Kontaktformular>
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
            </div>
        </div>
    </div>
</template>

<script>
    import {CalendarView, CalendarViewHeader} from '../../node_modules/vue-simple-calendar';
    import Kontaktformular from '../components/Kontaktformular';

    require('../../node_modules/vue-simple-calendar/static/css/default.css');
    require('../../node_modules/vue-simple-calendar/static/css/holidays-us.css');

    export default {
        name: 'terminkalender',
        components: {
            //ES6 context with which you can specify the component direct
            Kontaktformular,
            CalendarView,
            CalendarViewHeader
        },
        data () {
            return {
                showDate: new Date(),
                events: [
                    {startDate: '2018-11-16', title: 'Gebucht'},
                    {startDate: '2018-12-20', endDate: '2019-01-01', title: 'Winterpause'},
                    {startDate: '2019-02-16', title: 'Gebucht'},
                    {startDate: '2019-02-18', endDate: '2019-02-24', title: 'Urlaub'},
                    {startDate: '2019-02-08', endDate: '2019-02-10', title: 'Geblockt'},
                    {startDate: '2019-03-01', endDate: '2019-03-03', title: 'Geblockt'},
                    {startDate: '2019-03-08', endDate: '2019-03-10', title: 'Geblockt'},
                    {startDate: '2019-03-22', endDate: '2019-03-24', title: 'Geblockt'},
                    {startDate: '2019-05-24', endDate: '2019-05-16', title: 'Urlaub'},
                    {startDate: '2019-08-17', title: 'Gebucht'},
                    {startDate: '2019-09-07', title: 'Gebucht'},
                    {startDate: '2019-09-14', title: 'Gebucht'},
                    {startDate: '2019-08-31', title: 'Gebucht'},
                    {startDate: '2019-10-25', endDate: '2019-11-03', title: 'Urlaub'},],
                selectedDate: this.showDate,
                selectedDateValue: ''
            };
        },
        methods: {
            setShowDate (day) {
                this.showDate = day;
            },
            dateClicked (date) {
                date = this.parseDate(date);
                this.selectedDate = date;
            },
            parseDate(date) {
                var today = new Date(date);
                var dd = today.getDate();
                var mm = today.getMonth()+1;
                var yyyy = today.getFullYear();
                if(dd<10) {
                    dd='0'+dd
                }
                if(mm<10) {
                    mm='0'+mm
                }
                today = dd+'.'+mm+'.'+yyyy;
                this.selectedDateValue = today;
            }
        }
    };
</script>

<!--scope will have the style only inside this vue file/template ... this will be in the shadow DOM-->
<style scoped>
    .calendar {
        color: #2c3e50;
        height: 350px;
        width: 600px;
        margin-top: 200px;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
    }
</style>
