import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

import {
  register,
  login
} from "../controller/auth.controller.js";

import {
  profile,
  changePassword,
  changeEmail
} from "../controller/profile.controller.js";

import {
  deleteAccount
} from "../controller/account.controller.js";

import {
  registerSchema,
  loginSchema,
  changePasswordSchema,
  deleteAccountSchema,
  changeEmailSchema
} from "../validation/auth.schema.js";

const router = express.Router();

const validate = schema => async (req, res, next) => {
  try {
    req.body = await schema.validate(req.body);
    next();
  } catch (err) {
    next(err);
  }
};

router.get("/profile", authMiddleware, profile);

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.post("/change-password", authMiddleware, validate(changePasswordSchema), changePassword);
router.post("/delete-account", authMiddleware, validate(deleteAccountSchema), deleteAccount);
router.post("/change-email", authMiddleware, validate(changeEmailSchema), changeEmail);

export default router;

