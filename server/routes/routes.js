import express from "express";
import { signUp } from '../controllers/authController.js'

const router = express.Router();

//Default response "/" 
router.get("/", (req, res) => {
    res.send("server running ");
   
  });

  //SignUp router
router.post("/signUp", signUp);

  export default router