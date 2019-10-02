const express = require('express');

const controller = require('../controllers')


const router = express.Router();

router.get('/data', controller.getData);
router.post('/data', controller.postData);

module.exports = router;
