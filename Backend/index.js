import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
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
