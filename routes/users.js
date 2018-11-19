var express = require('express');
var router = express.Router();
var api = require('../controllers/pesan')

/* GET users listing. */
router.post('/',api.sendmail)

module.exports = router;
