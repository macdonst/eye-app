import data from '@begin/data'
import { validator } from '@begin/validator'
import { Caseitem } from './schemas/caseitem.mjs'

const deleteCaseitem = async function (key) {
  await data.destroy({ table: 'caseitems', key })
  return { key }
}

const upsertCaseitem = async function (caseitem) {
  return data.set({ table: 'caseitems', ...caseitem })
}

const getCaseitem = async function (key) {
  return data.get({ table: 'caseitems', key })
}

const getCaseitems = async function () {
  const databasePageResults = await data.page({
    table: 'caseitems',
    limit: 25
  })

  let caseitems = []
  for await (let databasePageResult of databasePageResults) {
    for (let caseitem of databasePageResult) {
      delete caseitem.table
      caseitems.push(caseitem)
    }
  }

  return caseitems
}

const validate = {
  shared (req) {
    return validator(req, Caseitem)
  },
  async create (req) {
    let { valid, problems, data } = validate.shared(req)
    if (req.body.key) {
      problems['key'] = { errors: '<p>should not be included on a create</p>' }
    }
    // Insert your custom validation here
    return !valid ? { problems, caseitem: data } : { caseitem: data }
  },
  async update (req) {
    let { valid, problems, data } = validate.shared(req)
    // Insert your custom validation here
    return !valid ? { problems, caseitem: data } : { caseitem: data }
  }
}

export {
  deleteCaseitem,
  getCaseitem,
  getCaseitems,
  upsertCaseitem,
  validate
}
