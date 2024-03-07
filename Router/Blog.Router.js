const { createComment } = require("../controller/createBlogComment");
const { createPost } = require("../controller/createBlogPost");
const { deletePost } = require("../controller/deleteBlogPost");
const commentCollection = require("../model/blogCommentModel");
const route = require("express").Router();

route.post("/create-blog", createPost);
route.post("/delete-blog/:id", deletePost);
route.post("/comments/create-comment", createComment);
route.get("/comments/:id", async (req, res) => {
  const id = req.params.id;
  const mongooseResponse = await commentCollection.find({ blogID: id });
  return res.send(mongooseResponse);
});

module.exports = route;
