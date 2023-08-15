import * as yup from "yup";

export const LoginSchema = yup
.object({
  email: yup
    .string()
    .required("This field is mandatory")
    .min(5, ({ min }) => `Minimum ${min} characters`)
    .max(40, ({ max }) => `Maximum ${max} characters`)
    .email("Enter a valid email"),
  password: yup
    .string()
    .required("This field is mandatory")
    .min(7, ({ min }) => `Minimum ${min} characters`)
    .max(20, ({ max }) => `Maximum ${max} characters`)
})
.required();