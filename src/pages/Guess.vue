<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center">
            <v-col>
                <template v-if="ready">
                    <v-row>
                        <v-col cols="12" class="text-center">
                            <h1 class="font-weight-bold">PISTAS</h1>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            cols="12"
                            class="text-center"
                            :key="index"
                            v-for="(clue, index) in random_member.clues"
                        >
                            <v-chip
                                class="ma-2"
                                label
                                dark
                                color="red accent-2"
                            >
                                {{ clue.toUpperCase() }}
                            </v-chip>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" class="text-center ">
                            <p>¿Adivinaste?</p>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6" offset="3" class="text-center">
                            <v-select
                                :items="possible_members"
                                item-text="name"
                                item-value="id"
                                label="Soy ..."
                                solo
                                v-model="selected_member_id"
                                @change="chooseMember()"
                            >
                            </v-select>
                        </v-col>
                    </v-row>
                </template>
                <template v-else>
                    <h1 class="text-center mb-5 spacing-3">
                        {{ hideText(random_member.name) }}
                    </h1>
                </template>
            </v-col>
        </v-row>
        <v-dialog v-model="comodin.open" width="300" persistent>
            <v-card>
                <v-card-title primary-title>
                    <template v-if="comodin.attemps <= 2">
                        Tienes poco tiempo
                    </template>
                    <template v-else>
                        Lo sentimos
                    </template>
                    <v-chip dark class="ma-2" color="red accent-2">
                        {{ comodin.timer }}
                    </v-chip>
                </v-card-title>
                <v-card-text>
                    <template v-if="comodin.attemps <= 2">
                        Estos son mis familiares cercanos:
                        <v-list>
                            <v-list-item
                                v-for="(near, index) in random_member.nears"
                                :key="index"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ near }}
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </template>
                    <template v-else>
                        Has agotado todos tus comodines 😔
                    </template>
                </v-card-text>
            </v-card>
            <v-progress-linear
                v-model="comodin.progress"
                color="red accent-2"
                indeterminate
                reactive
            >
            </v-progress-linear>
        </v-dialog>
        <v-speed-dial
            fab
            absolute
            bottom
            right
            direction="left"
            transition="slide-x-reverse-transition"
        >
            <template v-slot:activator>
                <v-btn color="amber lighten-1" dark fab @click="showComodin()">
                    <v-icon dark>mdi-account-question</v-icon>
                </v-btn>
            </template>
        </v-speed-dial>
    </v-container>
</template>
<script>
import family from '../resources/family'
import Bubble from '../components/svg/Bubble'

export default {
    name: 'Guess',

    components: {
        Bubble
    },

    data() {
        return {
            ready: false,
            members: [],
            selected_member_id: '',
            random_member: {},
            possible_members: [],
            comodin: {
                attemps: 0,
                open: false,
                timer: 5,
                interval: null
            }
        }
    },

    created() {
        this.members = family.members
    },

    mounted() {
        let self = this,
            random_interval = setInterval(() => {
                self.random_member =
                    self.members[
                        Math.floor(Math.random() * self.members.length)
                    ]
            }, 100)
        setTimeout(() => {
            clearInterval(random_interval)
            self.generatePossibleMembers({ ...self.random_member })
            self.ready = true
        }, 3000)
    },

    methods: {
        hideText(text) {
            if (text) {
                let number_randoms = Math.floor(text.length / 2) + 1,
                    random_indexes = []

                while (random_indexes.length < number_randoms) {
                    let random_index = Math.floor(Math.random() * text.length)
                    if (!random_indexes.includes(random_index)) {
                        random_indexes.push(random_index)
                    }
                }
                let hidden_text = text
                random_indexes.forEach(random_index => {
                    hidden_text = hidden_text.replaceAt(random_index, '*')
                })

                return hidden_text
            }
            return ''
        },

        chooseMember() {
            this.$store.commit('SET_WANTED_MEMBER', this.random_member)
            this.$store.commit(
                'SET_GUESSED_RIGHT',
                this.selected_member_id === this.random_member.id
            )
            this.$router.push('/adivinar/resultados')
        },

        generatePossibleMembers(random_member) {
            let possible_members = [],
                random_member_index = this.members.findIndex(member => {
                    return member.id == random_member.id
                })
            if (random_member_index !== -1) {
                random_member.name = this.hideText(random_member.name)
                possible_members.push(random_member)
            }
            while (possible_members.length < 3) {
                let random_index = Math.floor(
                    Math.random() * this.members.length
                )
                if (random_member_index !== random_index) {
                    let possible_member = { ...this.members[random_index] }
                    possible_member.name = this.hideText(possible_member.name)
                    possible_members.push(possible_member)
                }
            }
            this.possible_members = possible_members
        },

        showComodin() {
            this.comodin.open = true
            this.comodin.attemps++
            let self = this
            self.comodin.interval = setInterval(() => {
                self.comodin.timer--
            }, 1000)
        }
    },
    watch: {
        'comodin.timer': function(new_value) {
            if (new_value === 0) {
                clearInterval(this.comodin.interval)
                this.comodin.open = false
                this.comodin.timer = 5
            }
        }
    }
}
</script>
<style lang="scss">
.spacing-3 {
    letter-spacing: 3px;
}
.v-speed-dial--bottom {
    bottom: 120px !important;
}
</style>
