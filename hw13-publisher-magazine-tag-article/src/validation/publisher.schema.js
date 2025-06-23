import * as Yup from "yup";

export const publisherAddSchema = Yup.object({
    name: Yup.string()
        .trim()
        .min(2)
        .required(),
    location: Yup.string()
        .trim()
        .min(10)
        .required(),
});

export const publisherUpdateSchema = Yup.object({
    name: Yup.string()
        .trim()
        .min(2),
    location: Yup.string()
        .trim()
        .min(10),
}).noUnknown(true);
