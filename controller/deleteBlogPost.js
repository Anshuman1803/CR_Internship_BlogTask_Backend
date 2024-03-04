const blogCollection = require("../model/blogModel");
const deletePost = async (request, response) => {
  const {id} = request.params;
  const mongooseResponse = await blogCollection.findOneAndDelete({_id : id});
  return response.send({ msg: "Blog deleted successfull"});
};

module.exports = { deletePost };
