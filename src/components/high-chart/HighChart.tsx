import { Component, h, Element } from "@stencil/core";
import HighCharts from 'highcharts';

@Component({
  shadow: true,
  styleUrl: './HighChart.scss',
  tag: 'my-high-chart'
})
export class HighChartDemo {

  @Element() el: HTMLElement;

  chart: any;

  options: HighCharts.Options = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        name: 'first-series',
        data: [1, 2, 1, 4, 3, 6],
        type: undefined,
      }
    ]
  };

  render() {
    return (
      <div
        id='container'
        style={{ height: '400px', width: '100%' }}
      >

      </div>
    );
  }

  componentDidLoad() {
    this.chart = this.el.shadowRoot.querySelector('#container');
    new HighCharts.Chart(this.chart, this.options);
  }
}
