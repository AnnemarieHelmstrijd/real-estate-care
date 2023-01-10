<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-title>Damage</v-expansion-panel-title>
            <v-expansion-panel-text>
                <MutableDamageReportComponent :report="damageReport"></MutableDamageReportComponent>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Installation</v-expansion-panel-title>
            <v-expansion-panel-text>
                <MutableInstallationReportComponent></MutableInstallationReportComponent>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Modifications</v-expansion-panel-title>
            <v-expansion-panel-text>
                <MutableModificationsReportComponent></MutableModificationsReportComponent>
            </v-expansion-panel-text>
        </v-expansion-panel>
        <v-expansion-panel>
            <v-expansion-panel-title>Maintenance</v-expansion-panel-title>
            <v-expansion-panel-text>
                <MutableMaintenanceReportComponent></MutableMaintenanceReportComponent>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>

import MutableDamageReportComponent from './MutableDamageReport.vue';
import MutableInstallationReportComponent from './MutableInstallationReport.vue';
import MutableModificationsReportComponent from './MutableModificationsReport.vue';
import MutableMaintenanceReportComponent from './MutableMaintenanceReport.vue';

export default {
    name: "MutableReportComponent",
    components: {
        MutableDamageReportComponent,
        MutableInstallationReportComponent,
        MutableModificationsReportComponent,
        MutableMaintenanceReportComponent,
    },
    computed: {
        damageReport() {
            return this.$store.state.model.getActiveTask().getDamageReport()
        }
    }
}
</script>