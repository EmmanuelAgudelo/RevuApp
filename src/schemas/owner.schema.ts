import * as yup from "yup";

export const OwnerSchema = yup
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
            .max(15, ({ max }) => `Máximo ${max} caracteres`),
        document_type: yup
            .string()
            .required("Este campo es obligatorio")
            .oneOf(['C.C', 'C.E', 'T.I'], 'Tipo de documento no válido'),
        document: yup
            .string()
            .required("Este campo es obligatorio")
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(15, ({ max }) => `Máximo ${max} caracteres`),
    })
    .required();