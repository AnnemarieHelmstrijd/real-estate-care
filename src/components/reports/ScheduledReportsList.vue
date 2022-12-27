<template>
    <router-link style="text-decoration: none;" to="/">
        <v-btn>
            Home
        </v-btn>
    </router-link>

    <div v-if="items">
        <h2>Scheduled Reports</h2>
        <v-expansion-panels>
            <v-expansion-panel v-for="item in items" :key="item.getLocation()">
                <v-expansion-panel-title>
                    <v-row align="center" class="spacer" no-gutters>
                        <v-col cols="4" sm="2" md="1">
                            <v-avatar>
                                <v-img alt="Avatar"
                                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col>Bob de Bouwer</v-col>
                        <v-col>{{ item.getLocation() }}</v-col>
                        <v-col>{{ item.getDate() }}</v-col>
                    </v-row>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <CompletedReportComponent :report="item"></CompletedReportComponent>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
    <div v-else>
        <v-list>
            <!-- <v-row align="center" class="spacer" no-gutters>
                <v-col cols="4" sm="2" md="1">
                    <v-avatar>
                        <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                    </v-avatar>
                </v-col>
                <v-col>Bob de Bouwer</v-col>
                <v-col>{{ item.getLocation() }}</v-col>
                <v-col>{{ item.getDate() }}</v-col>
            </v-row> -->
        </v-list>
    </div>

    <!-- <v-list>
        <v-list-item v-for="item in items">
            <v-list-item-text>

            </v-list-item-text>
        </v-list-item>
    </v-list> -->
</template>

<script>

export default {
    name: "ScheduledReportsComponent",
    computed: {
        items() {
            return this.$store.state.model.getScheduledReports()
        },
    }
}

</script>