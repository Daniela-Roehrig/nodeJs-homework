import { Router } from "express";
import { postUpdateEmailController, deleteAccountController, updateUserRoleController } from "../controllers/hwUser.controller.js";
import { authenticate, authorizeRole } from "../middlewares/authorization.js";


const updateEmailRouter = Router();

updateEmailRouter.post(
    "/update-email",
    authenticate,
    postUpdateEmailController)

updateEmailRouter.delete(
    "/delete-account",
    authenticate,
    deleteAccountController);

updateEmailRouter.put(
    "/update-role",
    authenticate,
    authorizeRole("admin"),
    updateUserRoleController
);



export default updateEmailRouter; 