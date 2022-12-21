<template>
    <v-container class="menu-container">
        <v-row class="card_row">
            <v-col>
                <MenuCard icon="mdi-bookmark" action="Scheduled" link="Scheduled"></MenuCard>
            </v-col>
            <v-col>
                <MenuCard icon="mdi-checkbox-marked-circle" action="Completed" link="Completed"></MenuCard>
            </v-col>
        </v-row>

        <v-row class="card_row">

            <v-col>
                <MenuCard icon="mdi-view-grid" action="Knowledge Base"></MenuCard>
            </v-col>

            <v-col>
                <MenuCard icon="mdi-cog" action="Settings"></MenuCard>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import MenuCard from './MenuCard.vue'

export default {
    name: "MenuGrid",
    components: {
        MenuCard,
    },
}
</script>

<style>
.card_row {
    height: 50%;
}

.menu-container {
    height: 100%;
}
</style>