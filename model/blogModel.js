const mongoose = require("mongoose");
const blogModel = mongoose.Schema({
  blogAuthor: {
    type: String,
    required: true,
  },
  blogPoster: {
    type: String,
    required: true,
  },

  blogTitle: {
    type: String,
    required: true,
  },

  blogDesc: {
    type: String,
    required: true,
  },

  blogLikes: {
    type: Number,
  },

  blogComments: {
    type: Number,
  },

  blogCategory: {
    type: String,
  },

  blogDate: {
    type: Date,
  },
});
const blogCollection = mongoose.model("Blogs", blogModel);

module.exports = blogCollection;
