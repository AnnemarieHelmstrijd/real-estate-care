<template>
    <!-- <HeaderComponent></HeaderComponent> -->
    <v-list :style="{
        'align-items': 'center'
    }">
        <v-list-item v-for="item in items" :key="item.location" :title="item.location" :subtitle="item.date"
            @click="goToReport(item.location)" href="#/Report"
            prepend-avatar="https://randomuser.me/api/portraits/men/22.jpg">

        </v-list-item>
    </v-list>
    <FooterComponent></FooterComponent>
</template>

<script>

// import HeaderComponent from './Header.vue';
import FooterComponent from './Footer.vue';

export default {
    name: "ReportsList",
    components: {
        // HeaderComponent,
        FooterComponent,
    },
    computed: {
        items() {
            return this.$store.state.reports
        },
    },
    methods: {
        goToReport(location) {
            this.$store.dispatch("loadReport", location)
        },
    }
}
</script>

