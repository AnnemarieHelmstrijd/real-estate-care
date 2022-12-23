<template>
    <h5>Maintenance</h5>
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
                <td class="text-left">Action required: </td>
                <td class="text-left">{{ report.actionRequired }}</td>
            </tr>

            <tr>
                <td class="text-left">Type: </td>
                <td class="text-left">{{ report.type }}</td>
            </tr>

            <tr>
                <td class="text-left">Costs: </td>
                <td class="text-left">{{ report.cost }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script>
import MaintenanceReport from '../../store/datamodel'
export default {
    name: "MaintenanceReportComponent",
    props: {
        report: MaintenanceReport,
    }
}
</script>