<template>
  <header>

  </header>

</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    header: String,
    subheader: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: var(--light);
  color: var(--text);
  width: 100%;
  height: 200px;
 padding: 0;
 margin: 0;
}
</style>
