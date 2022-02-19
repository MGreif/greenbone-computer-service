const mongoose = require("mongoose");

const computerSchema = new mongoose.Schema({
  macAddr: { type: String, required: true },
  name: { type: String, required: true },
  ip: { type: String, required: true },
  employeeAbbreviation: { type: String, maxlength: 3, minlength: 3, required: true },
  description: String
})

const ComputerModel = mongoose.model('computer', computerSchema)

module.exports = ComputerModel