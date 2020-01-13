
const authMiddleware = (req, res, next) => {
  // TODO: Implement middleware that checks the headers incoming from front end
  return res.status(401).send({ error: 'not authorized, please implement an auth middleware' })
}

module.exports = {
  authMiddleware
}
