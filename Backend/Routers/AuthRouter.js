import { Router } from "express";
import { UsersModel } from "../Models/User.js";
import "dotenv/config";
import jwt from "jsonwebtoken";

export const authRouter = Router();

authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await UsersModel.findOne({ email: email });

    if (!users) {
      res.status(404).json({ message: "User is not found." });
    }
    if (users.password !== password) {
      res.status(401).json({ message: "Password is wrong" });
    }

    const token = jwt.sign(
      { id: users._id, email: users.email, role: users.role },
      process.env.TOKEN_KEY
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
});

authRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UsersModel.create({ email, password });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: "Error creating user" });
  }
});
