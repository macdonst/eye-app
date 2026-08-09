// View documentation at: https://enhance.dev/docs/learn/starter-project/api
import { deleteCaseitem } from '../../../models/caseitems.mjs'


/**
 * @type {import('@enhance/types').EnhanceApiFn}
 */
export async function post (req) {
  const id = req.pathParameters?.id

  const session = req.session
  // eslint-disable-next-line no-unused-vars
  let { problems: removedProblems, caseitem: removed, ...newSession } = session
  try {
    let caseitem = await deleteCaseitem(id)
    return {
      session: newSession,
      json: { caseitem },
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
