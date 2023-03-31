import * as yup from "yup";

export const LoginSchema = yup
.object({
  email: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(40, ({ max }) => `Máximo ${max} caracteres`)
    .email("Ingresa un correo valido"),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(7, ({ min }) => `Mínimo ${min} caracteres`)
    .max(20, ({ max }) => `Máximo ${max} caracteres`)
})
.required();