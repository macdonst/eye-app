// View documentation at: https://enhance.dev/docs/learn/starter-project/pages
/**
  * @type {import('@enhance/types').EnhanceElemFn}
  */
export default function Html ({ html, state }) {
  const { store } = state
  let caseitems = store.caseitems || []
  const caseitem = store.caseitem || {}
  const problems = store.problems || {}

  return html`<jelly-theme mode="auto">
    <app-header></app-header>
    <main class="p0">
      <site-container>
        <jelly-card>
    ${caseitems.map(item => `<article class="mb2">
<div class="mb0">
  <p class="pb-2"><strong class="capitalize">case number: </strong>${item?.casenum || ''}</p>
  <p class="pb-2"><strong class="capitalize">title: </strong>${item?.title || ''}</p>
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
    <form
  action="/caseitems/${caseitem.key}"
  method="POST"
  id="caseform">
  <div class="${problems.form ? 'block' : 'hidden'}">
    <p>Found some problems!</p>
    <ul>${problems.form}</ul>
  </div>
  <jelly-fieldset legend="New Case">
  <jelly-label for="casenum">Case Number</jelly-label>
  <jelly-input label="Case Number" type="text" id="casenum" name="casenum" value="${caseitem?.casenum}" errors="${problems?.about?.errors}" class="w-100"></jelly-input>
  <jelly-label for="title">Title</jelly-label>
  <jelly-input label="Title" type="text" id="title" name="title" value="${caseitem?.title}" errors="${problems?.title?.errors}" class="w-100"></jelly-input>
  <jelly-label for="presentation">Presentation</jelly-label>
  <jelly-textarea label="Presentation" type="text" id="presentation" name="presentation" value="${caseitem?.presentation}" errors="${problems?.presentation?.errors}" class="w-100"></jelly-textarea>
  <input type="hidden" id="key" name="key" value="${caseitem?.key}" />

  <jelly-divider>Questions</jelly-divider>
  <jelly-label for="question[0].text">Question 1</jelly-label>
  <jelly-input label="Question" type="text" id="question[0].text" name="question[0].text" value="${caseitem?.question && caseitem?.question[0]?.text}" errors="${problems?.about?.errors}" class="w-100"></jelly-input>
  <jelly-label for="question[0].optiona">Option A</jelly-label>
  <jelly-input label="Option A" type="text" id="question[0].optiona" name="question[0].optiona" value="${caseitem?.question && caseitem?.question[0]?.optiona}" errors="${problems?.about?.errors}" class="w-100"></jelly-input>
  <jelly-label for="question[0].optionb">Option B</jelly-label>
  <jelly-input label="Option B" type="text" id="question[0].optionb" name="question[0].optionb" value="${caseitem?.question && caseitem?.question[0]?.optionb}" errors="${problems?.about?.errors}" class="w-100"></jelly-input>
  <jelly-label for="question[0].optionc">Option C</jelly-label>
  <jelly-input label="Option C" type="text" id="question[0].optionc" name="question[0].optionc" value="${caseitem?.question && caseitem?.question[0]?.optionc}" errors="${problems?.about?.errors}" class="w-100"></jelly-input>
  <jelly-label for="question[0].optiond">Option D</jelly-label>
  <jelly-input label="Option D" type="text" id="question[0].optiond" name="question[0].optiond" value="${caseitem?.question && caseitem?.question[0]?.optiond}" errors="${problems?.about?.errors}" class="w-100"></jelly-input>
  <jelly-label for="question[0].correct">Correct Answer</jelly-label>
  <jelly-select id="question[0].correct" name="question[0].correct" class="w-100">
    <jelly-option value="A">A</jelly-option>
    <jelly-option value="B">B</jelly-option>
    <jelly-option value="C">C</jelly-option>
    <jelly-option value="D">D</jelly-option>
  </jelly-select>
  <jelly-label for="question[0].answer">Answer</jelly-label>
  <jelly-textarea label="Answer" type="text" id="question[0].answer" name="question[0].answer" value="${caseitem?.question && caseitem?.question[0]?.answer}" errors="${problems?.presentation?.errors}" class="w-100"></jelly-textarea>
  <add-question-button index="0"></add-question-button>

  <jelly-divider>Learning Objectives</jelly-divider>
  <jelly-input type="text" name="objective" class="w-100"></jelly-input>
  <add-objective-button></add-objective-button>
  <submit-case-button></submit-case-button>
  </jelly-fieldset>
</form>
        </jelly-card>
      </site-container>
    </main>
    <app-footer></app-footer>
</jelly-theme>
  `
}
