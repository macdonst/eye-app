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
    this.buttonHome.addEventListener("click", this.check)
  }
  disconnectedCallback() {
    this.buttonHome.removeEventListener("click", this.check)
  }
  check = (event) => {
    const clickedOn = event.srcElement.innerText.substring(0,1)
    if (clickedOn !== this.getAttribute("correct")) {
      jellyToast('Incorrect try again', { tone: 'danger', position: 'bottom' })
    } else {
      this.correctAnswer.showModal()
    }
  }
}
