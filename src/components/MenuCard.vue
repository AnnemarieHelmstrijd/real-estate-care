<template>
    <v-card class="menu-card" variant="tonal" elevation="5" href="#/Scheduled">
        <v-icon size="250">{{ icon }}</v-icon>
        <v-card-actions id="card_action">
            <h1>{{ action }}</h1>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "MenuCard",
    props: {
        icon: String,
        action: String,
        link: String,
    },
}
</script>

<style scoped>
.menu-card {
    height: 100%;
    color: #333333;
    font-size: 20px;
}

#card_action {
    margin-top: 50px;
    justify-content: center;
}
</style>