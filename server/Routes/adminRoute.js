import express from "express";
import adminModel from "../models/adminModel.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const router = express.Router();
const JWT_SECRET = "shuvkant";

// Middleware for parsing cookies
router.use(cookieParser());
//Employee Database
router.post("/employeedata", async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await adminModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        loginStatus: false,
        message: "User not found",
      });
    }

    // Check password using bcrypt

    if (password != user.password) {
      return res.status(401).json({
        loginStatus: false,
        message: "Incorrect password",
      });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    console.log("Generated Token:", token);

    // Set cookie with token
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      sameSite: "strict",
    });

    return res.json({ loginStatus: true });
  } catch (err) {
    console.error("Error during login:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Verify User Middleware
const verifyUser = (req, res, next) => {
  const token = req.cookies.token; // Correct way to access cookies
  if (!token) {
    return res.status(401).json({
      message: "Authentication required, please log in",
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Authentication error, invalid token",
      });
    }
    req.user = decoded.id; // Attach user ID to request for further use
    next();
  });
};

// Logout Route
router.post("/logout", (req, res) => {
  // Clear the token cookie by setting it to expire immediately
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // Expire immediately
    sameSite: "strict",
  });

  return res.json({ message: "Logout successful" });
});

// Example Protected Route
router.get("/", verifyUser, (req, res) => {
  return res.json({ status: "success", user: req.user });
});

export { router as adminRouter };
