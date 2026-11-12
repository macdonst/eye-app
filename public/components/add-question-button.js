/* global customElements, document, HTMLElement */
export class AddQuestionButton extends HTMLElement {
  static tag = "add-question-button"
  static {
    customElements.define(AddQuestionButton.tag, AddQuestionButton)
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
    const container = document.createElement('div')
    const question = ''
    const errors = ''
    const answerErrors = ''
    const index = parseInt(this.getAttribute('index')) + 1
    this.setAttribute('index', index)
    console.log(index)

    function addLabel(forId, text) {
      const label = document.createElement('jelly-label')
      label.setAttribute('for', forId)
      label.textContent = text
      container.append(label)
    }

    function addInput(key, label, value, errors) {
      const id = `question[${index}].${key}`

      const input = document.createElement('jelly-input')
      input.setAttribute('label', label)
      input.setAttribute('type', 'text')
      input.setAttribute('id', id)
      input.setAttribute('name', id)
      input.setAttribute('value', value ?? '')
      input.setAttribute('errors', errors ?? '')
      input.className = 'w-100'

      container.append(input)
    }

    function addTextarea(key, label, value, errors) {
      const id = `question[${index}].${key}`

      const textarea = document.createElement('jelly-textarea')
      textarea.setAttribute('label', label)
      textarea.setAttribute('type', 'text')
      textarea.setAttribute('id', id)
      textarea.setAttribute('name', id)
      textarea.setAttribute('value', value ?? '')
      textarea.setAttribute('errors', errors ?? '')
      textarea.className = 'w-100'

      container.append(textarea)
    }

    // Question
    addLabel(`question[${index}].text`, `Question ${index+1}`)
    addInput('text', 'Question', question?.text, errors)

    // Options
    for (const option of ['a', 'b', 'c', 'd']) {
      const key = `option${option}`
      const label = `Option ${option.toUpperCase()}`

      addLabel(`question[${index}].${key}`, label)
      addInput(key, label, question?.[key], errors)
    }

    // Correct answer
    addLabel(`question[${index}].correct`, 'Correct Answer')

    const form = document.getElementById('caseform')
    const select = document.createElement('jelly-select')
    select.id = `question[${index}].correct`
    select.setAttribute('name', `question[${index}].correct`);
    select.className = 'w-100'
    select.setAttribute('form', form.id)
    select.form = form
    console.log(form)

    for (const value of ['A', 'B', 'C', 'D']) {
      const option = document.createElement('jelly-option')
      option.setAttribute('value', value)
      option.textContent = value
      select.append(option)
    }

    container.append(select)

    // Answer
    addLabel(`question[${index}].answer`, 'Answer')
    addTextarea('answer', 'Answer', question?.answer, answerErrors)

    // Insert above Add button
    const parent = target.parentNode.parentNode
    parent.insertBefore(container, target.parentNode)
  }
}
