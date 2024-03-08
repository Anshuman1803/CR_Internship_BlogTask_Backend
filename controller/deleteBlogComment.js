const commentCollection = require("../model/blogCommentModel");

const deleteBlogComment = async (req, res) => {
  const { blogID } = req.params;
  const mongooseResponse = await commentCollection.deleteMany({
    blogID: blogID,
  });
  return res.status(200).json({
    msg: "Delete Successfully",
    mongooseResponse,
  });
};
module.exports = { deleteBlogComment };
