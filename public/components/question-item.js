/* global customElements, jellyToast, HTMLElement */
export class QuestionItem extends HTMLElement {
  static tag = "question-item"
  static {
    customElements.define(QuestionItem.tag, QuestionItem)
  }
  constructor() {
    super()
    this.buttonHome = this.querySelector("div")
    this.correctAnswer = this.querySelector("jelly-dialog")
  }
  connectedCallback() {
    this.buttonHome.addEventListener("click", this.navigate)
  }
  disconnectedCallback() {
    this.buttonHome.removeEventListener("click", this.navigate)
  }
  navigate = (event) => {
    console.log(event.srcElement.innerText)
    if (event.srcElement.innerText !== 'A. The red arrow') {
      jellyToast('Incorrect try again', { tone: 'danger', position: 'bottom' })
    } else {
      this.correctAnswer.showModal()
    }
  }
}
