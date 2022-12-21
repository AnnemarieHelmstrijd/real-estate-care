<template>
    <div>
        <h2>Completed Reports</h2>
        <v-expansion-panels>
            <v-expansion-panel v-for="item in items" :key="item.getLocation()">
                <v-expansion-panel-title>
                    {{ item.getLocation() + " - " + item.getDate() }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <ReportComponent :report="item"></ReportComponent>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
    <FooterComponent></FooterComponent>
</template>

<script>

import FooterComponent from '../Footer.vue';
import ReportComponent from './Report.vue'
export default {
    name: "ReportsList",
    components: {
        FooterComponent,
        ReportComponent
    },
    computed: {
        items() {
            return this.$store.state.model.getCompletedReports()
        },
    }
}
</script>

