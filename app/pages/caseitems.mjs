// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  let caseitems = store.caseitems || []
  const caseitem = store.caseitem || {}
  const problems = store.problems || {}

  return html`<enhance-page-container>
  <main>
    <h1 class="mb1 font-semibold text3">Caseitems page</h1>
    ${caseitems.map(item => `<article class="mb2">
<div class="mb0">
  <p class="pb-2"><strong class="capitalize">title: </strong>${item?.title || ''}</p>
  <p class="pb-2"><strong class="capitalize">about: </strong>${item?.about || ''}</p>
  <p class="pb-2"><strong class="capitalize">presentation: </strong>${item?.presentation || ''}</p>
  <p class="pb-2"><strong class="capitalize">key: </strong>${item?.key || ''}</p>
</div>
<p class="mb-1">
  <enhance-link href="/caseitems/${item.key}">Edit this caseitem</enhance-link>
</p>
<form action="/caseitems/${item.key}/delete" method="POST" class="mb-1">
  <enhance-submit-button><span slot="label">Delete this caseitem</span></enhance-submit-button>
</form>
</article>`).join('\n')}
<details class="mb0" ${Object.keys(problems).length ? 'open' : ''}>
    <summary>New caseitem</summary>
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
</details>
</main>
</enhance-page-container>
  `
}
