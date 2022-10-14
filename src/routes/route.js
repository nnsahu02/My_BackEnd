const express = require('express');
const router = express.Router();

const prb1 = require('../logger/logger.js')
const prb2 = require('../util/helper')
const prb3 = require('../validator/formatter')
const prb4 = require('../lodash/lodash')


router.get('/test-me1', function (req, res) {

    console.log(prb1.welcome())
    console.log(prb2.getBatchInfo())
    console.log(prb3.qn3())
    console.log(prb4.lodash())
    
    res.send('Assignment solution')

});


module.exports = router;

