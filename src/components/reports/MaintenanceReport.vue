<template>
    <v-list-subheader>
        <h3>Maintenance</h3>
        </v-list-subheader>
        <v-list-item title="Location: " :subtitle="report.location">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Action required: " :subtitle="report.actionRequired">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Type: " :subtitle="report.type">
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item title="Costs: " :subtitle="report.cost">
        </v-list-item>
        <v-divider></v-divider>
</template>

<script>
import MaintenanceReport from '../../store/datamodel'
export default{
    name: "MaintenanceReportComponent",
    props: {
        report: MaintenanceReport,
    }
}
</script>