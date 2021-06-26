var express = require('express');
var app = express();
var router = express.Router();
//const config = require('../config')

const SampleUserModel = require('../models/SampleUserModel')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "mydomain.com.TLD");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/** GET ALL USERS **/

router.get('/', (req, res) =>
SampleUserModel.findAll()
    .then(users => {
        res.send(users)
    })
    .catch(err => console.log(err))
)

module.exports = router;