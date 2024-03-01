const mongoose = require("mongoose");
const userModel = mongoose.Schema({
    "userName" :{
        type : String,
        required : true
    },
    "userPhone" :{
        type : String,
        required : true
    },
    "userEmail" :{
        type : String,
        required : true
    },
    "userPassword" :{
        type : String,
        required : true
    },
});
const registredUserCollection = mongoose.model("registredUser", userModel);

module.exports = registredUserCollection;