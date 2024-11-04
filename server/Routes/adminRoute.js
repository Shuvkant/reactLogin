import express from "express";
import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import bcrypt from "bcrypt";

const router = express.Router();
const JWT_SECRET = "shuvkant";

router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await adminModel.findOne({ email: email });
    console.log(user);
    if (!user) {
      return res.status(401).json({
        loginStatus: false,
        Message: "User not found",
      });
    } else {
      //checking password
      //     const isPassword = await bcrypt.compare(password, user.password);
      if (user.password != password) {
        return res.status(401).json({
          loginStatus: false,
          message: "Incorrect password",
        });
      }

      // Generate JWT
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
      console.log(token);

      // Set cookie with token
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production", // Only secure in production
      });

      return res.json({ loginStatus: true });
    }
  } catch (err) {
    console.log(err);
  }
});

{
  /*
const verifyUser = (req, res, next) => {
  const token = res.cookies.token;
  if (!token) {
    return res.json({ Message: "We need token please provide it " });
  } else {
    jwt.verify(token, "shuvkant", (err, decoded) => {
      if (err) {
        return res.json({ Message: "Authentication Error" });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  }
}*/
}
router.post("/logout", (req, res) => {
  // Clear the token cookie
  res.cookie("token", "", {});

  return res.json({ message: "Logout successful" });
});
router.get("/", (req, res) => {
  return res.json({ status: "success", user: req.user });
});

export { router as adminRouter };
