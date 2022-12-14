<template>
    <v-app>
        <v-layout>
            <HeaderComponent></HeaderComponent>
            <v-main>
                <v-card height="100%">
                    <MenuGrid></MenuGrid>
                </v-card>
            </v-main>
            <FooterComponent></FooterComponent>
        </v-layout>
    </v-app>

</template>

<script>
import HeaderComponent from './Header.vue'
import MenuGrid from './MenuGrid.vue';
import FooterComponent from './Footer.vue';

export default {
    name: 'WelcomeScreen',
    components: {
        HeaderComponent,
        MenuGrid,
        FooterComponent,
    }
}
</script>