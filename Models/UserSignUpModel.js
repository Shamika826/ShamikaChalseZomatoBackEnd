const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SignUpSchema = new Schema(
  {
    "fullname": { type: String },
    "email": { type: String },
    "mobileNo": { type: Number },
    "Password": { type: String }
  }
)

const SignUpModel = mongoose.model("UserSignUp", SignUpSchema, "UserSignUp")

module.exports = SignUpModel


/*
SignUp:-
When it comes to post method we craete their Schema in model
and an empty Collection names User where user entered data will go
*/