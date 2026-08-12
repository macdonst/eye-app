export default function CaseList({ html, state }) {
  const { store = {} } = state
  const { caseitems } = store
  console.log(caseitems)
  return html`
<style>
</style>
<jelly-card>
    ${caseitems.map(caseitem => `<p><a href="/cases/${caseitem.key}">${caseitem.title}</a></p>`).join('\n')}
</jelly-card>
`
}
