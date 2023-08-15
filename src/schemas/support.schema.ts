import * as yup from "yup";

export const SupportSchema = yup
    .object({
        question: yup
            .string()
            .required("This field is mandatory")
            .min(10, ({ min }) => `Mínimo ${min} caracteres`)
            .max(200, ({ max }) => `Maximum ${max} characters`),
    })
    .required();