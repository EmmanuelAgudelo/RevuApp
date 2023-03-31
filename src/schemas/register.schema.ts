import * as yup from "yup";

export const RegisterSchema = yup
.object({
  names: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(20, ({ max }) => `Máximo ${max} caracteres`),
  last_names: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(20, ({ max }) => `Máximo ${max} caracteres`),
  email: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(40, ({ max }) => `Máximo ${max} caracteres`)
    .email("Ingresa un correo valido"),
  cellphone: yup
    .string()
    .required("Este campo es obligatorio")
    .matches(/^[^A-Za-z]+$/, 'El campo no debe contener letras')
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(15,({ max }) => `Máximo ${max} caracteres`),
  document_type: yup
    .string()
    .required("Este campo es obligatorio"),
  document: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(15,({ max }) => `Máximo ${max} caracteres`),
  password: yup
    .string()
    .required("Este campo es obligatorio")
    .min(7, ({ min }) => `Mínimo ${min} caracteres`)
    .max(20, ({ max }) => `Máximo ${max} caracteres`),
  name: yup
    .string()
    .required("Este campo es obligatorio")
    .min(5, ({ min }) => `Mínimo ${min} caracteres`)
    .max(20, ({ max }) => `Máximo ${max} caracteres`),
  category: yup
    .string()
    .required("Este campo es obligatorio"),
  department: yup
    .string()
    .required("Este campo es obligatorio")
    .min(3, ({ min }) => `Mínimo ${min} caracteres`)
    .max(15, ({ max }) => `Máximo ${max} caracteres`),
  city: yup
    .string()
    .required("Este campo es obligatorio")
    .min(3, ({ min }) => `Mínimo ${min} caracteres`)
    .max(15, ({ max }) => `Máximo ${max} caracteres`),
  address: yup
    .string()
    .required("Este campo es obligatorio")
    .min(3, ({ min }) => `Mínimo ${min} caracteres`)
    .max(30, ({ max }) => `Máximo ${max} caracteres`),
  phone: yup
    .string()
    .required("Este campo es obligatorio")
    .matches(/^[^A-Za-z]+$/, 'El campo no debe contener letras')
    .min(3, ({ min }) => `Mínimo ${min} caracteres`)
    .max(10, ({ max }) => `Máximo ${max} caracteres`),
  banking_information: yup
    .string()
    .required("Este campo es obligatorio")
})
.required();