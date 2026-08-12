export default function CaseItem({ html, state }) {
  const { store = {} } = state
  const { caseitem } = store
  return html`
<style>
</style>
<jelly-card>
  <h1 class="text2 text3-lg leading1 font-bold p-name mbe2-lg">${caseitem.title}</h1>
  <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">Case presentation</h2>
  <p>${caseitem.presentation}</p>
</jelly-card>
<jelly-card class="mbs0">
  <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">Question 1</h2>
  <p>On this B-scan, where is the scleral buckle located? On this image we see an L9 view of the right eye along with a marker indicating the thickness of the posterior ocular coats.</p>
  <img class="mbs0" src="/_public/images/case-8/question-1.png"/>
  <question-item>
    <jelly-button>A. The red arrow</jelly-button>
    <jelly-button>B. The yellow arrow</jelly-button>
    <jelly-button>C. The blue arrow</jelly-button>
    <jelly-button>D. The green arrow</jelly-button>
  </question-item>
</jelly-card>
<jelly-card class="mbs0">
  <h2 class="font-bold mbe0 text1 text2-lg leading2">Learning Objectives</h2>
  <p>${caseitem.presentation}</p>
</jelly-card>
`
}
