import * as Yup from "yup";

export const productAddSchema = Yup.object({
    name: Yup.string().required(),
    price: Yup.number().required().min(0),
    description: Yup.string().required(),
});

export const productUpdateSchema = Yup.object({
    name: Yup.string(),
    price: Yup.number().min(0),
    description: Yup.string(),
});