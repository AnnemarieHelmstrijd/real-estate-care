<template>
    <router-link :to="link" style="text-decoration: none; color: inherit;">
        <v-card class="menu-card" variant="tonal" elevation="5">
            <v-icon size="150">{{ icon }}</v-icon>
            <v-card-actions id="card_action">
                <h2>{{ action }}</h2>
            </v-card-actions>
        </v-card>
    </router-link>
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
    height: 90%;
    color: #333333;
    font-size: 20px;
    margin: 10px;
}

.router-link {
    text-decoration: none;
    color: inherit;
}

#card_action {
    margin-top: 50px;
    justify-content: center;
}
</style>