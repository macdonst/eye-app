// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getCaseitems, upsertCaseitem, validate } from '../models/caseitems.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const caseitems = await getCaseitems()
  if (req.session.problems) {
    let { problems, caseitem, ...session } = req.session
    return {
      session,
      json: { problems, caseitems, caseitem }
    }
  }

  return {
    json: { caseitems }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const session = req.session
  // Validate
  let { problems, caseitem } = await validate.create(req)
  if (problems) {
    return {
      session: { ...session, problems, caseitem },
      json: { problems, caseitem },
      location: '/caseitems'
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, caseitem: removed, ...newSession } = session
  try {
    const result = await upsertCaseitem(caseitem)
    return {
      session: newSession,
      json: { caseitem: result },
      location: '/caseitems'
    }
  }
  catch (err) {
    return {
      session: { ...newSession, error: err.message },
      json: { error: err.message },
      location: '/caseitems'
    }
  }
}
