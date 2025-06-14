import bcrypt from "bcrypt";
import User from "../db/User.js";
import { checkMustChangePassword } from "../services/user.service.js";

export const profile = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    checkMustChangePassword(user);

    res.status(200).json({
      message: "Welcome to your profile!",
      user: { id: user.id, email: user.email, role: user.role },
    });
  } catch (err) {
    next(err);
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { newPassword } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.mustChangePassword = false;
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    next(err);
  }
};

export const changeEmail = async (req, res, next) => {
  try {
    const { newEmail, password } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "user not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Wrong password" });

    const existingEmail = await User.findOne({ where: { email: newEmail } });
    if (existingEmail) return res.status(409).json({ message: "Email is already taken" });

    user.email = newEmail;
    await user.save();

    res.status(200).json({ message: "Email changed successfully.", newEmail });
  } catch (err) {
    next(err);
  }
};
