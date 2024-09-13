import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { db } from "./db.js";
import Authrouter from "./routes/auth-Route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use("/api/auth", Authrouter);

app.listen(PORT, () => {
  console.log(`listening...`);
});
