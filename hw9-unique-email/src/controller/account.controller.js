import bcrypt from "bcrypt";
import User from "../db/User.js";

export const deleteAccount = async (req, res, next) => {
  try {
    const { password } = req.body;

    const user = await User.findByPk(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Wrong password" });

    await user.destroy();
    res.status(200).json({ message: "Account successfully deleted" });
  } catch (err) {
    next(err);
  }
};
