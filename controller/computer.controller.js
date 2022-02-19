const { HttpError, NotFoundError } = require("../errorHandler")
const ComputerService = require("../services/computer.service")

const createComputer = async (req, res, next) => {
  try {

    const { body } = req
    // I am passing all body params because mongoose will handle which properties are used and which are not
    const result = await ComputerService.createComputer(body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const getComputers = async (req, res, next) => {
  try {
  const { query } = req
  console.log(query)
  const result = await ComputerService.getComputers(query)
  res.json(result)
  } catch (error) {
    next(error)
  }
} 

const deleteComputer = async (req, res, next) => {
  try {
    const { id } = req.params

    if (!id) throw new NotFoundError('No id passed')

    const result = await ComputerService.deleteComputer(id)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

const updateComputer = async (req, res, next) => {
  try {
    const { id } = req.params
    const { body } = req

    if (!id) throw new NotFoundError('No id passed')

    if (body.employeeAbbreviation && body.employeeAbbreviation.length !== 3) { 
      throw new HttpError(400, "The employee abbrevation should be exactly three letters")
    }

    console.log(body)

    const result = await ComputerService.updateComputer(id, body)
    res.json(result)
  } catch (error) {
    next(error)
  }
}

module.exports = { createComputer, getComputers, deleteComputer, updateComputer }