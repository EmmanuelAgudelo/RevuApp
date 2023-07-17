import * as yup from "yup";

export const SupportSchema = yup
    .object({
        question: yup
            .string()
            .required("Este campo es obligatorio")
            .min(10, ({ min }) => `Mínimo ${min} caracteres`)
            .max(200, ({ max }) => `Máximo ${max} caracteres`),
    })
    .required();