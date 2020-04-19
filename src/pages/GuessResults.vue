<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center">
            <v-col>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h1 class="font-weight-bold">
                            {{
                                guessed_right
                                    ? 'Yeeeeh!!! Adivinaste 🎉'
                                    : 'Ouhhh!!! No adivinaste 😔'
                            }}
                        </h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <div class="d-flex justify-center">
                            <img
                                :src="wanted_member.img_path"
                                class="mx-auto"
                                width="50%"
                            />
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <h2>
                            {{
                                guessed_right
                                    ? `Te acordaste de mí, soy ${wanted_member.name} 🎉`
                                    : `No te acordaste de mí, soy ${wanted_member.name} 😔`
                            }}
                        </h2>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="text-center">
                        <v-btn color="red accent-2" dark to="/adivinar">
                            VOLVER A ADIVINAR
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
import { mapState } from 'vuex'

export default {
    name: 'Guess',

    components: {
        Bubble
    },

    data() {
        return {
            members: []
        }
    },

    created() {
        this.members = family.members
    },

    computed: {
        ...mapState(['wanted_member', 'guessed_right'])
    }
}
</script>
