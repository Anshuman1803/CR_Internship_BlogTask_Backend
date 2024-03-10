const commentCollection = require("../model/blogCommentModel");
const blogCollection = require("../model/blogModel");
const registredUserCollection = require("../model/userModel");
const DeleteUser = async (req, res) => {
  const { email } = req.params;
  const blogDeleteResponse = await blogCollection.deleteMany({
    blogAuthor: email,
  });

  if (blogDeleteResponse.acknowledged) {
    const commentDeleteResponose = await commentCollection.deleteMany({
      authorEmail: email,
    });
    if (commentDeleteResponose.acknowledged) {
      const accountDeleteResponse =
        await registredUserCollection.findOneAndDelete({
          userEmail: email,
        });

      if (accountDeleteResponse) {
        return res.send({
          success: true,
          errMsg: "Account deleted successfully",
        });
      }
    }
  }
};

module.exports = { DeleteUser };
