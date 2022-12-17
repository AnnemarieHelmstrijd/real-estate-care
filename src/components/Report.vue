<template>
    Date: {{ report.date }}
    <v-list v-if="hasDamageReport">
        <v-list-subheader>
            <h3>Damage</h3>
        </v-list-subheader>
        <v-list-item title="Location: " :subtitle="damageReport.location">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Description: " :subtitle="damageReport.description">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Action required: " :subtitle="damageActionRequiredString">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Type: " :subtitle="damageTypeString">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="New damage: " :subtitle="newDamageString">
        </v-list-item>
        <v-divider></v-divider>
    </v-list>
    <v-list v-if="hasMaintenanceReport">
        <v-list-subheader>
            <h3>Maintenance</h3>
        </v-list-subheader>
        <v-list-item title="Location: " :subtitle="maintenanceReport.location">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Action required: " :subtitle="maintenanceActionRequiredString">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Type: " :subtitle="maintenanceTypeString">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Costs: " :subtitle="maintenanceCostsString">
        </v-list-item>
        <v-divider></v-divider>
    </v-list>
    <v-list v-if="hasInstallationReport">
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
    </v-list>
</template>

<script>

export default {
    name: "ReportComponent",
    props: {
        report: Object,
    },
    computed: {
        hasDamageReport() {
            return this.report.damage;
        },

        damageReport() {
            return this.report.damage;
        },

        damageActionRequiredString() {
            return this.report.damage.actionRequired ? "Yes" : "No";
        },

        damageTypeString() {
            switch (this.report.damage.type) {
                case 0:
                    return "Moedwillig";
                case 1:
                    return "Slijtage";
                case 2:
                    return "Geweld";
                case 3:
                    return "Normaal gebruik";
                case 4:
                    return "Calamiteit";
                case 5:
                    return "Anders";
                default:
                    return "";
            }
        },

        newDamageString() {
            return this.report.damage.newDamage ? "Yes" : "No";
        },

        damageDescription() {
            return this.report.damage.description;
        },

        hasMaintenanceReport() {
            return this.report.maintenance;
        },

        maintenanceReport() {
            return this.report.maintenance;
        },

        maintenanceActionRequiredString() {
            return this.report.maintenance.actionRequired ? "Yes" : "No";
        },

        maintenanceCostsString() {
            switch (this.report.maintenance.costs) {
                case 0:
                    return "0 - 1500";
                case 1:
                    return "1500 - 2000";
                case 2:
                    return "2000 - 2500";
                case 3:
                    return "2500 - ...";

                default:
                    return "";
            }
        },

        maintenanceTypeString() {
            switch (this.report.maintenance.type) {
                case 0:
                    return "Schilderwerk";
                case 1:
                    return "Houtrot";
                case 2:
                    return "Elektra";
                case 3:
                    return "Leidingwerk";
                case 4:
                    return "Beglazing";

                default:
                    return "";
            }
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