export default function CaseList({ html, state }) {
  const { store = {} } = state
  const { caseitems } = store
  console.log(caseitems)
  return html`
<style>
</style>
<jelly-card>
    ${caseitems.sort((a,b) => {
    if (a.casenum < b.casenum) {
      return -1;
    } else if (a.casenum > b.casenum) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }).map(caseitem => `<p><a href="/cases/${caseitem.key}">Case: ${caseitem.casenum}</a></p>`).join('\n')}
</jelly-card>
`
}
