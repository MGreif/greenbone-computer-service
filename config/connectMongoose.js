const mongoose = require('mongoose')
const debug = require('debug')('service:mongoose')

const connectMongoose = () => {
  const mongoUri = process.env.MONGO_URI
  debug(mongoUri)
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => debug('successfully established connection to mongo'))
}

module.exports = connectMongoose