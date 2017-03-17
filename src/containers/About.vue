<template>
<div class="about">
  <div class="small">
    <div class="about-card">
      <transition appear name="fade">
      <nav>
        <h1 class="hidden">Skills menu</h1>
        <ul class="layout-row layout-align-center-center p-t-3">
          <router-link to="/about/skills" tag="li">SKILLS</router-link>
          <router-link to="/about/experience" tag="li">EDUCATIONS & EXPERIENCE</router-link>
        </ul>
      </nav>
    </transition>
      <card  v-if="isExperience" :data="current.card"></card>
    </div>
    <experience v-if="isExperience" :click="onDotClick"></experience>
    <skills v-if="!isExperience" :click="onDotClick"></skills>
  </div>
</div>
</template>

<script>
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Card from '@/components/Card';

const cards = [
  {
    title: 'jobs[0].title',
    subtitle: 'jobs[0].subtitle',
  },
  {
    period: 'jobs[1].period',
    name: 'jobs[1].name',
    company: 'jobs[1].company',
    description: 'jobs[1].description',
  },
  {
    period: 'jobs[2].period',
    name: 'jobs[2].name',
    company: 'jobs[2].company',
    description: 'jobs[2].description',
  },
  {
    period: 'jobs[3].period',
    name: 'jobs[3].name',
    company: 'jobs[3].company',
    description: 'jobs[3].description',
  },
  {
    period: 'jobs[4].period',
    name: 'jobs[4].name',
    company: 'jobs[4].company',
    description: 'jobs[4].description',
  },
  {
    period: 'jobs[5].period',
    name: 'jobs[5].name',
    company: 'jobs[5].company',
    description: 'jobs[5].description',
  },
  {
    period: 'jobs[6].period',
    name: 'jobs[6].name',
    company: 'jobs[6].company',
    description: 'jobs[6].description',
  },
];
export default {
  name: 'about',
  components: {
    Experience,
    Skills,
    Card,
  },
  data() {
    return {
      cards,
      current: {
        card: cards[0],
      },
      isExperience: false,
    };
  },
  methods: {
    onDotClick(idx) {
      /* eslint-disable no-console */
      console.log(this.$route.path);
      this.$set(this.current, 'card', cards[idx]);
    },
    getExperience() {
      const isExperience = this.$route.path === '/about/experience';
      this.isExperience = isExperience;
      return isExperience;
    },
  },
  watch: {
    $route: function watchRoute() {
      this.getExperience();
    },
  },
  mounted() {
    this.getExperience();
  },

};
</script>

<style lang="stylus">
  .small
    position relative
    height calc(100vh - 78px)!important
    overflow hidden
  canvas
    /*margin-left -50px!important
    width: 110%!important*/
  .about-card
    position absolute
    display inline-block
    text-align center
    left 0
    right 0
    top 0
    margin 0 auto
    h1
      color #ffffff
      font-family Poppins
      font-size 25px
      font-weight 300
    h2
      opacity 0.5
      color #ffffff
      font-family Poppins
      font-size 16px
    nav
      li
        color #00dac0
        cursor pointer
        font-family Raleway
        font-size 14px
        font-weight 500
        margin 25px
        text-transform uppercase
        &.router-link-active
          color #ffffff


</style>
