import * as yup from "yup";

export const ChangePassword = yup
    .object({
        password: yup
            .string()
            .required("This field is mandatory")
            .min(7, ({ min }) => `Minimum ${min} characters`)
            .max(20, ({ max }) => `Maximum ${max} characters`),
        newPassword: yup
            .string()
            .required("This field is mandatory")
            .min(7, ({ min }) => `Minimum ${min} characters`)
            .max(20, ({ max }) => `Maximum ${max} characters`),
        confirmPassword: yup
            .string()
            .required("This field is mandatory")
            .oneOf([yup.ref("newPassword")], "Passwords must match"),
    })
    .required();