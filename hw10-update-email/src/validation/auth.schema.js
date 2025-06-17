import * as Yup from "yup";

import { passwordSchema, emailSchema } from "./hwUsers.schema.js";

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
});