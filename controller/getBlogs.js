const blogCollection = require("../model/blogModel")
const getBlogs = async (request, response) => {
const {email} = request.params;
const mongooseResponse = await blogCollection.find({blogAuthor : email});
return response.send(mongooseResponse)
}
module.exports = { getBlogs };
