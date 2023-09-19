import * as yup from "yup";

export const BranchSchema = yup
    .object({
        number: yup
            .string()
            .required("This field is mandatory")
            .matches(/^[^A-Za-z]+$/, 'The field must not contain letters')
            .min(1, ({ min }) => `Minimum ${min} characters`)
            .max(2, ({ max }) => `Maximum ${max} characters`), 
        address: yup
            .string()
            .required("This field is mandatory"),
        phone: yup
            .string()
            .required("This field is mandatory")
            .matches(/^[^A-Za-z]+$/, 'The field must not contain letters')
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(10, ({ max }) => `Maximum ${max} characters`),

    })
    .required();