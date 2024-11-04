import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/adminRoute.js";
import connectDB from "./db/database.js";
import adminModel from "./models/adminModel.js";

const app = express();
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));
const port = 3000;
app.use(express.json());
//app.get("/", (req, res) => {
//res.send("Hello shuvkant");
//});

connectDB().then(() => {
  app.use("/auth", adminRouter);
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
