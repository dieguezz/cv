import {
  Line,
} from 'vue-chartjs';

export default Line.extend({
  props: ['click'],
  data() {
    return {
      chartData: {
        labels: ['Javascript', 'HTML', 'CSS', 'Angular.js 1 & 2', 'Vue.js', 'BackboneJS', 'Scrum', 'node.js', 'mongoDB'],
        datasets: [{
          data: [80, 90, 92, 80, 75, 69, 87, 73, 76],
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
          fillColor: '#fff',
          fill: true,
        }],
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            display: true,
            position: 'bottom',
            gridLines: {
              display: true,
              color: 'rgba(255, 255, 255, 0.1)',
              zeroLineColor: 'rgba(255, 255, 255, 0.1)',
              drawBorder: false,
              drawOnChartArea: true,
              drawTicks: true,
              id: 'axis-x',
            },
          }],
          yAxes: [{
            display: true,
            ticks: {
              max: 100,
              min: 60,
              stepSize: 5,
              padding: 50,
            },
            gridLines: {
              display: true,
              drawBorder: true,
            },
          }],
        },
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
          intersect: false,
        },
      },
    };
  },
  methods: {
    setColor(gradient, grd) {
      this.chartData.datasets[0].borderColor = gradient;
      this.chartData.datasets[0].backgroundColor = grd;
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
    this.chartData.datasets[0].data.push(0);
    this.chartData.datasets[0].data.push(0);
    const canvas = this.$el.querySelector('#line-chart');
    const ctx = canvas.getContext('2d');
    const gradient =
      ctx.createLinearGradient(0, 300, 1200, 200);
    gradient.addColorStop(0.000, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(0.112, 'rgba(220, 112, 103, 1.000)');
    gradient.addColorStop(0.880, 'rgba(220, 112, 103, 1.000)');
    gradient.addColorStop(1.000, 'rgba(0, 0, 0, 0)');

    const grd = ctx.createRadialGradient(100, 0, 100, 600, 0, 700);
    grd.addColorStop(0, 'rgba(151,187,205,0.7)');
    grd.addColorStop(1, 'rgba(151,187,205,0)');
    this.setColor(gradient, grd);
    this.renderChart(this.chartData, this.options);
  },
});
