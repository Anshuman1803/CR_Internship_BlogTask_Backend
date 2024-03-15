const { createComment } = require("../controller/createBlogComment");
const { createPost } = require("../controller/createBlogPost");
const { updatePost } = require("../controller/updatePost");
const { deleteBlogComment } = require("../controller/deleteBlogComment");
const { deletePost } = require("../controller/deleteBlogPost");
const commentCollection = require("../model/blogCommentModel");
const blogCollection = require("../model/blogModel");
const route = require("express").Router();

route.post("/create-blog", createPost);
route.post("/update-blog", updatePost);
route.post("/delete-blog/:id", deletePost);
route.post("/comments/create-comment", createComment);
route.post("/delete-comments/:blogID", deleteBlogComment);

route.post("/delete/comment", async (request, response) => {
  const { blogID, commentID } = request.body;
  const mongooseResponse = await commentCollection.deleteOne({
    _id: commentID,
  });

  if (mongooseResponse.acknowledged) {
    const updateResponse = await blogCollection.updateOne(
      { _id: blogID },
      {
        $inc: { blogComments: -1 },
      }
    );

    if (updateResponse.acknowledged) {
      return response.status(200).json({
        success: true,
        message: "Comment deleted successfully",
      });
    }
  } else {
    return response.status(400).send("Something went wrong");
  }
});

route.get("/comments/:id", async (req, res) => {
  const id = req.params.id;
  const mongooseResponse = await commentCollection.find({ blogID: id });
  return res.send(mongooseResponse);
});

module.exports = route;
