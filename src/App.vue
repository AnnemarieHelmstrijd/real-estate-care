<template>
  <HeaderComponent header="Real Estate Care" subheader="Caring is our nature"></HeaderComponent>
  <LogoComponent></LogoComponent>
  <FooterComponent></FooterComponent>
</template>

<script>
import HeaderComponent from './components/Header.vue'
import LogoComponent from './components/Logo.vue'
import FooterComponent from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LogoComponent,
    FooterComponent,
  }
}
</script>

<style>

body{
margin: 0;

}
:root {
  --primaryleft: rgba(71, 94, 108, 255 ) ;
  --primaryright:  rgba(20, 27, 31, 255 );
  --light: rgba(0, 170, 162, 255);
  --text: rgba(41, 52, 57, 255);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);

}
</style>
