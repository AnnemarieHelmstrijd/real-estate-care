<template>
  <v-bottom-navigation id="bottom_navigation" :elevation="0" height="150" grow>
    <v-btn value="active-task">
      <v-icon id="bottom_icon" size="75">mdi-wrench</v-icon>

      <h2>Active Task</h2>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn value="search">
      <v-icon id="bottom_icon" size="75">mdi-magnify</v-icon>

      <h2>Search</h2>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn value="information">
      <v-icon id="bottom_icon" size="75">mdi-exclamation</v-icon>

      <h2>Information</h2>
    </v-btn>
  </v-bottom-navigation>

</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style scoped>
#bottom_navigation {
  display: flex;
  background-color: var(--secondary);
  color: whitesmoke;
}
</style>
