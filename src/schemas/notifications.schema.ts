import * as yup from "yup";

export const NotificationSchema = yup
    .object({
        message: yup
            .string()
            .required("This field is mandatory")
            .min(10, ({ min }) => `Minimum ${min} characters`)
            .max(300, ({ max }) => `Maximum ${max} characters`),
    })
    .required();