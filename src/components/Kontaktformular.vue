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
            <p id="messageContainer">Nachricht: <br>
                <textarea class="textarea" v-model="userInput.message" title="Nachricht"></textarea>
            </p>
            <img class="buttonTermin button" src="../assets/button-termin.svg" @click="sendMessage">
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
                response: ''
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
                    this.selectedDate === '') {
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
                this.userInput.name === '';
                this.userInput.email === '';
                this.userInput.message === '';
                this.selectedDate === '';
            }
        }
    };
</script>

<style>
    .contactForm {
        display: grid;
        grid-template-columns: [first] auto [eingabe] auto [message];
        grid-template-rows: [row1-start] 25% [row1-end] auto [third-line] auto [last-line];
        grid-column-gap: 15px;
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
