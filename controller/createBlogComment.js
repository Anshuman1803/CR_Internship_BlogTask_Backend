const commentCollection = require("../model/blogCommentModel");
const blogCollection = require("../model/blogModel");

const createComment = async (request, response) => {
  const tempComments = request.body;
  const mongooseResponse = await commentCollection.create(tempComments);
  if (mongooseResponse) {
    const updateResponse = await blogCollection.updateOne(
      { _id: tempComments.blogID },
      {
        $inc: { blogComments: 1 },
      }
    );
    if (updateResponse.acknowledged) {
      return response.status(200).json({
        success: true,
        message: "Comment added successfully",
      });
    }
  } else {
    return response.status(400).send("Something went wrong");
  }
};

module.exports = { createComment };
