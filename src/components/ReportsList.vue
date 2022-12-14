<template>
    <v-list lines="one">
        <v-list-item v-for="item in items" :key="item.location" :title="item.location"></v-list-item>
    </v-list>
</template>

<script>
export default {
    name: "ReportsList",
    computed: {
        items() {
            return this.$store.state.reports
        }
    }
}
</script>