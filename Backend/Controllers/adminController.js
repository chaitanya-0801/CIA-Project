import adminModel from "../Models/adminModel.js";
import SuccessStory from "../Models/SuccessStoryModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUser = await adminModel.findOne({ email });

    if (!findUser) {
      return res.status(401).json({
        message: "You are not authorised to login",
      });
    }

    const comparePass = await bcrypt.compare(password, findUser.password);

    if (!comparePass) {
      return res.status(401).json({
        message: "Invalid Credentials",
      });
    }

    const payload = {
      name: findUser.name,
      role: findUser.role,
      email: findUser.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const admin = {
  name: findUser.name,
  email: findUser.email,
  role: findUser.role,
  contactNumber: findUser.contactNumber,
};
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .status(200)
      .json({
        message: "Login Successful",
        success:true,
      token,
      admin
      });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

const createMoreAdmin = async (req, res) => {
  try {
    const { name, email, contactNumber, password } = req.body;

    const findUser = await adminModel.findOne({ email });

    if (findUser) {
      return res.status(401).json({
        message: "Already Present",
      });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const admin = await adminModel.create({
      name,
      email,
      password: hashPass,
      role: "admin",
      contactNumber,
    });

    res.status(200).json({
      success: true,
      message: "Admin Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const allAdmins = async (req, res) => {
  try {
    const allAdminData = await adminModel.find();
    res.status(200).json({
      success: true,
      allAdminData
    })
  } catch (error) {
     res.status(500).json({
      message: error.message,
    });
  }
}

// const newSuccessStory = async (req, res) => {
//   try {
//     const { name, serviceType, country, message } = req.body;
//     const imageUrl = await uploadImage(req.file);

//     const newSuccess = await SuccessStory.create({
//       name,
//       serviceType,
//       country,
//       message,
//       imageUrl,
//     });

//     res.status(200).json({
//       message: "Added SuccessFully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: error.message,
//     });
//   }
// };

export { Login, createMoreAdmin,allAdmins };
