import * as yup from "yup";
import Colombia from "../json/colombia.json";


export const RegisterSchema = yup
.object({
  names: yup
    .string()
    .required("Este campo es obligatorio")
    .min(3, ({ min }) => `Mínimo ${min} caracteres`)
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
    .required("Este campo es obligatorio")
    .oneOf(['C.C', 'C.E', 'T.I'], 'Tipo de documento no válido'),
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
    .oneOf(Colombia.map((e)=>(
      e.departamento
    )),'Departamento no valido'),
  city: yup
    .string()
    .required("Este campo es obligatorio")
    .oneOf(Colombia.flatMap((dep) => dep.ciudades),'Cuidad no valida'),
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