import * as Yup from "yup";

export const productAddSchema = Yup.object({
    name: Yup.string()
        .required(),
    price: Yup.string()
        .trim()
        .min(2)
        .required(),
    category: Yup.string()
        .matches(/^[0-9a-fA-F]{24}$/, "Unknown publisher-ID")
        .required(),
});

