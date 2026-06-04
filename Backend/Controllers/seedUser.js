import dotenv from "dotenv";
dotenv.config();

import bcrypt from "bcrypt";
import adminModel from "../Models/adminModel.js";
import connectDB from "../Config/DataBase.js";
connectDB()
const seedAdmin = async () => {
  try {
    const existingAdmin = await adminModel.findOne({
      email: "cialadwa@gmail.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hashedPass = await bcrypt.hash("Cia@2026", 10);

    await adminModel.create({
      name: "Sandeep Kumar",
      role: "super-admin",
      contactNumber: "8295280143",
      password: hashedPass,
      email: "cialadwa@gmail.com",
    });

    console.log("Admin Created Successfully");
    process.exit(0);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

seedAdmin();