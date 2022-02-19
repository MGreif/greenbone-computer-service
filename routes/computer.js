const express = require('express');
const router = express.Router();
const ComputerController = require('../controller/computer.controller')

router.get('/', ComputerController.getComputers);
router.post('/', ComputerController.createComputer);
router.delete('/:id', ComputerController.deleteComputer);
router.patch('/:id', ComputerController.updateComputer);

module.exports = router;
