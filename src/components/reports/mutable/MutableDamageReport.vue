<template>
    <v-table density="compact">
        <thead>
            <tr>
                <th class="text-left">
                    Subject
                </th>
                <th class="text-left">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-left">Location: </td>
                <td class="text-left">
                    <v-text-field label="Location"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Description: </td>
                <td class="text-left">
                    <v-text-field label="Description"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Action Required: </td>
                <td class="text-left">
                    <v-checkbox></v-checkbox>
                </td>
            </tr>
            <tr>
                <td class="text-left">Type: </td>
                <td class="text-left">
                    <v-select :items="damageTypeItems" label="Type"></v-select>
                </td>
            </tr>
            <tr>
                <td class="text-left">New Damage: </td>
                <td class="text-left">
                    <v-checkbox v-model="isNewDamage"></v-checkbox>
                </td>
            </tr>

            <tr>
                <td class="text-left">Photo: </td>
                <td class="text-left">
                    <v-file-input prepend-icon="mdi-camera"></v-file-input>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>

export default {
    name: "MutableDamageReportComponent",
    data() {
        return {
            damageTypeItems: ['Moedwillig', 'Slijtage', 'Geweld', 'Normaal gebruik', 'Calamiteit', 'Anders'],
            isNewDamage: false,
        }
    },
    props:{
        report: Object
    },
    beforeUnmount: function(){
        var newReport = this.report;
        if(!newReport){
            newReport = {};
        }

        newReport.newDamage = this.isNewDamage;
        this.$store.dispatch("setActiveTaskDamageReport", newReport)
    }
}
</script>