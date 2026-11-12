export default function CaseItem({ html, state }) {
  const { store = {} } = state
  const { caseitem } = store
  console.log(caseitem)
  const questions = buildQuestions(caseitem.question)
  return html`
<style>
</style>
<jelly-card>
  <h1 class="text2 text3-lg leading1 font-bold p-name mbe2-lg">Case ${caseitem.casenum}</h1>
  <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">Presentation</h2>
  <p>${caseitem.presentation}</p>
</jelly-card>
${questions}
<jelly-card class="mbs0">
  <h2 class="font-bold mbe0 text1 text2-lg leading2">Learning Objectives</h2>
  ${caseitem?.objective?.map(objective => `<p>${objective}</p>`).join('')}
</jelly-card>
`
}

function buildQuestions(question) {
  const text = question.map((q, i) => {
    return `<jelly-card class="mbs0">
  <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">Question ${i+1}</h2>
  <p>${q.text}</p>
  <question-item correct="${q.correct}">
    <jelly-button>A. ${q.optiona}</jelly-button>
    <jelly-button>B. ${q.optionb}</jelly-button>
    <jelly-button>C. ${q.optionc}</jelly-button>
    <jelly-button>D. ${q.optiond}</jelly-button>
    <jelly-dialog>
        <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">Correct</h2>
        <p style="margin:0">${q.answer}</p>
    </jelly-dialog>
  </question-item>
</jelly-card>`
  })
  return text.join('')
}
