const { userLogin } = require('../controller/userLogin');
const { userRegister } = require('../controller/userRegister');

const route = require('express').Router();

route.post("/register", userRegister)
route.post("/login", userLogin);


module.exports = route