import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  render() {
    return (
      <div>
        <p> First Stencil App!</p>
      </div>
    );
  }
}
