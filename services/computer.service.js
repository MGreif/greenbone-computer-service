const ComputerModel = require("../models/computer.model")

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

module.exports = { createComputer, getComputers, deleteComputer, updateComputer }