import * as Yup from "yup";

export const articleAddSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(2)
    .required(),
  content: Yup.string()
    .trim()
    .min(10)
    .required(),
});

export const articleUpdateSchema = Yup.object({
  title: Yup.string()
    .trim()
    .min(2),
  content: Yup.string()
    .trim()
    .min(10),
}).noUnknown(true, "Unknown fields found");