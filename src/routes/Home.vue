<template>
  <h1>Home page..</h1>
  <h2>{{ heropyMessage }}</h2>
</template>

<script>
export default {
  computed: {
    heropyMessage() {
      return this.$store.state.navigation.message
    }
  }
}
</script>

<style scoped>
h1 {
  color: red;
}
</style>
