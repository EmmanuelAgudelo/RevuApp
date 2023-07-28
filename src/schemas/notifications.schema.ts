import * as yup from "yup";

export const NotificationSchema = yup
    .object({
        message: yup
            .string()
            .required("Este campo es obligatorio")
            .min(10, ({ min }) => `Mínimo ${min} caracteres`)
            .max(300, ({ max }) => `Máximo ${max} caracteres`),
    })
    .required();