import HwUser from "../db/HwUser.js";
import HttpExeption from "../utils/HttpExeption.js";

export const postUpdateEmailController = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        req.user.email = email;
        await req.user.save();

        res.json({
            message: "Email updated successfully",
            user: {
                id: req.user.id,
                username: req.user.username,
                email: req.user.email,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to update email" });
    }
};



export const deleteAccountController = async (req, res) => {
  const user = req.user; 
  await user.destroy();  

  res.json({ message: `User ${user.email} has been deleted` });
};


export const updateUserRoleController = async (req, res, next) => {
  const { userId, newRole } = req.body;

  const user = await HwUser.findByPk(userId);
  if (!user) {
    return next(HttpExeption(404, "User not found"));
  }

  user.role = newRole;
  await user.save();

  res.json({ message: `Role of user ${user.username} has been changed to '${newRole}'` });
};

