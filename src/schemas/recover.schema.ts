import * as yup from "yup";

export const RecoverSchema = yup
.object({
  email: yup
    .string()
    .required("This field is mandatory")
    .min(5, ({ min }) => `Minimum ${min} characters`)
    .max(40, ({ max }) => `Maximum ${max} characters`)
    .email("Enter a valid email"),
})
.required();