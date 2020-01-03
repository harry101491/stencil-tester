import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {

  @Element() el: HTMLElement;

  agGrid: any;

  columnDefs: [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ]

  rowData: [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ]

  gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    onGridReady: function (params) {
      console.log('Inside onGridReady', params);
    }
  };

  render() {
    return (
      <ag-grid
        ref={(el) => this.agGrid = el}
        style={{ width: '200px', height: '200px'}}
      >

      </ag-grid>
    );
  }

  componentDidLoad() {
    console.log('The value of agGrid is: ', this.agGrid);
    this.agGrid.gridOptions = this.gridOptions;
  }
}
