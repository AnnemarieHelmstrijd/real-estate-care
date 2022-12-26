<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400&family=Montserrat:wght@200;400&family=Roboto&family=Roboto+Flex:opsz,wght@8..144,200;8..144,400&display=swap"
    rel="stylesheet">
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
    mounted: function () {
        this.$store.dispatch("fetchReports");
    }
}
</script>

<style>
:root {
  --primary: #1E292F;
  --secondary: #00AAA2;
  --text: rgba(41, 52, 57, 255);
}

#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
}

#my_app_bar {
  background-color: var(--primary);
}
</style>
