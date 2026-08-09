// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getCaseitem, upsertCaseitem, validate } from '../../models/caseitems.mjs'


/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  if (req.session.problems) {
    let { problems, caseitem, ...session } = req.session
    return {
      session,
      json: { problems, caseitem }
    }
  }

  const id = req.pathParameters?.id
  const result = await getCaseitem(id)
  return {
    json: { caseitem: result }
  }
}

/**
 * @type {EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // Validate
  let { problems, caseitem } = await validate.update(req)
  if (problems) {
    return {
      session: {...session, problems, caseitem },
      json: { problems, caseitem },
      location: `/caseitems/${caseitem.key}`
    }
  }

  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, caseitem: removed, ...newSession } = session
  try {
    const result = await upsertCaseitem({ key: id, ...caseitem })
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
