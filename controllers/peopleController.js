
const { swapiRequest } = require('../utils/swapiUtils')

const searchPeople = async (req, res) => {
  try {
    // TODO: Implement query with input field to Swapi using the swapiRequest middleware
    return res.send([
      {
        name: 'Person 1'
      },
      {
        name: 'Person 2'
      },
      {
        name: 'Person 3'
      }
    ])
  } catch (e) {
    return res.status(500).send(e)
  }
}

const getPeople = async (req, res) => {
  try {
    // TODO: Implement endpoint that queries for data and gathers Person, Homeworld, Films and Starship information within the same request
    // Use the swapiRequest for queryng
    return res.send({ data: 'method not enabled yed' })
  } catch (e) {
    return res.status(500).send(e)
  }
}

module.exports = {
  searchPeople,
  getPeople
}
