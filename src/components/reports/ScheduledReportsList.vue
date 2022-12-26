<template>
    <router-link style="text-decoration: none;" to="/">
        <v-btn>
            Home
        </v-btn>
    </router-link>


    <!-- <v-list>
        <v-list-item v-for="item in items">
            <v-list-item-text>

            </v-list-item-text>
        </v-list-item>
    </v-list> -->
</template>

<script>

export default {
    name: "ScheduledReportsComponent",
    computed: {
        items() {
            return this.$store.state.model.getScheduledReports()
        },
    }
}

</script>