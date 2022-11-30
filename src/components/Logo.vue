<template>
    <img src="../assets/logo.png" alt="logo.png" class="img">
</template>

<script>
export default {
    name: "LogoComponent",
    props: {

    },
    methods: {
        getImgUrl(name) {
            console.log(name);
            return require("../assets/" + name);
        }
    }
}
</script>

<style>
</style>