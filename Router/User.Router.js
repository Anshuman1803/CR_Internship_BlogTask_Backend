const { DeleteUser } = require("../controller/DeleteUser");
const { getBlogs } = require("../controller/getBlogs");
const {  updateUserPassword } = require("../controller/updatePassword");
const { userLogin } = require("../controller/userLogin");
const { userRegister } = require("../controller/userRegister");
const route = require("express").Router();

route.post("/register", userRegister);
route.post("/deleteuser/:email", DeleteUser)
route.post("/login", userLogin);
route.patch("/update-password", updateUserPassword)
route.get("/blog/:email", getBlogs);

module.exports = route;
