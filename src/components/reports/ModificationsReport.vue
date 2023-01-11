<template>
    <h5>Modifications</h5>
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
                <td class="text-left">Action: </td>
                <td class="text-left">{{ report.action }}</td>
            </tr>
            <tr>
                <td class="text-left">Modifier: </td>
                <td class="text-left">{{ report.executor }}</td>
            </tr>
            <tr>
                <td class="text-left">Notes: </td>
                <td class="text-left">{{ report.notes }}</td>
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
import ModificationsReport from '../../store/datamodel'
export default {
    name: "ModificationsReportComponent",
    props: {
        report: ModificationsReport,
    }
}
</script>