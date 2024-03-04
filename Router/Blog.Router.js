const { createPost } = require("../controller/createBlogPost");
const { deletePost } = require("../controller/deleteBlogPost");
const route = require("express").Router();

route.post("/create-blog", createPost);
route.post("/delete-blog/:id", deletePost)
// route.post("/create-comments", userLogin);

module.exports = route;
