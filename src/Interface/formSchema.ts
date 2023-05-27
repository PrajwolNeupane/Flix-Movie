import * as yup from "yup";
import YupPassword from 'yup-password';
YupPassword(yup);


export const loginSchema = yup.object({
    email: yup.string().email().required("Please enter email"),
    password: yup.string().required('Please enter password'),
    saveAuth:yup.boolean().required()
  }).required();

export type loginDataInterface = yup.InferType<typeof loginSchema>;

export const signupSchema = yup.object({
    name: yup.string().required("Please enter username"),
    email: yup.string().email().required("Please enter email"),
    password: yup.string().required('Please enter password').min(8,'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special')
    .minLowercase(1, 'password must contain at least 1 lower case letter')
    .minUppercase(1, 'password must contain at least 1 upper case letter')
    .minNumbers(1, 'password must contain at least 1 number')
    .minSymbols(1, 'password must contain at least 1 special character'),
    repeatPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match").required('Please enter password'),
    saveAuth:yup.boolean().required()
  }).required();

export type signupDataInterface = yup.InferType<typeof signupSchema>;