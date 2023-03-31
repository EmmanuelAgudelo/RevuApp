import * as yup from "yup";

export const RecoverSchema = yup
.object({
  email: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(40, ({ max }) => `Máximo ${max} caracteres`)
    .email("Ingresa un correo valido"),
})
.required();