import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import fileUpload from "express-fileupload";

dotenv.config();

import basicRoutes from "./Routes/BasicRoutes.js";
import adminRoutes from "./Routes/AdminRoutes.js";

import connectDB from "./Config/DataBase.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://cia-ladwa.vercel.app",
  "https://admin-cia-ladwa.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the CIA Backend!");
});

app.use("/api/v1", basicRoutes);
app.use("/api/v1/admin", adminRoutes);
