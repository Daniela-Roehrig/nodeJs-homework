import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../db/User.js";

export const register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).json({ message: "Email is already registered." });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    res.status(201).json({ message: "Registration was successful", userId: newUser.id });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(401).json({ message: "Invalid email or password." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid email or password." });

    const payload = { 
      id: user.id, 
      email: user.email, 
      role: user.role, 
      mustChangePassword: user.mustChangePassword || false };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "24h",
    });

    res.status(200).json({ message: "Successfully logged in", token });
  } catch (err) {
    next(err);
  }
};

