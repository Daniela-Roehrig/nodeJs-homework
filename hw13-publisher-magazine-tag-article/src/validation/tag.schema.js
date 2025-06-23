import * as Yup from "yup";

export const tagAddSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2)
    .required(),
  articles: Yup.array()
    .of(Yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid article ID"))
    .optional(),
});

export const tagUpdateSchema = Yup.object({
  name: Yup.string()
    .trim()
    .min(2),
  articles: Yup.array()
    .of(Yup.string().matches(/^[0-9a-fA-F]{24}$/, "Invalid article ID"))
    .optional(),
}).noUnknown(true, "Unknown fields found");
