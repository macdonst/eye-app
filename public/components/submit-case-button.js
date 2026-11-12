/* global customElements, document, HTMLElement */
export class SubmitCaseButton extends HTMLElement {
  static tag = "submit-case-button"
  static {
    customElements.define(SubmitCaseButton.tag, SubmitCaseButton)
  }
  constructor() {
    super()
    this.form = document.querySelector("form")
    this.button = this.querySelector("jelly-button")

    console.log(this.form)
  }
  connectedCallback() {
    this.button.addEventListener("click", this.submit)
  }
  disconnectedCallback() {
    this.button.removeEventListener("click", this.submit)
  }
  submit = (event) => {
    console.log(event)
  }
}
