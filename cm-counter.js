//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement("template");
template.innerHTML = `
<div class='cm-counter'>
  <slot name="title">Default Header</slot>
  <slot name="description"></slot>
  <slot name="count"></slot>
  <slot name='actions'></slot>
</div>

<style>
.cm-counter {
  flex-direction: row;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
`;

class CounterSample extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define("cm-counter", CounterSample);
// <cm-counter>
