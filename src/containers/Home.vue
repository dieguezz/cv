<template>
  <transition name="fade" appear>
<div class="home layout-row layout-align-center-end">
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" text-rendering="optimizeSpeed" viewBox="0 0 192 70.6" style="enable-background:new 0 0 192 70.6;" xml:space="preserve">
    <symbol id="s-text">
      <g id="Hello">
      	<text transform="matrix(.9 0 0 .9 3 65)" style="font-family:'Poppins-Regular'; font-size:83.4246px; font-weight: bold;">{{ $t('hello') }}</text>
      </g>
      <g id="WEB_DEVELOPER__x7C__UX_LOVER">
      		<text transform="matrix(1.0056 0 0 1 52.4 14.4558)" style="fill:#FFFFFF; font-family:'Raleway'!important; font-size:3.4959px;">{{ $t('developer') }}</text>
      </g>
      <g id="I_x2019_m_Diego_Segura">
      		<text transform="matrix(1.0003 0 0 1 7 7.0173)" style="fill:#FFFFFF; font-family:'Poppins'!important; font-size:8.9963px;">{{ $t('iamAuthor') }}</text>
      </g>
    </symbol>
    <mask id="m-text"
       maskunits="userSpaceOnUse"
       maskcontentunits="userSpaceOnUse">

     <rect
           width="100%"
           height="100%"
           class="mask__shape">
     </rect>
     <use xlink:href="#s-text"
          class="mask__text"
          ></use>
   </mask>
  </svg>
  <div class="box-with-text">
    <div class="text-fill">
      <video class="video" autoplay="autoplay" muted="muted" preload="auto" loop="loop">
        <source src="../assets/videos/bokeh2.mp4" type="video/mp4">
      </video>
    </div>
    <!-- Visible SVG -->
    <svg viewBox="0 0 191.7 70.6" class="svg-inverted-mask">
      <rect width="100%" height="100%" mask="url(#m-text)" class="shape--fill"/>
        <use xlink:href="#s-text" class="text--transparent"></use>
     </rect>
    </svg>
  </div>
  <router-link to="/about" tag="button" class="button-primary">{{ $t('aboutMe') }}</router-link>
</div>
</transition>
</template>

<script>
export default {
  name: 'home',
};
</script>

<style lang="stylus" scoped>

/* Clip text element */

button
  position absolute
  top 70%
.home
  position relative
  height calc(100% - 78px)
  color #fff
  overflow hidden

.mask__shape
  fill: white

.shape--fill
  fill: #232127

.text--transparent
  fill: rgba(8, 105, 93, 0.29)

.box-with-text
  position absolute
  max-width 800px
  top 0
  right 0px
  bottom 0
  left 0px
  max-height 294px
  overflow hidden
  margin auto

.text-fill
  position absolute
  top 50%
  left 50%
  padding-top 35vw
  padding-left 100%
  margin auto
  overflow hidden
  -webkit-transform translate(-50%, -50%)
  -ms-transform translate(-50%, -50%)
  transform translate(-50%, -50%)

.video
  position absolute
  left 1px
  bottom 0
  width 100%
  max-width 798px

.svg-defs
  width 0
  height 0

.svg-inverted-mask
  position absolute
  width 100%
  height 100%

</style>
