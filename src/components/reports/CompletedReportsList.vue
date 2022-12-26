<template>
        <router-link to="/">
            <v-btn>
                Home
            </v-btn>
        </router-link>
        <h2>Completed Reports</h2>
        <v-expansion-panels>
            <v-expansion-panel v-for="item in items" :key="item.getLocation()">
                <v-expansion-panel-title>
                    <v-row align="center" class="spacer" no-gutters>
                        <v-col cols="4" sm="2" md="1">
                            <v-avatar>
                                <v-img alt="Avatar"
                                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col>Bob de Bouwer</v-col>
                        <v-col>{{ item.getLocation() }}</v-col>
                        <v-col>{{ item.getDate() }}</v-col>
                    </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <CompletedReportComponent :report="item"></CompletedReportComponent>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    <FooterComponent></FooterComponent>
</template>

<script>

import FooterComponent from '../Footer.vue';
import CompletedReportComponent from './CompletedReport.vue'
export default {
    name: "CompletedReportsList",
    components: {
        FooterComponent,
        CompletedReportComponent
    },
    computed: {
        items() {
            return this.$store.state.model.getCompletedReports()
        },
    }
}
</script>

<style scoped>

.h2{
    text-align: left;
}

</style>