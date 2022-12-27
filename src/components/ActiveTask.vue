<template>
    <div v-if="data">
         Active task
        </div>
    <h1 v-else> No active task. Go to scheduled <router-link to="ScheduledReports">Scheduled Reports</router-link> to start a task</h1>
</template>

<script>
export default {
    name: "ActiveTaskComponent",
    computed: {
        data(){
            return this.$store.state.model.getActiveTask()
        }
    }
}
</script>