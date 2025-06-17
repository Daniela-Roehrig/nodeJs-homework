import * as Yup from "yup";

import { emailValidation, passwordValidation } from "../constants/hwUsers.constants.js";

export const passwordSchema = Yup.string()
.trim()
.min(6)
.matches(
  passwordValidation.value,
  passwordValidation.message
)
.required();

export const emailSchema = Yup.string()
.trim()
.matches(emailValidation.value, emailValidation.message)
.required();

