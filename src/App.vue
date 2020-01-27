<template>
  <div class="row">
    <nav1></nav1>
    <tiempo></tiempo>
  </div>
</template>

<script>
import nav1 from './components/nav1.vue'
import tiempo from './components/tiempo.vue'
export default {
  name: 'app',
  components: {
    nav1,
    tiempo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
