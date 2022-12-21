<template>
    <v-list v-if="hasDamageReport">
        <DamageReportComponent :report="damageReport">
        </DamageReportComponent>
    </v-list>
    <v-list v-if="hasMaintenanceReport">
        <MaintenanceReportComponent :report="maintenanceReport"></MaintenanceReportComponent>
    </v-list>
    <!-- <v-list v-if="hasInstallationReport">
        <v-list-subheader>
            <h3>Installation</h3>
        </v-list-subheader>
        <v-list-item title="Location: " :subtitle="installationReport.location">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Type: " :subtitle="installationTypeString">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Malfunctions: " :subtitle="installationReport.malfunctions">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Test: " :subtitle="installationReport.test">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Approved: " :subtitle="installationApprovedString">
        </v-list-item>
        <v-divider></v-divider>
    </v-list>
    <v-list v-if="hasModificationsReport">
        <v-list-subheader>
            <h3>Modifications</h3>
        </v-list-subheader>
        <v-list-item title="Current modifications: " :subtitle="modificationsReport.currentModifications">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Location: " :subtitle="modificationsReport.location">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Executer: " :subtitle="modificationsExecuterString">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Description: " :subtitle="modificationsReport.description">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Action: " :subtitle="modificationsActionString">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Notes: " :subtitle="modificationsReport.notes">
        </v-list-item>
        <v-divider></v-divider>
    </v-list> -->
</template>

<script>
import Report from '../../store/datamodel'
import DamageReportComponent from './DamageReport.vue';
import MaintenanceReportComponent from './MaintenanceReport.vue';
export default {
    name: "ReportComponent",
    components: {
    DamageReportComponent,
    MaintenanceReportComponent,
},
    props: {
        report: Report,
    },
    computed: {
        hasDamageReport() {
            return this.report.getDamageReport();
        },

        damageReport() {
            return this.report.getDamageReport();
        },

        hasMaintenanceReport() {
            return this.report.getMaintenanceReport();
        },

        maintenanceReport() {
            return this.report.getMaintenanceReport();
        },

        hasInstallationReport() {
            return this.report.installation;
        }, 

        installationReport() {
            return this.report.installation;
        },

        installationTypeString() {
            switch (this.report.installation.type) {
                case 0:
                    return "Koeling";
                case 1:
                    return "Verwarming";
                case 2:
                    return "Luchtverversing";
                case 3:
                    return "Elektra";
                case 4:
                    return "Beveiliging";

                default:
                    return "";

            }
        },

        installationApprovedString() {
            return this.report.installation.approved ? "Yes" : "No";
        },

        hasModificationsReport() {
            return this.report.modifications;
        },

        modificationsReport() {
            return this.report.modifications;
        },

        modificationsExecuterString() {
            switch (this.report.modifications.executer) {
                case 0:
                    return "Huurder";
                case 1:
                    return "Aannemer";
                case 2:
                    return "Onbekend";

                default:
                    return "";
            }
        },

        modificationsActionString() {
            switch (this.report.modifications.action) {
                case 0:
                    return "Accepteren";
                case 1:
                    return "Laten keuren";
                case 2:
                    return "Laten verwijderen";
                case 3:
                    return "Laten aanpassen";
                case 4:
                    return "Keuren";
                default:
                    return "";
            }

        }
    }
}

</script>