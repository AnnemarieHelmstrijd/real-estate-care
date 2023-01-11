<template>
    <h5>Installation</h5>
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
                <td class="text-left">Type: </td>
                <td class="text-left">{{ report.type }}</td>
            </tr>
            <tr>
                <td class="text-left">Malfunction: </td>
                <td class="text-left">{{ report.malfunctions }}</td>
            </tr>
            <tr>
                <td class="text-left">Test report: </td>
                <td class="text-left">
                    <v-btn icon href='https://www.youtube.com/watch?v=xm3YgoEiEDc'>
                        <v-icon id="bottom_icon" size="15">mdi-book-open</v-icon>
                    </v-btn>
                </td>
            </tr>
            <tr>
                <td class="text-left">Approved: </td>
                <td class="text-left">{{ report.approved }}</td>
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
import InstallationReport from '../../store/datamodel'
export default {
    name: "InstallationReportComponent",
    props: {
        report: InstallationReport,
    }
}
</script>