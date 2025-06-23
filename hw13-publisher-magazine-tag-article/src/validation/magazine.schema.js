import * as Yup from "yup";

export const magazineAddSchema = Yup.object({
    title: Yup.string()
        .trim()
        .min(2)
        .required(),
    issueNumber: Yup.string()
        .trim()
        .min(10)
        .required(),
    publisher: Yup.string()
        .matches(/^[0-9a-fA-F]{24}$/, "Unknown publisher-ID")
        .required(),
});


export const magazineUpdateSchema = Yup.object({
    title: Yup.string()
        .trim()
        .min(2),
    issueNumber: Yup.string()
        .trim()
        .min(10),
    publisher: Yup.string()
        .matches(/^[0-9a-fA-F]{24}$/, "Unknown publisher-ID"),
}).noUnknown(true, "Unknown finds");
