import * as yup from "yup";

export const ResetPasswordSchema = yup
.object({
    password: yup
        .string()
        .required("This field is mandatory")
        .min(7, ({ min }) => `Minimum ${min} characters`)
        .max(20, ({ max }) => `Maximum ${max} characters`),
    confirmPassword: yup
        .string()
        .required("This field is mandatory")
        .oneOf([yup.ref("password")], "Passwords must match"),
})
.required();