import * as yup from "yup";

export const RevuSurprise = yup
    .object({
        price: yup
            .number()
            .required("Este campo es obligatorio")
            .min(1, ({ min }) => `Mínimo ${min} dolar`)
            .max(10, ({ max }) => `Máximo ${max} dolares`),
        amount: yup
            .number()
            .required("Este campo es obligatorio")
            .min(1, ({ min }) => `Mínimo ${min} caracteres`)
            .max(10, ({ max }) => `Máximo ${max} caracteres`),
        description: yup
            .string()
            .required("Este campo es obligatorio")
            .min(10, ({ min }) => `Mínimo ${min} caracteres`)
            .max(200, ({ max }) => `Máximo ${max} caracteres`),
        start_pickup_time: yup
            .string()
            .required("Este campo es obligatorio")
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(200, ({ max }) => `Máximo ${max} caracteres`),
        end_pickup_time: yup
            .string()
            .required("Este campo es obligatorio")
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(200, ({ max }) => `Máximo ${max} caracteres`),

    })
    .required();