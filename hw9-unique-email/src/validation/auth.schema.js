import * as Yup from "yup";

export const registerSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const changePasswordSchema = Yup.string()
  .min(6)
  .required();

export const deleteAccountSchema = Yup.string()
  .required();

export const changeEmailSchema = Yup.object({
  newEmail: Yup.string().email().required(),
  password: Yup.string().required(),
});
