import * as yup from 'yup';
import { passwordRegex } from '../regexes';

const validationNewPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Пароль є обов'язковим")
    .min(8, 'Пароль має містити щонайменше з 8 символів')
    .matches(passwordRegex, 'Пароль повинен включати великі та маленькі латинські літери, числа та символи')
    .max(32, 'Пароль має містити не більше 32 символів'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Паролі мають співпадати'),
});

export default validationNewPasswordSchema;