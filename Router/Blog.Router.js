const { createPost } = require("../controller/createBlogPost");
const route = require("express").Router();

route.post("/create-blog", createPost);
// route.post("/create-comments", userLogin);

module.exports = route;
