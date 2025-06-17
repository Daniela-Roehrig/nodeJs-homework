import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import HwUser from "../db/HwUser.js";

import HttpExeption from "../utils/HttpExeption.js";

const { JWT_SECRET } = process.env;

export const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user) throw HttpExeption(401, `User with email=${email} not found`); 

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) throw HttpExeption(401, `Password invalid`);

  const payload = {
    id: user.id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "24h" });
  return token;
};

export const refreshToken = async (token) => {
  if (!token) {
    throw HttpExeption(401, "Token missing");
  }

  let payload;
  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw HttpExeption(401, "Token invalid or expired");
  }

  const user = await HwUser.findByPk(payload.id);
  if (!user) {
    throw HttpExeption(404, "User not found");
  }

  const newToken = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "24h" });

  return newToken;
};