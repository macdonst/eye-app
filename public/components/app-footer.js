/* global customElements, navigation, HTMLElement */
export class AppFooter extends HTMLElement {
  static tag = "app-footer"
  static {
    customElements.define(AppFooter.tag, AppFooter)
  }
  constructor() {
    super()
    this.buttonBar = this.querySelector("jelly-card")
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
