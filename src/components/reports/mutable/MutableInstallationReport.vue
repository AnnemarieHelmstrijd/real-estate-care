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
                <td class="text-left">Malfunction: </td>
                <td class="text-left">
                    <v-text-field label="Malfunction"></v-text-field>
                </td>
            </tr>
            <tr>
                <td class="text-left">Approved: </td>
                <td class="text-left">
                    <v-checkbox></v-checkbox>
                </td>
            </tr>
            <tr>
                <td class="text-left">Type: </td>
                <td class="text-left">
                    <v-select :items="installationTypeItems" label="Type"></v-select>
                </td>
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
    name: "MutableInstallationReportComponent",
    data: () => ({
        installationTypeItems: ['Koeling', 'Verwarming', 'Luchtverversing', 'Electra', 'Beveiliging']
    })
}
</script>