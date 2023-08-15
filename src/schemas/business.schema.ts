import * as yup from "yup";

export const BusinessSchema = yup
    .object({
        name: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(20, ({ max }) => `Maximum ${max} characters`),
        category: yup
            .string()
            .required("This field is mandatory"),
    })
    .required();