<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
        <v-row align="center" justify="center">
            <transition-group
                class="col"
                name="custom-classes-transition"
                enter-active-class="animated fadeInDown"
                tag="div"
                >
                <template v-if="ready">
                    <v-row key="clues-title">
                        <v-col cols="12" class="text-center">
                            <h1 class="font-weight-bold">PISTAS</h1>
                        </v-col>
                    </v-row>
                    <v-row dense key="clues-items">
                        <v-col
                            cols="12"
                            sm="12"
                            class="text-center"
                            style="animation-duration: 2s"
                            :key="`${index}_${clue}`"
                            v-for="(clue, index) in random_member.clues"
                        >
                            <v-chip
                                class="ma-2 font-weight-bold"
                                label
                                dark
                                color="red accent-2"
                            >
                                {{ clue.toUpperCase() }}
                            </v-chip>
                        </v-col>
                    </v-row>
                    <v-row dense key="clues-copy">
                        <v-col cols="12" class="text-center ">
                            <p>¿Adivinaste?</p>
                        </v-col>
                    </v-row>
                    <v-row dense key="clues-selection">
                        <v-col cols="6" offset="3" class="text-center">
                            <v-select
                                :items="possible_members"
                                item-text="name"
                                item-value="id"
                                label="Selecciona ..."
                                solo
                                v-model="selected_member_id"
                                @change="chooseMember()"
                            >
                            </v-select>
                        </v-col>
                    </v-row>
                </template>
                <template v-else>
                    <h1 class="text-center mb-5 spacing-3" :key="'randomize-title'">
                        {{ hideText(random_member.name) }}
                    </h1>
                </template>
            </transition-group>
        </v-row>
        <!-- Comodin Modal -->
        <v-dialog v-model="comodin.open" width="300">
            <v-card>
                <v-card-title primary-title>
                    {{
                        (2 >= comodin.attemps)
                            ? 'Tienes poco tiempo'
                            : 'Lo sentimos'
                    }}
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
                color="red accent-2"
                indeterminate
                reactive
            >
            </v-progress-linear>
        </v-dialog>
        <!-- Time Over -->
        <v-dialog v-model="game.time_over" width="300" persistent>
            <v-card>
                <v-card-title primary-title>
                    Se te acabó el tiempo
                </v-card-title>
                <v-card-text>

                </v-card-text>
            </v-card>
            <v-progress-linear
                color="red accent-2"
                indeterminate
                reactive
                >
            </v-progress-linear>
        </v-dialog>
        <!-- Time Remaining -->
        <v-speed-dial
            absolute
            top
            right
            v-if="ready"
            >
            <template v-slot:activator>
                <v-btn small color="red accent-2" dark fab>
                    {{ game.time_remaining }}
                </v-btn>
            </template>
        </v-speed-dial>
        <!-- Comodin Button -->
        <v-speed-dial
            absolute
            bottom
            left
            v-if="ready"
            >
            <template v-slot:activator>
                <v-btn color="amber lighten-1" dark fab @click="showComodin()">
                    <v-icon dark>mdi-account-question</v-icon>
                </v-btn>
            </template>
        </v-speed-dial>
        <!-- <v-speed-dial
            fab
            absolute
            bottom
            left
            direction="right"
            transition="slide-x-transition"
            v-if="ready"
            >
            <template v-slot:activator>
                <v-btn color="amber lighten-1" dark fab to="/">
                    <v-icon dark>mdi-home</v-icon>
                </v-btn>
            </template>
        </v-speed-dial> -->
    </v-container>
</template>
<script>
import family from '../resources/family'
import Bubble from '../components/svg/Bubble'

export default {
    name: 'Guess',

    components: {
        Bubble,
    },

    data() {
        return {
            ready: false,
            members: [],
            selected_member_id: '',
            random_member: {},
            possible_members: [],
            game: {
                time_remaining: null,
                time_over: false
            },
            comodin: {
                attemps: 0,
                open: false,
                timer: 5,
                interval: null,
            },
        }
    },

    created() {
        this.members = family.members
    },

    mounted() {
        let self = this,
            random_index = null,
            random_interval = setInterval(() => {
                random_index = Math.floor(Math.random() * self.members.length)
                self.random_member = self.members[random_index]
            }, 100)
        setTimeout(() => {
            clearInterval(random_interval)
            console.log(`Random index selected: ${random_index}`)
            self.random_member = self.members[self.generateRandomIndex(random_index)]
            self.generatePossibleMembers({ ...self.random_member })
            self.game.time_remaining = 15
            self.ready = true
        }, 3000)
    },

    methods: {
        hideText(text) {
            if (text) {
                let number_randoms = Math.floor(text.length / 2),
                    random_indexes = []

                while (random_indexes.length < number_randoms) {
                    let random_index = Math.floor(Math.random() * text.length)
                    if (!random_indexes.includes(random_index)) {
                        random_indexes.push(random_index)
                    }
                }
                let hidden_text = text
                random_indexes.forEach((random_index) => {
                    hidden_text = hidden_text.replaceAt(random_index, '*')
                })

                return hidden_text
            }
            return ''
        },

        generateRandomIndex(random_index) {
            let random_member_id = this.members[random_index].id
            if (this.$store.state.played_members.includes(random_member_id)) {
                let new_random_index = Math.floor(Math.random() * this.members.length)
                console.log(`New random index after duplicate: ${new_random_index}`)
                return this.generateRandomIndex(new_random_index)
            }
            this.$store.commit('SET_PLAYED_MEMBER', this.members[random_index].id)
            return random_index
        },

        chooseMember() {
            this.$store.commit('SET_WANTED_MEMBER', this.random_member)
            this.$store.commit(
                'SET_GUESSED_STATUS',
                this.selected_member_id === this.random_member.id
            )
            this.$router.push('/adivinar/resultados')
        },

        generatePossibleMembers(random_member) {
            let possible_members = [],
                random_member_index = this.members.findIndex((member) => {
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
        },
    },
    watch: {
        'comodin.timer': function(new_value) {
            if (new_value === 0) {
                clearInterval(this.comodin.interval)
                this.comodin.open = false
                this.comodin.timer = 5
            }
        },
        'game.time_remaining': function(new_value) {
            let self = this
            if (new_value > 0) {
                setTimeout(() => {
                    self.game.time_remaining--
                }, 1000)
            } else {
                self.game.time_over = true
                setTimeout(() => {
                    self.chooseMember()
                    self.game.time_over = false
                }, 3000)
            }
        }
    },
}
</script>
<style lang="scss">
.spacing-3 {
    letter-spacing: 3px;
}
// .v-speed-dial--bottom {
//     bottom: 50px !important;
// }
</style>
