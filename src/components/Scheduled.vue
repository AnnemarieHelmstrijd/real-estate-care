<template>
    <!-- <h1 v-else>{{ scheduledWork }}</h1> -->
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
                    <h1>Loading...</h1>
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
    data() {
        return {
            scheduledWork: [],
            loaded: false,
        }
    },
    mounted: function () {
        let self = this;
        fetch('https://my-json-server.typicode.com/AnnemarieHelmstrijd/real-estate-care/reports')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                self.scheduledWork = data;
                self.loaded = true;
            });
    }
}
</script>