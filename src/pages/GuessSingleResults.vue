<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center">
            <v-col>
                <v-row dense>
                    <v-col cols="12" class="text-center">
                        <h2 class="font-weight-bold">
                            {{
                                is_guessed
                                    ? 'Yeh, Adivinaste 🎉 !!!'
                                    : 'Ohh, NO adivinaste 😔 !!!'
                            }}
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <div class="d-flex justify-center">
                            <img
                                :src="memberImagePath"
                                class="mx-auto main-image"
                            />
                        </div>
                    </v-col>
                </v-row>
                <v-row >
                    <v-col cols="12" class="text-center">
                        <p>
                            {{
                                is_guessed
                                    ? `Te acordaste de mí 🎉`
                                    : `No te acordaste de mí 😔`
                            }}
                        </p>
                        <h3>
                            {{ `Soy ${wanted_member.name}` }}
                        </h3>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn
                            color="red accent-2"
                            dark
                            class="font-weight-bold"
                            :to="nextPage"
                            >
                            {{ nextButtonMessage }}
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import family from '../resources/family'
import Bubble from '../components/svg/Bubble'
import { mapState, mapGetters } from 'vuex'

export default {
    name: 'Guess',

    components: {
        Bubble,
    },

    data() {
        return {
            members: [],
        }
    },

    created() {
        this.members = family.members
    },

    computed: {
        ...mapGetters(['i_won', 'i_lost']),
        ...mapState(['wanted_member', 'is_guessed']),

        nextPage() {
            return ( this.i_won || this.i_lost ) ? '/adivinar/fin-del-juego' : '/adivinar'
        },

        nextButtonMessage() {
            return this.i_lost 
                    ? 'PERDISTE'
                    : this.i_won
                        ? 'GANASTE'
                        : 'SIGUE ADIVINANDO'
        },

        memberImagePath() {
            return require(`@/assets/img/${this.wanted_member.img_path}`)
        },
    },

    watch: {
    }
}
</script>
