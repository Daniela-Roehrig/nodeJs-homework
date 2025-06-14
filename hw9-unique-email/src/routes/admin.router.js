import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get(
  "/admin",
  authMiddleware,
  roleMiddleware("admin"),
  (req, res) => {
    res.json({ message: "Welcome to the admin area!" });
  }
);

export default router;
