<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Lato:wght@100;400&family=Montserrat:wght@200;400&family=Roboto&family=Roboto+Flex:opsz,wght@8..144,200;8..144,400&display=swap"
    rel="stylesheet">
  <component :is="currentView"></component>
</template>

<script>
import CurrentReport from './components/CurrentReport.vue';
import Scheduled from './components/Scheduled.vue';
import WelcomeScreen from './components/WelcomeScreen.vue';

const routes = {
  '/': WelcomeScreen,
  '/Scheduled': Scheduled,
  '/Report': CurrentReport
}

export default {
  name: 'App',
  theme: 'myCustomLightTheme',

  data() {
    return {
      currentPath: window.location.hash,
    }
  },

  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/']
    }
  },

  mounted: function () {
    let foo = this;
    window.addEventListener('hashchange', function () {
      foo.currentPath = window.location.hash
    })
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
