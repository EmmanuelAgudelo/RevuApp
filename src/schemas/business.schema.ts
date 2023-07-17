import * as yup from "yup";

export const BusinessSchema = yup
    .object({
        name: yup
            .string()
            .required("Este campo es obligatorio")
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(20, ({ max }) => `Máximo ${max} caracteres`),
        category: yup
            .string()
            .required("Este campo es obligatorio"),
    })
    .required();