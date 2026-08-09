// View documentation at: https://enhance.dev/docs/learn/starter-project/api
/**
  * @typedef {import('@enhance/types').EnhanceApiFn} EnhanceApiFn
  */
import { getCaseitems } from '../models/caseitems.mjs'

/**
 * @type {EnhanceApiFn}
 */
export async function get () {
  const caseitems = await getCaseitems()
  return {
    json: { caseitems }
  }
}
