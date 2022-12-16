<template>
    <v-list lines="one">
        <v-list-item v-for="item in items" :key="item.location" :title="item.location" @click="goToReport"
            href="#/Report">
        </v-list-item>
    </v-list>
</template>

<script>
export default {
    name: "ReportsList",
    computed: {
        items() {
            return this.$store.state.reports
        }
    },
    methods: {
        goToReport(event) {
            const targetName = event.target.textContent;
            this.$store.dispatch("loadReport", targetName)
        }
    }
}
</script>