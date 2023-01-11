<template>
    <h5>Damage</h5>
    <v-table height="300px" density="compact">
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
                <td class="text-left">{{ report.location }}</td>
            </tr>
            <tr>
                <td class="text-left">Description: </td>
                <td class="text-left">{{ report.description }}</td>
            </tr>
            <tr>
                <td class="text-left">Action Required: </td>
                <td class="text-left">{{ report.actionRequired }}</td>
            </tr>
            <tr>
                <td class="text-left">Type: </td>
                <td class="text-left">{{ report.type }}</td>
            </tr>
            <tr>
                <td class="text-left">New Damage: </td>
                <td class="text-left">{{ report.newDamage }}</td>
            </tr>
            <tr>
                <td class="text-left">Photo: </td>
                <td class="text-left">
                    <v-icon>mdi-camera</v-icon>
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import DamageReport from '../../store/datamodel'
export default {
    name: "DamageReportComponent",
    props: {
        report: DamageReport,
    }
}
</script>