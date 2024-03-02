const bcrypt = require("bcrypt");
const registredUserCollection = require("../model/userModel");
const userLogin = async (request, response) => {
  const tempUser = request.body;
  let findUser = await registredUserCollection.find({
    userEmail: { $eq: tempUser.userEmail },
  });

  if (findUser.length === 0) {
    return response.send({ resMsg: "User Not Registred" });
  }
  const userAuthenticaticated = bcrypt.compareSync(
    tempUser.userPassword,
    findUser[0].userPassword
  );

  if (userAuthenticaticated) {
    findUser[0].userPassword = undefined;
    return response.send({
      resMsg: "User Logged In Successfully",
      currentUser: findUser,
    });
  } else {
    return response.send({ resMsg: "Password is not Correct" });
  }
};

module.exports = { userLogin };
