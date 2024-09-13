import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const { username, email, password } = req.body;

  const userExists = "SELECT * from user where email = ?";
  db.query(userExists, [email], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      return res.status(409).json({ error: "User already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const query =
      "INSERT INTO user(`username`, `email`, `password` ) VALUES(?)";

    db.query(query, [username, email, hashedPassword], (err, results) => {
      if (err) throw err;

      return res
        .status(200)
        .json({ message: "User inserted successfully" }, results);
    });
  });
};

export const login = () => {};

export const logout = () => {};
