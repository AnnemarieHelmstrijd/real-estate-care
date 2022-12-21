<template>
    <v-app v-if="loaded">
        <v-layout>
            <HeaderComponent></HeaderComponent>
            <v-main>
                <ReportsList></ReportsList>
            </v-main>
            <FooterComponent></FooterComponent>
        </v-layout>
    </v-app>

    <v-app v-else>
        <v-layout>
            <HeaderComponent></HeaderComponent>
            <v-main>
                <v-card height="100%">
                    <h1>{{ loadingStatus }}</h1>
                </v-card>
            </v-main>
            <FooterComponent></FooterComponent>
        </v-layout>
    </v-app>

</template>

<script>
import HeaderComponent from './Header.vue'
import FooterComponent from './Footer.vue';
import ReportsList from './ReportsList.vue';

export default {
    name: 'ScheduledScreen',
    components: {
        HeaderComponent,
        FooterComponent,
        ReportsList,
    },
    computed: {
        loaded() {
            return this.$store.state.loaded;
        },
        loadingStatus() {
            return this.$store.state.loadingStatus;
        },
    },
    data() {
        return {
            scheduledWork: [],
        }
    },
    mounted: function () {
        this.$store.dispatch("fetchReports");
    }
}
</script>