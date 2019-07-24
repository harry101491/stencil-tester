import { Component, h, Element } from '@stencil/core';
import AgGrid from 'ag-grid';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true
})
export class MyComponent {

  @Element() el: HTMLElement;

  agGrid: HTMLElement;

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
    onGridReady: function () {
        this.gridOptions.api.sizeColumnsToFit();
    }
  };

  render() {
    return (
      <div
        id="myGrid"
        style={{height: '200px', width: '200px'}}
        class='ag-theme-balham"'
      >

      </div>
    );
  }

  componentDidLoad() {
    this.agGrid = this.el.shadowRoot.querySelector('#myGrid');
    new AgGrid.Grid(this.agGrid, this.gridOptions);
  }
}
