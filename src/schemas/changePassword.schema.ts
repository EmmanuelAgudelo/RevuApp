import * as yup from "yup";

export const ChangePassword = yup
    .object({
        password: yup
            .string()
            .required("Este campo es obligatorio")
            .min(7, ({ min }) => `Mínimo ${min} caracteres`)
            .max(20, ({ max }) => `Máximo ${max} caracteres`),
        newPassword: yup
            .string()
            .required("Este campo es obligatorio")
            .min(7, ({ min }) => `Mínimo ${min} caracteres`)
            .max(20, ({ max }) => `Máximo ${max} caracteres`),
        confirmPassword: yup
            .string()
            .required("Este campo es obligatorio")
            .oneOf([yup.ref("newPassword")], "Las contraseñas deben coincidir"),
    })
    .required();