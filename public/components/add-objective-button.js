/* global customElements, document, HTMLElement */
export class AddObjectiveButton extends HTMLElement {
  static tag = "add-objective-button"
  static {
    customElements.define(AddObjectiveButton.tag, AddObjectiveButton)
  }
  constructor() {
    super()
    this.button = this.querySelector("jelly-button")
  }
  connectedCallback() {
    this.button.addEventListener("click", this.add)
  }
  disconnectedCallback() {
    this.button.removeEventListener("click", this.add)
  }
  add = (event) => {
    const { target } = event

    // Create node
    const newObjective = document.createElement("jelly-input")
    newObjective.setAttribute("type", "text")
    newObjective.setAttribute("name", "objective")
    newObjective.className = "w-100"

    // Insert above Add button
    const parent = target.parentNode.parentNode
    parent.insertBefore(newObjective, target.parentNode)
  }
}
