<template>
  <ClientsList />
</template>

<script>
import ClientsList from './components/ClientsList.vue'

export default {
  name: 'App',
  components: {
    ClientsList
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  background-color: #F2F3F8;

  width: calc(100vw - 4rem);
  height: calc(100vh - 4rem);
  padding: 2rem;

}
</style>
