import { Line } from 'vue-chartjs';

export default Line.extend({
  props: ['click'],
  data() {
    return {
      chartData: {
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        datasets: [{
          data: [2000, 2004, 2004, 2009, 2010, 2014, 2016, 2020],
          borderColor: '#dc7067',
          borderWidth: 4,
          pointBackgroundColor: '#00dac0',
          pointBorderColor: '#00dac0',
          pointRadius: 7,
          pointHoverRadius: 9,
          pointHitRadius: 7,
          pointHoverBorderWidth: 14,
          pointHoverBorderColor: 'rgba(0, 218, 192, 0.5)',
          backgroundColor: '#232127',
          fillColor: '#ffffff',
        }],
      },
      options: {
        scales: {
          xAxes: [{
            display: false,
          }],
          yAxes: [{
            display: false,
            ticks: {
              max: 2070,
              min: 1960,
              stepSize: 0.5,
            },
          }],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
      },
    };
  },
  methods: {
    setColor(gradient) {
      this.chartData.datasets[0].borderColor = gradient;
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
    /* eslint-disable no-underscore-dangle, no-console */
    // this.chartData is created in the mixin
    // .data.datasets[0]._meta[0].data[0]._view.disable = true
    this.chartData.datasets[0].data.push(0);
    this.chartData.datasets[0].data.push(0);
    console.log('start!');
    const canvas = this.$el.querySelector('#line-chart');
    const ctx = canvas.getContext('2d');
    const gradient =
    ctx.createLinearGradient(0, 300, 1100, 200);
    gradient.addColorStop(0.000, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.112, 'rgba(220, 112, 103, 1.000)');
    gradient.addColorStop(0.880, 'rgba(220, 112, 103, 1.000)');
    gradient.addColorStop(1.000, 'rgba(0, 0, 0, 0)');
    this.setColor(gradient);
    this.renderChart(this.chartData, this.options);

    canvas.onmousemove = (evt) => {
      const el = this._chart.getElementAtEvent(evt)[0];
      if (el) {
        this.click(el._index);
      }
    };
  },
});
