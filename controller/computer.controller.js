const ComputerService = require("../services/computer.service")

const createComputer = async (req, res) => {
  const { body } = req
  // I am passing all body params because mongoose will handle which properties are used and which are not
  const result = await ComputerService.createComputer(body)
  res.json(result)
}

const getComputers = async (req, res) => {
  const { query } = req
  console.log(query)
  const result = await ComputerService.getComputers(query)
  res.json(result)
} 

const deleteComputer = async (req, res) => {
  const { id } = req.params

  if (!id) throw new Error('No id passed')

  const result = await ComputerService.deleteComputer(id)
  res.json(result)
}

const updateComputer = async (req, res) => {
  const { id } = req.params
  const { body } = req.body

  if (!id) throw new Error('No id passed')

  const result = await ComputerService.updateComputer(id, body)
  res.json(result)
}

module.exports = { createComputer, getComputers, deleteComputer, updateComputer }