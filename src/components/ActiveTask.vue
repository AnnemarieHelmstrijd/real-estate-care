<template>
    <router-link to="/">Home</router-link>
    <div v-if="data">
        Active task
        <MutableReportComponent></MutableReportComponent>
    </div>
    <h1 v-else> No active task. Go to scheduled
        <router-link to="ScheduledReports">Scheduled Reports</router-link> to
        start a task
    </h1>
</template>

<script>

import MutableReportComponent from './reports/mutable/MutableReport.vue';

export default {
    name: "ActiveTaskComponent",
    computed: {
        data() {
            return this.$store.state.model.getActiveTask()
        }
    },
    components:{
        MutableReportComponent,
    }
}
</script>