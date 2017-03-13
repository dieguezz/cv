<template>
  <div id="app">
    <router-view></router-view>
    <navigation></navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';

export default {
  name: 'app',
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1220px;
  margin: 0 auto;
  position: relative;
  height: 100vh;
}
</style>
