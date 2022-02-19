const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send('greenbone-computer-service works!');
});

module.exports = router;
