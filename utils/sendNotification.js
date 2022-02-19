const superagent = require('superagent')

const { NOTIFY_SERVICE_HOST, NOTIFY_SERVICE_PORT } = process.env

const sendNotification = (employeeAbbreviation, allocatedComputers) => {
  const notificationServiceURI = `http://${NOTIFY_SERVICE_HOST}:${NOTIFY_SERVICE_PORT}/api/notify`
  console.log(notificationServiceURI)
  return superagent
    .post(notificationServiceURI)
    .send({
      level: 'warning',
      employeeAbbreviation,
      message: `This employee is allocated with ${allocatedComputers} computers`
    })
}

module.exports = sendNotification