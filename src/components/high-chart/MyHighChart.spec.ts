import { MyHighChart } from './MyHighChart';
// import { newSpecPage } from '@stencil/core/testing';

describe('My High Chart Test Suite', () => {
  let currentComponent: MyHighChart;

  beforeAll(async () => {
    currentComponent = new MyHighChart();
    currentComponent.options = {
      chart: {
        type: 'test'
      },
      title: {
        text: 'My Test chart'
      },
      series: [
        {
          name: 'first-series',
          data: [1, 2, 1, 4, 3, 6],
          type: undefined,
        }
      ]
    };
  });

  it('Component should render', () => {
    expect(currentComponent).toMatchSnapshot();
  });

  // it('componentDidLoad() must instantiate HighChart Chart class', async () => {
  //   const page = await newSpecPage({
  //     components: [MyHighChart],
  //     html: `<my-high-chart></my-high-chart>`
  //   });
  //   const highChart = page.body.querySelector('my-high-chart');
  //   expect(highChart).not.toBeNull();
  // });
});

// currentComponent.el = {
//   shadowRoot: {
//     querySelector: jest.fn().mockImplementation(() => {}),
//     ...currentComponent.el.shadowRoot,
//   },
//   ...currentComponent.el,
// };
// currentComponent.componentDidLoad();
// expect(HighCharts.Chart).toHaveBeenCalledWith(currentComponent.chart, currentComponent.options);
