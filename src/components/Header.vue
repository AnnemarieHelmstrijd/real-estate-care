<template>
  <v-app-bar id="my_app_bar" height="100">
    <Logo></Logo>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon id="top_icon" size="50">mdi-bell</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon id="top_icon" size="50">mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

import Logo from './Logo.vue';

export default {
  name: 'HeaderComponent',
  components: {
    Logo,
  }
}
</script>

<style scoped>
#top_icon {
  color: lightgrey;
}
</style>
