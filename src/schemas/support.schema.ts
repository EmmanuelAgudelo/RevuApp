import * as yup from "yup";

export const SupportSchema = yup
    .object({
        message: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(200, ({ max }) => `Maximum ${max} characters`),
    })
    .required();