<template>
    <form class="contactForm" title="Kontaktformular">
        <div>
            <p>Name: <br>
                <input v-model="userInput.name" title="Name"/>
            </p>
            <p>Datum: <br>
                <input placeholder="Bitte im Kalender wählen" v-model="selectedDate" title="Termin"/>
            </p>
            <p>E-Mail Adresse: <br>
                <input v-model="userInput.email" title="E-Mail"/>
            </p>
            <p>
                <input id="checkboxData" type="checkbox" v-model="checkBox" title="Datenschutz">
                <label for="checkboxData">Ich habe die
                    <router-link to="/Datenschutz">Datenschutzvereinbarung</router-link>
                    gelesen und akzeptiert</label>
            </p>
            <p id="messageContainer">Nachricht: <br>
                <textarea placeholder="Bitte gib hier deine Nachricht ein ..." class="textarea" v-model="userInput.message"
                          title="Nachricht"></textarea>
            </p>
            <img class="buttonTermin button" src="../assets/buttonNachricht.jpg" @click="sendMessage">
            <br>
            <br>
            {{ response }}
        </div>
    </form>
</template>

<script>
    import axios from '../../node_modules/axios';
    import moment from '../../node_modules/moment';

    export default {
        name: 'kontaktformular',
        data () {
            return {
                userInput: {},
                response: '',
                checkBox: false
            };
        },
        props: {
            selectedDate: {}
        },
        methods: {
            sendMessage () {
                if (this.userInput.name === '' |
                    this.userInput.email === '' |
                    this.userInput.message === '' |
                    this.selectedDate === '' |
                    !this.checkBox) {
                    this.showToast();
                    return;
                }
                let trimSelectedDate = moment().format('l');
                this.userInput = {
                    name: this.userInput.name,
                    email: this.userInput.email,
                    date: trimSelectedDate,
                    text: this.userInput.message
                };
                axios({
                    method: 'POST',
                    'url': 'send-mail.php',
                    'data': this.userInput,
                    'headers': {'content-type': 'text/plain'}
                }).then(result => {
                    this.response = result.data;
                }, error => {
                    console.error(error);
                });
                this.resetValues();
            },
            showToast () {
                alert('Bitte fülle alle erforderlichen Felder aus!');
            },
            resetValues () {
                this.userInput.name = ' ';
                this.userInput.email = ' ';
                this.userInput.message = ' ';
                this.selectedDate = ' ';
                this.checkBox = false;
            }
        }
    };
</script>

<style>
    .contactForm {
        display: grid;
        grid-template-columns: [first] auto [eingabe] auto [message];
        grid-template-rows: [row1-start] 25% [row1-end] auto [third-line] auto [last-line];
        grid-column-gap: 5px;
    }

    #messageContainer {
        grid-column-start: eingabe;
        grid-column-end: first;
        grid-row-start: third-line;
        grid-row-end: 3;
    }

    .textarea {
        width: 350px;
        height: 200px;
    }

    .buttonTermin {
        width: 150px;
        height: auto;
    }
</style>
