import mongoose from "mongoose";

//Mongoose Schema Model SignUp
const signup = mongoose.Schema({
  fullname: {type:String, required: true},
  email: {type:String, required: true},
  password: {type:String, required: true},
  profilephoto: {type:String, required: true},
  roles:{type: String, require: true}
});

var signUpModel = mongoose.model("HexaToken", signup);

export default signUpModel;
