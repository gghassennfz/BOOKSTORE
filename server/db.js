import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const Connection = async () => {
  try {
    mongoose.connect(process.env.URL);
    console.log("Connected");
  } catch (err) {
    console.log("Error: " + err);
  }
};

Connection();
