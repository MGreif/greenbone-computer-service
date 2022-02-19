const ComputerModel = require("../models/computer.model")
const sendNotification = require("../utils/sendNotification")

const createComputer = async (computerData = {}) => {
  const result = await ComputerModel.create(computerData)
  return result
}

const getComputers = async (filter = {}) => {
  const result = await ComputerModel.find(filter)
  return result
} 

const deleteComputer = async (id) => {
  const result = await ComputerModel.deleteOne({ _id: id })
  return result
}

const updateComputer = async (id, updateData = {}) => {
  const result = await ComputerModel.updateOne({ _id: id }, { $set: updateData })
  return result
}

const checkAndNotifyIfNecessary = async (employeeAbbreviation) => {
  const allocatedComputers = await getComputers({ employeeAbbreviation })

  if (allocatedComputers.length >= 3) {
    await sendNotification(employeeAbbreviation, allocatedComputers.length)
  }
}

module.exports = { createComputer, getComputers, deleteComputer, updateComputer, checkAndNotifyIfNecessary }