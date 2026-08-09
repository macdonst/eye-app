// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getCaseitem } from '../../models/caseitems.mjs'

/**
 * @type {EnhanceApiFn}
 */
export async function get (req) {
  const id = req.pathParameters?.id
  const result = await getCaseitem(id)
  return {
    json: { caseitem: result }
  }
}

