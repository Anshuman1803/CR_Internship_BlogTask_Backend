const express = require("express");
const { mongooseConnection } = require("./config/mongooseConnection");
const userRoute = require("./Router/User.Router");
const blogRoute = require("./Router/Blog.Router");
const cors = require("cors");
const registredUserCollection = require("./model/userModel");
const appServer = express();

appServer.use(express.json());
appServer.use(
  cors({
    origin: "*",
  })
);

appServer.use("/api/user", userRoute);
appServer.use("/api/blog", blogRoute);

appServer.get("/api/user/:id", async (request, response) => {
  const id = request.params.id;
  const userDetails = await registredUserCollection.findOne({ _id: id });
  return response.send(userDetails);
});

appServer.listen(5000, async () => {
  try {
    await mongooseConnection();
    console.log(`SERVER STARED  : http://localhost:${5000}`);
  } catch (err) {
    console.log(`SOMETHING WENT WRONG : ${err}`);
  }
});
