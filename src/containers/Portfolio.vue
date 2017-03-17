<template>
  <transition appear name="fade">
  <div class="portfolio layout-column layout-align-center-center">
      <h1>My awesome projects</h1>
      <gallery></gallery>
  </div>
</transition>
</template>

<script>
import Gallery from '@/components/Gallery';

export default {
  name: 'portfolio',
  components: {
    gallery: Gallery,
  },
};
</script>

<style lang="stylus" scoped>
  .portfolio
    height 100%
    overflow hidden
  h1
    color #fff
    font-family Raleway
    font-weight 500
    font-size 12px
    text-transform uppercase
</style>
