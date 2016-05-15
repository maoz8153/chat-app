/*jslint node:true*/
var express = require('express');
var router = express.Router();
var User = require('../model/user.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/users', function(req, res, next) {
    User.getUsers(function (err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    });
});

router.get('/api/users/:id', function(req, res, next) {
    User.findUserById(req.params.id ,function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    });
});

module.exports = router;
