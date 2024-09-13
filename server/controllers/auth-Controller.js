import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const JWT_SECRET = process.env.jwt_secret;
dotenv.config();

export const register = (req, res) => {
  const { username, email, password } = req.body;

  const q = "SELECT * FROM user WHERE username = ?";

  db.query(q, [username], (err, results) => {
    if (err) throw err;

    if (results.length > 0)
      return res.status(409).json({ message: "User already exists" });

    const hashedPassword = bcrypt.hashSync(password, 10);

    const q = "INSERT INTO user (username, email, password) VALUES (? , ? , ?)";

    db.query(q, [username, email, hashedPassword], (err, results) => {
      if (err) throw err;

      const q = "SELECT * FROM user WHERE id = ?";

      db.query(q, [results.insertId], (err, data) => {
        if (err) throw err;

        const token = jwt.sign({ id: data[0].id }, JWT_SECRET, {
          expiresIn: "5h",
        });

        const { password, ...others } = data[0];
        return res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(others);
      });
    });
  });
};

export const login = (req, res) => {
  const { username } = req.body;

  const q = "SELECT * from user WHERE username = ?";

  db.query(q, [username], (err, results) => {
    if (err) throw err;

    if (results.length === 0)
      return res.status(404).json({ message: "user does not exist" });

    const plaintextPassword = req.body.password;

    const existingUserPassword = bcrypt.compareSync(
      plaintextPassword,
      results[0].password
    );

    if (!existingUserPassword)
      return res.status(400).json({ message: "Wrong credentials, try again" });

    const token = jwt.sign({ id: results[0].id }, JWT_SECRET, {
      expiresIn: "5h",
    });
    const { password, ...others } = results[0];

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(others);
  });
};

export const logout = () => {};
