// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  const caseitem = store.caseitem || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <enhance-form
  action="/caseitems/${caseitem.key}"
  method="POST">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <enhance-fieldset legend="Caseitem">
  <enhance-text-input label="Title" type="text" id="title" name="title" value="${caseitem?.title}" errors="${problems?.title?.errors}"></enhance-text-input>
  <enhance-text-input label="About" type="text" id="about" name="about" value="${caseitem?.about}" errors="${problems?.about?.errors}"></enhance-text-input>
  <enhance-text-input label="Presentation" type="text" id="presentation" name="presentation" value="${caseitem?.presentation}" errors="${problems?.presentation?.errors}"></enhance-text-input>
  <input type="hidden" id="key" name="key" value="${caseitem?.key}" />
  <enhance-submit-button style="float: right"><span slot="label">Save</span></enhance-submit-button>
  </enhance-fieldset>
</enhance-form>
</enhance-page-container>`
}
