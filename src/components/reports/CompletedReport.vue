<template>
    <v-list v-if="damageReport">
        <DamageReportComponent :report="damageReport">
        </DamageReportComponent>
    </v-list>
    <v-list v-if="maintenanceReport">
        <MaintenanceReportComponent :report="maintenanceReport"></MaintenanceReportComponent>
    </v-list>
    <v-list v-if="installationReport">
        <InstallationReportComponent :report="installationReport"></InstallationReportComponent>
    </v-list>
    <v-list v-if="modificationsReport">
        <ModificationsReportComponent :report="modificationsReport"></ModificationsReportComponent>
    </v-list>
</template>

<script>
import Report from '../../store/datamodel'
import DamageReportComponent from './DamageReport.vue';
import InstallationReportComponent from './InstallationReport.vue';
import MaintenanceReportComponent from './MaintenanceReport.vue';
import ModificationsReportComponent from './ModificationsReport.vue';
export default {
    name: "CompletedReportComponent",
    components: {
        DamageReportComponent,
        MaintenanceReportComponent,
        InstallationReportComponent,
        ModificationsReportComponent,
    },
    props: {
        report: Report,
    },
    computed: {
        damageReport() {
            return this.report.getDamageReport();
        },

        maintenanceReport() {
            return this.report.getMaintenanceReport();
        },

        installationReport() {
            return this.report.getInstallationReport();
        },

        modificationsReport() {
            return this.report.getModificationsReport();
        },
    }
}

</script>