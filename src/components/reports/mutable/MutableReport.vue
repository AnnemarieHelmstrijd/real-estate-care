<template>
    <v-list>
        <v-list-item>
            <MutableDamageReportComponent></MutableDamageReportComponent>
        </v-list-item>
        <v-list-item>
            <MutableInstallationReportComponent></MutableInstallationReportComponent>
        </v-list-item>
    </v-list>
</template>

<script>

import MutableDamageReportComponent from './MutableDamageReport.vue';
import MutableInstallationReportComponent from './MutableInstallationReport.vue';

export default {
    name: "MutableReportComponent",
    components: {
        MutableDamageReportComponent,
        MutableInstallationReportComponent,
    }
}
</script>