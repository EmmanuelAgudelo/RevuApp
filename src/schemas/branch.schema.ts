import * as yup from "yup";

export const BranchSchema = yup
    .object({
        number: yup
            .string()
            .required("Este campo es obligatorio")
            .matches(/^[^A-Za-z]+$/, 'El campo no debe contener letras')
            .min(1, ({ min }) => `Mínimo ${min} caracteres`)
            .max(2, ({ max }) => `Máximo ${max} caracteres`), 
        city: yup
            .string()
            .required("Este campo es obligatorio")
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(100, ({ max }) => `Máximo ${max} caracteres`),
        department: yup
            .string()
            .required("Este campo es obligatorio")
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(100, ({ max }) => `Máximo ${max} caracteres`),
        address: yup
            .string()
            .required("Este campo es obligatorio")
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(200, ({ max }) => `Máximo ${max} caracteres`),
        phone: yup
            .string()
            .required("Este campo es obligatorio")
            .matches(/^[^A-Za-z]+$/, 'El campo no debe contener letras')
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(10, ({ max }) => `Máximo ${max} caracteres`),
        card_number: yup
            .string()
            .required("Este campo es obligatorio")
            .matches(/^[^A-Za-z]+$/, 'El campo no debe contener letras')
            .min(5, ({ min }) => `Mínimo ${min} caracteres`)
            .max(20, ({ max }) => `Máximo ${max} caracteres`),

    })
    .required();