<template>
<div class="about">
  About
  <div class="small">
    <LineChart :chart-data="chartData" :options="opts"></LineChart>
  </div>
  <button type="button" name="button" @click="click">posi</button>
</div>
</template>

<script>
import LineChart from '@/components/LineChart';

export default {
  name: 'about',
  components: {
    LineChart,
  },
  data() {
    return {
      chartData: null,
    };
  },
  methods: {
    fillData() {
      this.chartData = {
        label: this.getRandoomInt(),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [0, 1, 2, 3],
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [0, 1, 2, 3],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random());
    },
  },
  mounted() {
    this.fillData();
  },
};
</script>

<style>
canvas {
  width: 100%;
}
</style>
