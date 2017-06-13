/**
 * 
 * @param {String} url 
 * @param {Object} data 
 */
export function jointUrl(url, data) {
  let queryString = ''
  for (let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    queryString += `&${k}=${encodeURIComponent(value)}`
  }
  queryString = queryString.substr(1)
  url = url + ((url.indexOf('?') < 0) ? '?' : '&') + queryString
  return url
}
