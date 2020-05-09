const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  const str = path.join(__dirname, '../public/index.html');
  res.sendFile(str);
});

module.exports = router;
