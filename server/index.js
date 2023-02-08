import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";


import router from "./routes/routes.js";

//Default PORT 3005 or Hosting provide PORT
const PORT = process.env.PORT || 3005;


//setUp Express Js Web server 
const app = express()
app.use(bodyParser.urlencoded({limit: "16mb", extended: true}))
app.use(bodyParser.json({limit: "16mb", extended: true}))
app.use(cors())


// separate  All ROuter Codes From server connect code 
app.use("/", router);


//First making sure Database connect establish  than  after Open Port to listen Request
//All Private Key and Connection url Stored in .ENV File 
export const conn = mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });