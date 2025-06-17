import jwt from "jsonwebtoken";

import HwUser from "../db/HwUser.js";

import HttpExeption from "../utils/HttpExeption.js";

const { JWT_SECRET } = process.env;

export const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) throw HttpExeption(401, "Authorization header missing");

  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") throw HttpExeption(401, "Bearer missing");

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await HwUser.findByPk(id);
    if (!user) {
      return next(HttpExeption(401, "User not found"));
    }
    req.user = user;
    next();
  } catch (error) {
    throw HttpExeption(401, error.message);
  }
};

export const authorizeRole = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return next(HttpExeption(403, "Access denied: insufficient permissions"));
    }
    next();
  };
};
