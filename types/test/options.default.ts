import {Chart} from 'chart.js-v3';
import {Options} from '../options';

const options: Options = {
  // all optional datalabels options
};

const chart = new Chart('id', {
  type: 'bar',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        datalabels: options
      }
    ]
  },
  options: {
    plugins: {
      datalabels: options
    }
  }
});
