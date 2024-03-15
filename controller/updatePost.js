const blogCollection = require("../model/blogModel");
const updatePost = async (request, response) => {
  const {blogPoster, blogTitle, blogCategory, blogDesc,_id} = request.body;
  const mongooseResponse = await blogCollection.updateOne({_id : _id},{
    blogTitle : blogTitle,
    blogPoster : blogPoster,
    blogCategory : blogCategory,
    blogDesc : blogDesc,
  } );

  if(mongooseResponse.acknowledged){
      return response.send({ msg: "Blog update successfull"});
    }else{
        return response.send({ msg: "Something went wrong"});
  }
};

module.exports = { updatePost };