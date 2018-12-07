<template>
    <form title="Kontaktformular">
        <p>Name: <br>
            <input v-model="name" title="Name"/>
        </p>
        <p>Termin: <br>
            <input v-model="selectedDate" title="Termin"/>
        </p>
        <p>E-Mail Adresse: <br>
            <input v-model="email" title="E-Mail"/>
        </p>
        <p>Nachricht: <br>
            <textarea class="textarea" v-model="nachricht" title="Nachricht"/>
        </p>
        <img class="buttonTermin button" src="../assets/button-termin.svg" @click="sendMessage">
        Rückmeldung-TEST : {{ response }}
    </form>
</template>

<script>
    import axios from '../../node_modules/axios';

    export default {
        name: 'kontaktformular',
        data() {
            return {
                userInput: {
                    name: '',
                    email: '',
                    datum: '',
                    nachricht: ''
                },
                response: ''
            }
        },
        props: {
            selectedDate: {}
        },
        methods: {
            sendMessage() {
                console.log('message send!:');
                if (!this.name | !this.email | !this.nachricht) {
                    this.showToast();
                } else {
                    axios({
                        method: "POST",
                        "url": "send-mail.php",
                        "data": this.userInput,
                        "headers": {"content-type": "application/xml"}
                    }).then(result => {
                        this.response = result.data;
                    }, error => {
                        console.error(error);
                    });
                }
            },
            showToast() {
                alert('please enter a right value!')
            }
        }
    }
</script>

<style>
    .textarea {
        width: 500px;
        height: 200px;
    }

    .buttonTermin {
        width: 150px;
        height: auto;
    }
</style>
