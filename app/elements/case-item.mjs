export default function CaseItem({ html, state }) {
  const { store = {} } = state
  const { caseitem } = store
  return html`
<style>
</style>
<jelly-card>
  <h1 class="text2 text3-lg leading1 font-bold p-name mbe2-lg">${caseitem.title}</h1>
  <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">About the Disease</h2>
  <p>${caseitem.about}</p>
  <h2 class="font-bold mbe0 mbs1 text1 text2-lg leading2">Case presentation</h2>
  <p>${caseitem.presentation}</p>
</jelly-card>
<jelly-card class="mbs0">
  <h2 class="font-bold mbe0 text1 text2-lg leading2">Learning Objectives</h2>
  <p>${caseitem.presentation}</p>
</jelly-card>
`
}
