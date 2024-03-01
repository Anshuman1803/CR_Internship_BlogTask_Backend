const bcrypt = require("bcrypt");
const registredUserCollection = require("../model/userModel");

const userRegister = async (request, response) => {
  let tempUser = request.body;
  let IsRegistred = await registredUserCollection.findOne({
    userEmail: { $eq: tempUser.userEmail },
  });

  if (IsRegistred) {
    return response.send({ resMsg: "User Already Exists" });
  } else {
    //hashing password using bcrypt
    tempUser.userPassword = bcrypt.hashSync(tempUser.userPassword, saltRound);

    // saving new user in database
    const registredResult = await registredUserCollection.create(tempUser);
    if (registredResult) {
      // sending response back to client
      return response.send({ resMsg: "User Registred Successfully" });
    } else {
      return response.send({ resMsg: "Something Went Wrong, Try Again" });
    }
  }
};
module.exports = { userRegister };
