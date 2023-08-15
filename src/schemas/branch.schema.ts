import * as yup from "yup";

export const BranchSchema = yup
    .object({
        number: yup
            .string()
            .required("This field is mandatory")
            .matches(/^[^A-Za-z]+$/, 'The field must not contain letters')
            .min(1, ({ min }) => `Minimum ${min} characters`)
            .max(2, ({ max }) => `Maximum ${max} characters`), 
        city: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(100, ({ max }) => `Maximum ${max} characters`),
        department: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(100, ({ max }) => `Maximum ${max} characters`),
        address: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(200, ({ max }) => `Maximum ${max} characters`),
        phone: yup
            .string()
            .required("This field is mandatory")
            .matches(/^[^A-Za-z]+$/, 'The field must not contain letters')
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(10, ({ max }) => `Maximum ${max} characters`),
        card_number: yup
            .string()
            .required("This field is mandatory")
            .matches(/^[^A-Za-z]+$/, 'The field must not contain letters')
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(20, ({ max }) => `Maximum ${max} characters`),

    })
    .required();