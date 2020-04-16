<template>
    <v-footer absolute padless>
        <v-card flat tile width="100%" class="teal lighten-1">
            <v-card-text class="white--text text-center">
                {{ new Date().getFullYear() }} —
                <strong>Diter Terrones</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'MainFooter'
}
</script>
