const commentCollection = require("../model/blogCommentModel");

const createComment = async (request, response) => {
  const tempComments = request.body;
  const mongooseResponse = await commentCollection.create(tempComments);
  return response.status(200).json({
    success: true,
    message: "Comment added successfully",
  });
};

module.exports = { createComment };
