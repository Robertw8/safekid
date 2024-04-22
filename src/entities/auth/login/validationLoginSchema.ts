import * as yup from 'yup';
import { emailRegex, passwordRegex } from '../regexes';

const validationLoginSchema = yup.object().shape({
  email: yup.string().required("Email є обов'язковим").matches(emailRegex, 'Введіть валідний Email'),
  password: yup
    .string()
    .required("Пароль є обов'язковим")
    .min(8, 'Пароль має містити щонайменше з 8 символів')
    .matches(passwordRegex, 'Пароль повинен включати великі та маленькі латинські літери, числа та символи')
    .max(32, 'Пароль має містити не більше 32 символів'),
});

export default validationLoginSchema;