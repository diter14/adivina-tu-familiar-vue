<template>
    <v-container fill-height>
        <bubble top />
        <bubble bottom color="#26a69a" />
            <!-- :interval="5000" -->
            <!-- cycle -->
        <v-carousel 
            :light="true"
            :show-arrows="false"
            hide-delimiter-background
            :height="carousel_height"
            >
            <v-carousel-item>
                <v-row
                    align="center"
                    justify="center"
                    dense
                    class="fill-height"
                    >
                    <v-col>
                        <transition
                            name="custom-classes-transition"
                            enter-active-class="animated fadeInDown"
                            >
                            <div class="d-flex justify-center" v-if="display_cover">
                                <img
                                    src="@/assets/img/family.svg"
                                    class="mx-auto main-image"
                                />
                            </div>
                        </transition>
                        <transition
                            name="custom-classes-transition"
                            enter-active-class="animated fadeInRight"
                            >
                            <h1
                                class="text-center font-weight-bold mb-3"
                                v-if="display_cover"
                            >
                                ¿Adivinas quién soy?
                            </h1>
                        </transition>
                        <transition
                            name="custom-classes-transition"
                            enter-active-class="animated fadeInLeft"
                            >
                            <p class="text-center mb-3" v-if="display_cover">
                                ¿Sabes de verdad qué familiar soy?
                            </p>
                        </transition>
                        <transition
                            name="custom-classes-transition"
                            enter-active-class="animated fadeInUp"
                            >
                        </transition>
                    </v-col>
                </v-row>
            </v-carousel-item>
            <v-carousel-item
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <v-row
                    align="center"
                    justify="center"
                    dense
                    class="fill-height"
                    >
                    <v-col>
                        <h2
                            class="text-center font-weight-bold"
                            >
                            Sólo tienes 10 segundos para adivinar, sigue las pistas
                        </h2>

                    </v-col>
                </v-row>
            </v-carousel-item>
            <v-carousel-item
                reverse-transition="fade-transition"
                transition="fade-transition"
                >
                <v-row
                    align="center"
                    justify="center"
                    dense
                    class="fill-height"
                    >
                    <v-col>
                        <h2
                            class="text-center font-weight-bold"
                            >
                            Puedes usar los comodines hasta en 3 oportunidades
                        </h2>
                        
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>
        <v-row>
            <v-col class="d-flex justify-center align-center">
                <v-btn
                    to="/adivinar"
                    dark
                    color="red accent-2"
                    >
                    ADIVINA
                    <v-icon dark right>
                        mdi-arrow-right
                    </v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import Bubble from '../components/svg/Bubble'
export default {
    name: 'Home',

    components: {
        Bubble,
    },

    data() {
        return {
            display_cover: false,
            carousel_height: 450
        }
    },

    created() {
        if (window.matchMedia) {
            const mq = window.matchMedia('(min-width: 375px)')
            mq.addListener(this.changeScreenWidth)
            this.changeScreenWidth(mq)
        }
    },

    mounted() {
        const self = this
        setTimeout(() => {
            self.display_cover = true
        }, 1000)
    },

    methods: {
        changeScreenWidth(mq) {
            this.carousel_height = (mq.matches) ? 600 : 500
        }
    }
}
</script>
