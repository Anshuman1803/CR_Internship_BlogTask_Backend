const blogCollection = require("../model/blogModel");
const createPost = async (request, response) => {
  const tempData = request.body;
  const mongooseResponse = await blogCollection.create(tempData);
  return response.send({ msg: "Blog creation successfull" });
};

module.exports = { createPost };
