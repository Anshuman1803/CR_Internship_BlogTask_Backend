const bcrypt = require("bcrypt");
const saltRound = 10;
const registredUserCollection = require("../model/userModel");

const updateUserPassword = async (request, response) => {
  const tempUser = request.body;
  let IsRegistred = await registredUserCollection.findOne({
    userEmail: { $eq: tempUser.userEmail },
  });

  if (IsRegistred) {
    //hashing password using bcrypt
    tempUser.userPassword = bcrypt.hashSync(tempUser.userPassword, saltRound);

    let mongooseResponse = await registredUserCollection.updateOne(
      { userEmail: tempUser.userEmail },
      { userPassword: tempUser.userPassword }
    );

    if (mongooseResponse.acknowledged) {
      response.send({ resMsg: "Password Updated" });
    } else {
      response.send({ resMsg: "Something Went Wrong." });
    }
  } else {
    return response.send({ resMsg: "User Not Registred" });
  }
};

module.exports = { updateUserPassword };
