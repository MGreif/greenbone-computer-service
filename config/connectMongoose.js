const mongoose = require('mongoose')
const { logger } = require('./logger')

const connectMongoose = () => {
  const mongoUri = process.env.MONGO_URI
  logger.debug(mongoUri)
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => logger.debug('successfully established connection to mongo'))
}

module.exports = connectMongoose