<template>
  <div class="gallery layout-row layout-align-center-end">
    <div class="col layout-column flex-25">
      <img src="http://lorempixel.com/500/500/technics/1" alt="">
      <img src="http://lorempixel.com/500/500/technics/2" alt="">
    </div>
    <div class="col layout-column flex-33">
      <img src="http://lorempixel.com/500/500/technics/3" alt="">
      <img src="http://lorempixel.com/500/500/technics/4" alt="">
    </div>
    <div class="col layout-column flex-25">
      <img src="http://lorempixel.com/500/500/technics/7" alt="">
      <img src="http://lorempixel.com/500/500/technics/8" alt="">
      <img src="http://lorempixel.com/500/500/technics/9" alt="">
    </div>
    <div class="col layout-column flex-25">
      <img src="http://lorempixel.com/500/500/technics/5" alt="">
      <img src="http://lorempixel.com/500/500/technics/6" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'gallery',
};
</script>

<style lang="stylus" scoped>
  .gallery
    width 100vw
  img
    object-fit cover
  .col
    height 70vh
    overflow hidden
    &:first-child, &:nth-child(4)
      img
        height 50%
        max-height 50%
    &:nth-child(2)
      img
        height 35%
        &:first-child
          height 65%
    &:nth-child(3)
      img
        max-height 33%
        &:first-child
          max-height 35%

</style>
