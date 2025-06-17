import * as authService from "../services/auth.service.js";

import validateBody from "../utils/validateBody.js";

import { loginSchema } from "../validation/auth.schema.js";

export const loginController = async(req, res)=> {
    await validateBody(loginSchema, req.body);
    const token = await authService.login(req.body);

    res.json({token});
}

export const refreshTokenController = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header fehlt" });
  }

  const token = authHeader.split(" ")[1];
  const newToken = await authService.refreshToken(token);

  res.json({ token: newToken });
};