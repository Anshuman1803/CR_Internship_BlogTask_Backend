const express = require("express");
const { mongooseConnection } = require("./config/mongooseConnection");
const userRoute = require("./Router/User.Router");
const cors = require("cors");
const appServer = express();

appServer.use(express.json());
appServer.use(
  cors({
    origin: "*",
  })
);

appServer.use("/api/user", userRoute);

appServer.listen(5000, async () => {
  try {
    await mongooseConnection();
    console.log(`SERVER STARED  : http://localhost:${5000}`);
  } catch (err) {
    console.log(`SOMETHING WENT WRONG : ${err}`);
  }
});
