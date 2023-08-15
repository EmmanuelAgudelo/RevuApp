import * as yup from "yup";

export const RevuSurprise = yup
    .object({
        price: yup
            .number()
            .required("This field is mandatory")
            .min(4.99, ({ min }) => `Minimum ${min} dollars`),
        amount: yup
            .number()
            .required("This field is mandatory")
            .min(1, ({ min }) => `Minimum ${min} characters`)
            .max(10, ({ max }) => `Maximum ${max} characters`),
        description: yup
            .string()
            .required("This field is mandatory")
            .min(10, ({ min }) => `Minimum ${min} characters`)
            .max(200, ({ max }) => `Maximum ${max} characters`),
        start_pickup_time: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(200, ({ max }) => `Maximum ${max} characters`),
        end_pickup_time: yup
            .string()
            .required("This field is mandatory")
            .min(5, ({ min }) => `Minimum ${min} characters`)
            .max(200, ({ max }) => `Maximum ${max} characters`),

    })
    .required();