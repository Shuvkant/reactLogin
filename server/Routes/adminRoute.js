import express from "express";
import cors from "cors";

const router = express.Router();

router.post("/login", (req, res) => {
  const email = "shuvkantphanait@gmail.com";
  const password = "1234";
  if (req.body.email === email && req.body.password === password) {
    return res.json({ loginStatus: true });
  } else {
    return res.json({ loginStatus: false, Error: "wrong email or password" });
  }
});

export { router as adminRouter };
