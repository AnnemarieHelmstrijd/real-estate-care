<template>
    <div>
        <v-expansion-panels>
            <v-expansion-panel v-for="item in items" :key="item.location" :title="item.location">
                <v-expansion-panel-text>
                    <ReportComponent :report="item"></ReportComponent>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
    <FooterComponent></FooterComponent>
</template>

<script>

import FooterComponent from './Footer.vue';
import ReportComponent from './Report.vue'
export default {
    name: "ReportsList",
    components: {
        FooterComponent,
        ReportComponent
    },
    computed: {
        items() {
            return this.$store.state.reports
        },
    }
}
</script>

