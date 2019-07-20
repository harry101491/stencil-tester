import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {
  @Element() el: HTMLElement;

  agGrid: any;

  columnDefs = [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ];

  rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];

  gridOptions = {
    columnDefs: this.columnDefs,
    rowData: this.rowData,
    onGridReady: function () {
      this.gridOptions.api.sizeColumnsToFit();
    }
  };

  render() {
    console.log('Inside render function');
    return (
      <ag-grid
        id="my-grid"
        style={{ height: '150px', width: '600px' }}
        class="ag-theme-balham"
      >

      </ag-grid>
    );
  }

  componentDidLoad() {
    console.log('Inside component did load function');
    this.agGrid = document.querySelector('#my-grid');
    console.log(this.agGrid);
  }

  // @Watch('agGrid')
  // agGridInitializationHandler() {
  //   this.agGrid.gridOptions = this.gridOptions;
  // }

}
