const mongoose = require("mongoose");
const commentModel = mongoose.Schema({
  blogID: {
    type: String,
  },
  authorName: {
    type: String,
  },
  authorEmail: {
    type: String,
  },
  commentDate: {
    type: Date,
  },
  commentText: {
    type: String,
    reqired: true,
  },
});
const commentCollection = mongoose.model("comments", commentModel);

module.exports = commentCollection;
