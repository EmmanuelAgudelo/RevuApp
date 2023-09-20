import * as yup from "yup";

export const OwnerSchema = yup
    .object({
        names: yup
            .string()
            .required("This field is mandatory")
            .min(3, ({ min }) => `Minimum ${min} characters`)
            .max(20, ({ max }) => `Maximum ${max} characters`),
        last_names: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(20, ({ max }) => `Maximum ${max} characters`),
        email: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(40, ({ max }) => `Maximum ${max} characters`)
            .email("Enter a valid email"),
        cellphone: yup
            .string()
            .required("This field is mandatory")
            .matches(/^[^A-Za-z]+$/, 'The field must not contain letters')
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(15, ({ max }) => `Maximum ${max} characters`),
        document_type: yup
            .string()
            .required("This field is mandatory")
            .oneOf(['ID'], 'Invalid document type'),
        document: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(15, ({ max }) => `Maximum ${max} characters`),
    })
    .required();