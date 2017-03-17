import {
  Line,
} from 'vue-chartjs';

export default Line.extend({
  props: ['click'],
  data() {
    return {
      chartData: {
        labels: [0, 'Javascript', 'HTML', 'CSS', 'Angular.js 1 & 2', 'Vue.js', 'BackboneJS', 'Scrum', 'node.js', 'mongoDB', '0'],
        datasets: [{
          data: [80, 80, 90, 92, 80, 75, 65, 87, 73, 82, 92],
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
          fill: false,
        }],
      },
      options: {
        scales: {
          xAxes: [{
            display: true,
            position: 'top',
            gridLines: {
              display: true,
              color: 'rgba(255, 255, 255, 0.1)',
            },
          }],
          yAxes: [{
            display: true,
            ticks: {
              max: 100,
              min: 50,
              stepSize: 5,
            },
            gridLines: {
              display: true,
              color: 'rgba(255, 255, 255, 0.1)',
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
