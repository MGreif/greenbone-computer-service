const debug = require('debug')('service:error')

class HttpError extends Error {  
  constructor (statusCode = '500', message = 'An Error Occurred') {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

class NotFoundError extends Error {
  constructor (ressource = '') {
    super()
    this.message = 'The requested ressource could not be found: ' + ressource
    this.statusCode = 404
  }
}


// eslint-disable-next-line no-unused-vars
const errorHandler = (error, req, res, next) => {
  debug(error)
  res.status(error.statusCode || 500).json({ success: false, error: error.message })
}

module.exports = { HttpError, NotFoundError, errorHandler }