<template>
    <v-card v-if="hasDamageReport">
        <v-list density="compact">
            <v-list-subheader>
                <h2>Damage</h2>
            </v-list-subheader>
            <v-list-item title="Location: " :subtitle="damageReport.location">
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item title="Description: " :subtitle="damageDescription">
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
    </v-card>
    <v-card v-if="hasMaintenanceReport">
        <v-list density="compact">
            <v-list-subheader>
                <h2>Maintenance</h2>
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
    </v-card>
    <v-card v-if="hasInstallationReport">
        <v-list density="compact">
            <v-list-subheader>
                <h2>Installation</h2>
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
    </v-card>
    <v-card v-if="hasModificationsReport">
        <v-list density="compact">
            <v-list-subheader>
                <h2>Modifications</h2>
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
    </v-card>
</template>

<script>

export default {
    name: "CurrentReport",

    computed: {
        report() {
            return this.$store.state.currentReport;
        },

        hasDamageReport() {
            return this.$store.state.currentReport.damage;
        },

        damageReport() {
            return this.$store.state.currentReport.damage;
        },

        damageActionRequiredString() {
            return this.$store.state.currentReport.damage.actionRequired ? "Yes" : "No";
        },

        damageTypeString() {
            switch (this.$store.state.currentReport.damage.type) {
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
            return this.$store.state.currentReport.damage.newDamage ? "Yes" : "No";
        },

        damageDescription() {
            return this.$store.state.currentReport.damage.description;
        },

        hasMaintenanceReport() {
            return this.$store.state.currentReport.maintenance;
        },

        maintenanceReport() {
            return this.$store.state.currentReport.maintenance;
        },

        maintenanceActionRequiredString() {
            return this.$store.state.currentReport.maintenance.actionRequired ? "Yes" : "No";
        },

        maintenanceCostsString() {
            switch (this.$store.state.currentReport.maintenance.costs) {
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
            switch (this.$store.state.currentReport.maintenance.type) {
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
            return this.$store.state.currentReport.installation;
        },

        installationReport() {
            return this.$store.state.currentReport.installation;
        },

        installationTypeString() {
            switch (this.$store.state.currentReport.installation.type) {
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
            return this.$store.state.currentReport.installation.approved ? "Yes" : "No";
        },

        hasModificationsReport() {
            return this.$store.state.currentReport.modifications;
        },

        modificationsReport() {
            return this.$store.state.currentReport.modifications;
        },

        modificationsExecuterString() {
            switch (this.$store.state.currentReport.modifications.executer) {
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
            switch (this.$store.state.currentReport.modifications.action) {
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