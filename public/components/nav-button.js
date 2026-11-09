/* global customElements, navigation, HTMLElement */
export class NavButton extends HTMLElement {
  static tag = "nav-button"
  static {
    customElements.define(NavButton.tag, NavButton)
  }
  constructor() {
    super()
    this.buttonBar = this.querySelector("jelly-button")
  }
  connectedCallback() {
    this.buttonBar.addEventListener("click", this.navigate)
  }
  disconnectedCallback() {
    this.buttonBar.removeEventListener("click", this.navigate)
  }
  navigate = (event) => {
    const { target } = event
    const isButton = target.nodeName === 'JELLY-BUTTON';
    if (!isButton) {
      return;
    }
    return navigation.navigate(event.target.dataset.link).finished;
  }
}
