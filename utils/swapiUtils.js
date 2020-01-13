const request = require('request-promise-native')

const SWAPI_URI = 'https://swapi.co/api'

const swapiRequest = ({ method, body, uri }) => {
  const options = {
    uri: `${SWAPI_URI}${uri}`,
    method,
    body,
    json: true
  }
  return request(options)
}

module.exports = {
  swapiRequest
}
