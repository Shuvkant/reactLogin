import express from "express";
import cors from "cors";
import adminModel from "../models/adminModel.js";

const router = express.Router();

router.post("/login", (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    adminModel.findOne({ email: email }).then((user) => {
      if (user.password === password) {
        return res.json({ loginStatus: true });
      } else {
        return res.json({ loginStatus: false });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

export { router as adminRouter };
