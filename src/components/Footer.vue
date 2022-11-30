<template>

<footer></footer>
</template>

<script>
export default{
    name: "FooterComponent"
}
</script>

<style scoped>
footer{
    background-image: linear-gradient(to right,var(--primaryleft), var(--primaryright));
    height: 150px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>