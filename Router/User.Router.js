const { getBlogs } = require("../controller/getBlogs");
const { userLogin } = require("../controller/userLogin");
const { userRegister } = require("../controller/userRegister");
const route = require("express").Router();

route.post("/register", userRegister);
route.post("/login", userLogin);
route.get("/blog/:email", getBlogs);

module.exports = route;
