import { HighChart } from './HighChart';

describe('High Chart Test Suite', () => {
  let currentComponent: any;

  beforeAll(() => {
    currentComponent = new HighChart();
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

  // it('componentDidLoad() must instantiate HighChart Chart class', () => {

  // });
});
