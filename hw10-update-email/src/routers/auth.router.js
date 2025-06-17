import { Router } from "express";

import { loginController, refreshTokenController } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/refresh-token", refreshTokenController);

export default authRouter;