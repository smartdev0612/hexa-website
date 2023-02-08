import "dotenv/config";
import validator from "email-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";
import signUpModel from "../models/signUpModel.js";

const router = express.Router()


//SignUP Route Controller 
  export const signUp = async (req, res) => {
      const {fullname , email, password , profilePhoto} = req.body;
      try{

        const newSignUpModel = new signUpModel({
            fullname: fullname,
            email: email,
            password: password,
            profilePhoto: profilePhoto,
            roles: "admin"
        })

         //Validation
        //Database query
        //Auth middleware
        //Error Handler
        console.log(req)
        // await newSignUpModel.save()
          
      }catch(error){
          console.log(error)
          res.send({message: error});
      }

  }