<template>
  <div id="app">
    <router-view></router-view>
    <navigation class="max-width"></navigation>
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
  height: calc(100vh - 185px);
}
</style>
